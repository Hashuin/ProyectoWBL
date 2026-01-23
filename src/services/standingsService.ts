import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';

export interface TeamStanding {
  id?: string;
  rank: number;
  teamName: string;
  logo?: string;
  games: number;
  wins: number;
  losses: number;
  percentage: number;
  gamesBehind: number;
  division: string;
  createdAt?: Timestamp;
}

const COLLECTION_NAME = 'standings';

export const standingsService = {
  // Get all standings
  async getStandings(): Promise<TeamStanding[]> {
    const q = query(collection(db, COLLECTION_NAME), orderBy('rank', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as TeamStanding));
  },

  // Get standings by division
  async getStandingsByDivision(division: string): Promise<TeamStanding[]> {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('rank', 'asc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as TeamStanding))
      .filter(standing => standing.division === division);
  },

  // Add team to standings
  async addTeamStanding(standing: Omit<TeamStanding, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...standing,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  // Update team standing
  async updateTeamStanding(id: string, standing: Partial<TeamStanding>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, standing);
  },

  // Delete team standing
  async deleteTeamStanding(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  }
};

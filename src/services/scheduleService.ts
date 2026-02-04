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

export interface GameSchedule {
  id?: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
  date?: string;
  time?: string;
  stadium: string;
  status: 'Pretemporada' | 'Regular' | 'Postemporada';
  homeTeamScore?: number;
  awayTeamScore?: number;
  finished: boolean;
  createdAt?: Timestamp;
}

const COLLECTION_NAME = 'schedule';

export const scheduleService = {
  // Get all games
  async getGames(): Promise<GameSchedule[]> {
    const q = query(collection(db, COLLECTION_NAME), orderBy('date', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as GameSchedule));
  },

  // Add new game
  async addGame(game: Omit<GameSchedule, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...game,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  // Update game
  async updateGame(id: string, game: Partial<GameSchedule>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, game);
  },

  // Delete game
  async deleteGame(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  },

  // Get games by status
  async getGamesByStatus(status: string): Promise<GameSchedule[]> {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('date', 'asc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as GameSchedule))
      .filter(game => game.status === status);
  }
};

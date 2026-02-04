const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-BEjIMazd.js","assets/react-gNaiavg9.js","assets/firebase-BkMFZbKL.js","assets/AdminPage-BGXkcl5N.js","assets/scheduleService-CrTewetr.js","assets/standingsService-uwgg5dg4.js","assets/SchedulePage-Dx1e9lCf.js","assets/StandingsPage-DizGggZz.js"])))=>i.map(i=>d[i]);
import{r as Os,a as Ls,g as Us,b,N as Ds,R as Ms,c as E,L as xe,u as Fs,O as qs,d as zs,B as Vs}from"./react-gNaiavg9.js";import{L as Ws,g as zt,i as Hs,a as Bs,_ as $e,C as Ge,r as Ie,b as $s,S as ee,E as Qe,c as T,d as j,e as I,f as Gs,h as Vt,F as Ce,j as Ks,q as de,k as je,l as Wt,m as Ze,n as Js,o as Ke,p as Ht,u as Bt,s as Ys,t as Xs,v as ie,w as ae,x as Qs,y as Zs,z as er,A as tr,B as sr,D as $t,G as Gt,H as Kt,I as Jt,J as rr,K as nr,M as ir}from"./firebase-BkMFZbKL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();var qe={exports:{}},ne={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt;function ar(){if(dt)return ne;dt=1;var s=Os(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(c,l,d){var u,m={},f=null,_=null;d!==void 0&&(f=""+d),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(_=l.ref);for(u in l)r.call(l,u)&&!a.hasOwnProperty(u)&&(m[u]=l[u]);if(c&&c.defaultProps)for(u in l=c.defaultProps,l)m[u]===void 0&&(m[u]=l[u]);return{$$typeof:e,type:c,key:f,ref:_,props:m,_owner:n.current}}return ne.Fragment=t,ne.jsx=o,ne.jsxs=o,ne}var ut;function or(){return ut||(ut=1,qe.exports=ar()),qe.exports}var i=or(),me={},ht;function cr(){if(ht)return me;ht=1;var s=Ls();return me.createRoot=s.createRoot,me.hydrateRoot=s.hydrateRoot,me}var lr=cr();const dr=Us(lr),ur="modulepreload",hr=function(s){return"/"+s},pt={},Oe=function(e,t,r){let n=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));n=o(t.map(d=>{if(d=hr(d),d in pt)return;pt[d]=!0;const u=d.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":ur,u||(f.as="script"),f.crossOrigin="",f.href=d,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((_,p)=>{f.addEventListener("load",_),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function Yt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pr=Yt,Xt=new Qe("auth","Firebase",Yt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Ws("@firebase/auth");function mr(s,...e){Ee.logLevel<=Vt.WARN&&Ee.warn(`Auth (${ee}): ${s}`,...e)}function _e(s,...e){Ee.logLevel<=Vt.ERROR&&Ee.error(`Auth (${ee}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(s,...e){throw et(s,...e)}function S(s,...e){return et(s,...e)}function Qt(s,e,t){const r={...pr(),[e]:t};return new Qe("auth","Firebase",r).create(e,{appName:s.name})}function W(s){return Qt(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function et(s,...e){if(typeof s!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(t,...r)}return Xt.create(s,...e)}function h(s,e,...t){if(!s)throw et(e,...t)}function L(s){const e="INTERNAL ASSERTION FAILED: "+s;throw _e(e),new Error(e)}function D(s,e){s||L(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function fr(){return mt()==="http:"||mt()==="https:"}function mt(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fr()||$s()||"connection"in navigator)?navigator.onLine:!0}function br(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.shortDelay=e,this.longDelay=t,D(t>e,"Short delay should be less than long delay!"),this.isMobile=Hs()||Bs()}get(){return gr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(s,e){D(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vr=new ue(3e4,6e4);function K(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function H(s,e,t,r,n={}){return es(s,n,async()=>{let a={},o={};r&&(e==="GET"?o=r:a={body:JSON.stringify(r)});const c=de({key:s.config.apiKey,...o}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:l,...a};return Qs()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&je(s.emulatorConfig.host)&&(d.credentials="include"),Zt.fetch()(await ts(s,s.config.apiHost,t,c),d)})}async function es(s,e,t){s._canInitEmulator=!1;const r={...xr,...e};try{const n=new yr(s),a=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw fe(s,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const c=a.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fe(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fe(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw fe(s,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Qt(s,u,d);R(s,u)}}catch(n){if(n instanceof Ce)throw n;R(s,"network-request-failed",{message:String(n)})}}async function Le(s,e,t,r,n={}){const a=await H(s,e,t,r,n);return"mfaPendingCredential"in a&&R(s,"multi-factor-auth-required",{_serverResponse:a}),a}async function ts(s,e,t,r){const n=`${e}${t}?${r}`,a=s,o=a.config.emulator?tt(s.config,n):`${s.config.apiScheme}://${n}`;return _r.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}function wr(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(S(this.auth,"network-request-failed")),vr.get())})}}function fe(s,e,t){const r={appName:s.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const n=S(s,e,r);return n.customData._tokenResponse=t,n}function ft(s){return s!==void 0&&s.enterprise!==void 0}class Ir{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wr(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Er(s,e){return H(s,"GET","/v2/recaptchaConfig",K(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(s,e){return H(s,"POST","/v1/accounts:delete",e)}async function Te(s,e){return H(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nr(s,e=!1){const t=j(s),r=await t.getIdToken(e),n=st(r);h(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const a=typeof n.firebase=="object"?n.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:n,token:r,authTime:oe(ze(n.auth_time)),issuedAtTime:oe(ze(n.iat)),expirationTime:oe(ze(n.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ze(s){return Number(s)*1e3}function st(s){const[e,t,r]=s.split(".");if(e===void 0||t===void 0||r===void 0)return _e("JWT malformed, contained fewer than 3 sections"),null;try{const n=Ks(t);return n?JSON.parse(n):(_e("Failed to decode base64 JWT payload"),null)}catch(n){return _e("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function gt(s){const e=st(s);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(s,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ce&&kr(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function kr({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oe(this.lastLoginAt),this.creationTime=oe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(s){var m;const e=s.auth,t=await s.getIdToken(),r=await ce(s,Te(e,{idToken:t}));h(r==null?void 0:r.users.length,e,"internal-error");const n=r.users[0];s._notifyReloadListener(n);const a=(m=n.providerUserInfo)!=null&&m.length?ss(n.providerUserInfo):[],o=Sr(s.providerData,a),c=s.isAnonymous,l=!(s.email&&n.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,u={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new Ye(n.createdAt,n.lastLoginAt),isAnonymous:d};Object.assign(s,u)}async function Pr(s){const e=j(s);await Ne(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sr(s,e){return[...s.filter(r=>!e.some(n=>n.providerId===r.providerId)),...e]}function ss(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(s,e){const t=await es(s,{},async()=>{const r=de({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:a}=s.config,o=await ts(s,n,"/v1/token",`key=${a}`),c=await s._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return s.emulatorConfig&&je(s.emulatorConfig.host)&&(l.credentials="include"),Zt.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cr(s,e){return H(s,"POST","/v2/accounts:revokeToken",K(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){h(e.length!==0,"internal-error");const t=gt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(h(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:a}=await Ar(e,t);this.updateTokensAndExpiration(r,n,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:a}=t,o=new Y;return r&&(h(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),n&&(h(typeof n=="string","internal-error",{appName:e}),o.accessToken=n),a&&(h(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Y,this.toJSON())}_performRefresh(){return L("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(s,e){h(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class N{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new Rr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Ye(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await ce(this,this.stsTokenManager.getToken(this.auth,e));return h(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Nr(this,e)}reload(){return Pr(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new N({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ne(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(T(this.auth.app))return Promise.reject(W(this.auth));const e=await this.getIdToken();return await ce(this,Tr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,n=t.email??void 0,a=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:m,emailVerified:f,isAnonymous:_,providerData:p,stsTokenManager:x}=t;h(m&&x,e,"internal-error");const g=Y.fromJSON(this.name,x);h(typeof m=="string",e,"internal-error"),M(r,e.name),M(n,e.name),h(typeof f=="boolean",e,"internal-error"),h(typeof _=="boolean",e,"internal-error"),M(a,e.name),M(o,e.name),M(c,e.name),M(l,e.name),M(d,e.name),M(u,e.name);const v=new N({uid:m,auth:e,email:n,emailVerified:f,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:a,tenantId:c,stsTokenManager:g,createdAt:d,lastLoginAt:u});return p&&Array.isArray(p)&&(v.providerData=p.map(re=>({...re}))),l&&(v._redirectEventId=l),v}static async _fromIdTokenResponse(e,t,r=!1){const n=new Y;n.updateFromServerResponse(t);const a=new N({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Ne(a),a}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];h(n.localId!==void 0,"internal-error");const a=n.providerUserInfo!==void 0?ss(n.providerUserInfo):[],o=!(n.email&&n.passwordHash)&&!(a!=null&&a.length),c=new Y;c.updateFromIdToken(r);const l=new N({uid:n.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:a,metadata:new Ye(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Map;function U(s){D(s instanceof Function,"Expected a class definition");let e=bt.get(s);return e?(D(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,bt.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rs.type="NONE";const xt=rs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(s,e,t){return`firebase:${s}:${e}:${t}`}class X{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:a}=this.auth;this.fullUserKey=ve(this.userKey,n.apiKey,a),this.fullPersistenceKey=ve("persistence",n.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Te(this.auth,{idToken:e}).catch(()=>{});return t?N._fromGetAccountInfoResponse(this.auth,t,e):null}return N._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new X(U(xt),e,r);const n=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=n[0]||U(xt);const o=ve(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const u=await d._get(o);if(u){let m;if(typeof u=="string"){const f=await Te(e,{idToken:u}).catch(()=>{});if(!f)break;m=await N._fromGetAccountInfoResponse(e,f,u)}else m=N._fromJSON(e,u);d!==a&&(c=m),a=d;break}}catch{}const l=n.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new X(a,e,r):(a=l[0],c&&await a._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new X(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(os(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ns(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ls(e))return"Blackberry";if(ds(e))return"Webos";if(is(e))return"Safari";if((e.includes("chrome/")||as(e))&&!e.includes("edge/"))return"Chrome";if(cs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ns(s=I()){return/firefox\//i.test(s)}function is(s=I()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function as(s=I()){return/crios\//i.test(s)}function os(s=I()){return/iemobile/i.test(s)}function cs(s=I()){return/android/i.test(s)}function ls(s=I()){return/blackberry/i.test(s)}function ds(s=I()){return/webos/i.test(s)}function rt(s=I()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function jr(s=I()){var e;return rt(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Or(){return Ys()&&document.documentMode===10}function us(s=I()){return rt(s)||cs(s)||ds(s)||ls(s)||/windows phone/i.test(s)||os(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(s,e=[]){let t;switch(s){case"Browser":t=_t(I());break;case"Worker":t=`${_t(I())}-${s}`;break;default:t=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ee}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((o,c)=>{try{const l=e(a);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(s,e={}){return H(s,"GET","/v2/passwordPolicy",K(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=6;class Mr{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Dr,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vt(this),this.idTokenSubscription=new vt(this),this.beforeStateQueue=new Lr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=U(t)),this._initializationPromise=this.queue(async()=>{var r,n,a;if(!this._deleted&&(this.persistenceManager=await X.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((n=this._popupRedirectResolver)!=null&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Te(this,{idToken:e}),r=await N._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(T(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ne(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=br()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(T(this.app))return Promise.reject(W(this));const t=e?j(e):null;return t&&h(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return T(this.app)?Promise.reject(W(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return T(this.app)?Promise.reject(W(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(U(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ur(this),t=new Mr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cr(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&U(e)||this._popupRedirectResolver;h(t,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[U(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(c,this,"internal-error"),c.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,n);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(T(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&mr(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function te(s){return j(s)}class vt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gs(t=>this.observer=t)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qr(s){Ue=s}function ps(s){return Ue.loadJS(s)}function zr(){return Ue.recaptchaEnterpriseScript}function Vr(){return Ue.gapiScript}function Wr(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Hr{constructor(){this.enterprise=new Br}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Br{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $r="recaptcha-enterprise",ms="NO_RECAPTCHA";class Gr{constructor(e){this.type=$r,this.auth=te(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,c)=>{Er(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ir(l);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function n(a,o,c){const l=window.grecaptcha;ft(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(ms)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hr().execute("siteKey",{action:"verify"}):new Promise((a,o)=>{r(this.auth).then(c=>{if(!t&&ft(window.grecaptcha))n(c,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zr();l.length!==0&&(l+=c),ps(l).then(()=>{n(c,a,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function wt(s,e,t,r=!1,n=!1){const a=new Gr(s);let o;if(n)o=ms;else try{o=await a.verify(t)}catch{o=await a.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function yt(s,e,t,r,n){var a;if((a=s._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await wt(s,e,t,t==="getOobCode");return r(s,o)}else return r(s,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await wt(s,e,t,t==="getOobCode");return r(s,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(s,e){const t=Ze(s,"auth");if(t.isInitialized()){const n=t.getImmediate(),a=t.getOptions();if(Ke(a,e??{}))return n;R(n,"already-initialized")}return t.initialize({options:e})}function Jr(s,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(U);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yr(s,e,t){const r=te(s);h(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const n=!1,a=fs(e),{host:o,port:c}=Xr(e),l=c===null?"":`:${c}`,d={url:`${a}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!r._canInitEmulator){h(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),h(Ke(d,r.config.emulator)&&Ke(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,je(o)?(Ht(`${a}//${o}${l}`),Bt("Auth",!0)):Qr()}function fs(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Xr(s){const e=fs(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(r);if(n){const a=n[1];return{host:a,port:It(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:It(o)}}}function It(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Qr(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return L("not implemented")}_getIdTokenResponse(e){return L("not implemented")}_linkToIdToken(e,t){return L("not implemented")}_getReauthenticationResolver(e){return L("not implemented")}}async function Zr(s,e){return H(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(s,e){return Le(s,"POST","/v1/accounts:signInWithPassword",K(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(s,e){return Le(s,"POST","/v1/accounts:signInWithEmailLink",K(s,e))}async function sn(s,e){return Le(s,"POST","/v1/accounts:signInWithEmailLink",K(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends nt{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new le(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new le(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yt(e,t,"signInWithPassword",en);case"emailLink":return tn(e,{email:this._email,oobCode:this._password});default:R(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yt(e,r,"signUpPassword",Zr);case"emailLink":return sn(e,{idToken:t,email:this._email,oobCode:this._password});default:R(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(s,e){return Le(s,"POST","/v1/accounts:signInWithIdp",K(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="http://localhost";class G extends nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new G(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):R("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:n,...a}=t;if(!r||!n)return null;const o=new G(r,n);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Q(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Q(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Q(e,t)}buildRequest(){const e={requestUri:rn,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=de(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function an(s){const e=ie(ae(s)).link,t=e?ie(ae(e)).deep_link_id:null,r=ie(ae(s)).deep_link_id;return(r?ie(ae(r)).link:null)||r||t||e||s}class it{constructor(e){const t=ie(ae(e)),r=t.apiKey??null,n=t.oobCode??null,a=nn(t.mode??null);h(r&&n&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=n,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=an(e);try{return new it(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.providerId=se.PROVIDER_ID}static credential(e,t){return le._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=it.parseLink(t);return h(r,"argument-error"),le._fromEmailAndCode(e,r.code,r.tenantId)}}se.PROVIDER_ID="password";se.EMAIL_PASSWORD_SIGN_IN_METHOD="password";se.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends gs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F extends he{constructor(){super("facebook.com")}static credential(e){return G._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F.credential(e.oauthAccessToken)}catch{return null}}}F.FACEBOOK_SIGN_IN_METHOD="facebook.com";F.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return G._fromParams({providerId:q.PROVIDER_ID,signInMethod:q.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return q.credentialFromTaggedObject(e)}static credentialFromError(e){return q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return q.credential(t,r)}catch{return null}}}q.GOOGLE_SIGN_IN_METHOD="google.com";q.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends he{constructor(){super("github.com")}static credential(e){return G._fromParams({providerId:z.PROVIDER_ID,signInMethod:z.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return z.credentialFromTaggedObject(e)}static credentialFromError(e){return z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return z.credential(e.oauthAccessToken)}catch{return null}}}z.GITHUB_SIGN_IN_METHOD="github.com";z.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends he{constructor(){super("twitter.com")}static credential(e,t){return G._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return V.credential(t,r)}catch{return null}}}V.TWITTER_SIGN_IN_METHOD="twitter.com";V.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const a=await N._fromIdTokenResponse(e,r,n),o=Et(r);return new Z({user:a,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=Et(r);return new Z({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function Et(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Ce{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,ke.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new ke(e,t,r,n)}}function bs(s,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ke._fromErrorAndOperation(s,a,e,r):a})}async function on(s,e,t=!1){const r=await ce(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Z._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(s,e,t=!1){const{auth:r}=s;if(T(r.app))return Promise.reject(W(r));const n="reauthenticate";try{const a=await ce(s,bs(r,n,e,s),t);h(a.idToken,r,"internal-error");const o=st(a.idToken);h(o,r,"internal-error");const{sub:c}=o;return h(s.uid===c,r,"user-mismatch"),Z._forOperation(s,n,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&R(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(s,e,t=!1){if(T(s.app))return Promise.reject(W(s));const r="signIn",n=await bs(s,r,e),a=await Z._fromIdTokenResponse(s,r,n);return t||await s._updateCurrentUser(a.user),a}async function ln(s,e){return xs(te(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(s){const e=te(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function un(s,e,t){return T(s.app)?Promise.reject(W(s)):ln(j(s),se.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dn(s),r})}function hn(s,e,t,r){return j(s).onIdTokenChanged(e,t,r)}function pn(s,e,t){return j(s).beforeAuthStateChanged(e,t)}function mn(s,e,t,r){return j(s).onAuthStateChanged(e,t,r)}function fn(s){return j(s).signOut()}const Re="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Re,"1"),this.storage.removeItem(Re),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=1e3,bn=10;class vs extends _s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=us(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);Or()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,bn):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vs.type="LOCAL";const xn=vs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends _s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ws.type="SESSION";const ys=ws;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const r=new De(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:a}=t.data,o=this.handlersMap[n];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const c=Array.from(o).map(async d=>d(t.origin,a)),l=await _n(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}De.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(s="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,o;return new Promise((c,l)=>{const d=at("",20);n.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:n,onMessage(m){const f=m;if(f.data.eventId===d)switch(f.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(f.data.response);break;default:clearTimeout(u),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),n.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[n.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return window}function wn(s){A().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(){return typeof A().WorkerGlobalScope<"u"&&typeof A().importScripts=="function"}async function yn(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function In(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function En(){return Is()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="firebaseLocalStorageDb",Tn=1,Pe="firebaseLocalStorage",Ts="fbase_key";class pe{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Me(s,e){return s.transaction([Pe],e?"readwrite":"readonly").objectStore(Pe)}function Nn(){const s=indexedDB.deleteDatabase(Es);return new pe(s).toPromise()}function Xe(){const s=indexedDB.open(Es,Tn);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Pe,{keyPath:Ts})}catch(n){t(n)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Pe)?e(r):(r.close(),await Nn(),e(await Xe()))})})}async function Tt(s,e,t){const r=Me(s,!0).put({[Ts]:e,value:t});return new pe(r).toPromise()}async function kn(s,e){const t=Me(s,!1).get(e),r=await new pe(t).toPromise();return r===void 0?null:r.value}function Nt(s,e){const t=Me(s,!0).delete(e);return new pe(t).toPromise()}const Rn=800,Pn=3;class Ns{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xe(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Pn)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Is()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=De._getInstance(En()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await yn(),!this.activeServiceWorker)return;this.sender=new vn(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||In()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xe();return await Tt(e,Re,"1"),await Nt(e,Re),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tt(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>kn(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const a=Me(n,!1).getAll();return new pe(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:n,value:a}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ns.type="LOCAL";const Sn=Ns;new ue(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(s,e){return e?U(e):(h(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Q(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Q(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Q(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cn(s){return xs(s.auth,new ot(s),s.bypassAuthState)}function jn(s){const{auth:e,user:t}=s;return h(t,e,"internal-error"),cn(t,new ot(s),s.bypassAuthState)}async function On(s){const{auth:e,user:t}=s;return h(t,e,"internal-error"),on(t,new ot(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r,n,a=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:a,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cn;case"linkViaPopup":case"linkViaRedirect":return On;case"reauthViaPopup":case"reauthViaRedirect":return jn;default:R(this.auth,"internal-error")}}resolve(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new ue(2e3,1e4);class J extends ks{constructor(e,t,r,n,a){super(e,t,n,a),this.provider=r,this.authWindow=null,this.pollId=null,J.currentPopupAction&&J.currentPopupAction.cancel(),J.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){D(this.filter.length===1,"Popup operations only handle one event");const e=at();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(S(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(S(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,J.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(S(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ln.get())};e()}}J.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="pendingRedirect",we=new Map;class Dn extends ks{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=we.get(this.auth._key());if(!e){try{const r=await Mn(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}we.set(this.auth._key(),e)}return this.bypassAuthState||we.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mn(s,e){const t=zn(e),r=qn(s);if(!await r._isAvailable())return!1;const n=await r._get(t)==="true";return await r._remove(t),n}function Fn(s,e){we.set(s._key(),e)}function qn(s){return U(s._redirectPersistence)}function zn(s){return ve(Un,s.config.apiKey,s.name)}async function Vn(s,e,t=!1){if(T(s.app))return Promise.reject(W(s));const r=te(s),n=An(r,e),o=await new Dn(r,n,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=600*1e3;class Hn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Rs(e)){const n=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(S(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(kt(e))}saveEventToCache(e){this.cachedEventUids.add(kt(e)),this.lastProcessedEventTime=Date.now()}}function kt(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Rs({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bn(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rs(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(s,e={}){return H(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kn=/^https?/;async function Jn(s){if(s.config.emulator)return;const{authorizedDomains:e}=await $n(s);for(const t of e)try{if(Yn(t))return}catch{}R(s,"unauthorized-domain")}function Yn(s){const e=Je(),{protocol:t,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&r===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Kn.test(t))return!1;if(Gn.test(s))return r===s;const n=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new ue(3e4,6e4);function Rt(){const s=A().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Qn(s){return new Promise((e,t)=>{var n,a,o;function r(){Rt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rt(),t(S(s,"network-request-failed"))},timeout:Xn.get()})}if((a=(n=A().gapi)==null?void 0:n.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((o=A().gapi)!=null&&o.load)r();else{const c=Wr("iframefcb");return A()[c]=()=>{gapi.load?r():t(S(s,"network-request-failed"))},ps(`${Vr()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ye=null,e})}let ye=null;function Zn(s){return ye=ye||Qn(s),ye}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new ue(5e3,15e3),ti="__/auth/iframe",si="emulator/auth/iframe",ri={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ni=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ii(s){const e=s.config;h(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?tt(e,si):`https://${s.config.authDomain}/${ti}`,r={apiKey:e.apiKey,appName:s.name,v:ee},n=ni.get(s.config.apiHost);n&&(r.eid=n);const a=s._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${de(r).slice(1)}`}async function ai(s){const e=await Zn(s),t=A().gapi;return h(t,s,"internal-error"),e.open({where:document.body,url:ii(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ri,dontclear:!0},r=>new Promise(async(n,a)=>{await r.restyle({setHideOnLeave:!1});const o=S(s,"network-request-failed"),c=A().setTimeout(()=>{a(o)},ei.get());function l(){A().clearTimeout(c),n(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ci=500,li=600,di="_blank",ui="http://localhost";class Pt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hi(s,e,t,r=ci,n=li){const a=Math.max((window.screen.availHeight-n)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...oi,width:r.toString(),height:n.toString(),top:a,left:o},d=I().toLowerCase();t&&(c=as(d)?di:t),ns(d)&&(e=e||ui,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,p])=>`${f}${_}=${p},`,"");if(jr(d)&&c!=="_self")return pi(e||"",c),new Pt(null);const m=window.open(e||"",c,u);h(m,s,"popup-blocked");try{m.focus()}catch{}return new Pt(m)}function pi(s,e){const t=document.createElement("a");t.href=s,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="__/auth/handler",fi="emulator/auth/handler",gi=encodeURIComponent("fac");async function St(s,e,t,r,n,a){h(s.config.authDomain,s,"auth-domain-config-required"),h(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:r,v:ee,eventId:n};if(e instanceof gs){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Xs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,m]of Object.entries({}))o[u]=m}if(e instanceof he){const u=e.getScopes().filter(m=>m!=="");u.length>0&&(o.scopes=u.join(","))}s.tenantId&&(o.tid=s.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await s._getAppCheckToken(),d=l?`#${gi}=${encodeURIComponent(l)}`:"";return`${bi(s)}?${de(c).slice(1)}${d}`}function bi({config:s}){return s.emulator?tt(s,fi):`https://${s.authDomain}/${mi}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="webStorageSupport";class xi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ys,this._completeRedirectFn=Vn,this._overrideRedirectResult=Fn}async _openPopup(e,t,r,n){var o;D((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await St(e,t,r,Je(),n);return hi(e,a,at())}async _openRedirect(e,t,r,n){await this._originValidation(e);const a=await St(e,t,r,Je(),n);return wn(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:a}=this.eventManagers[t];return n?Promise.resolve(n):(D(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ai(e),r=new Hn(e);return t.register("authEvent",n=>(h(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:r.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ve,{type:Ve},n=>{var o;const a=(o=n==null?void 0:n[0])==null?void 0:o[Ve];a!==void 0&&t(!!a),R(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return us()||is()||rt()}}const _i=xi;var At="@firebase/auth",Ct="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yi(s){$e(new Ge("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;h(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hs(s)},d=new Fr(r,n,a,l);return Jr(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$e(new Ge("auth-internal",e=>{const t=te(e.getProvider("auth").getImmediate());return(r=>new vi(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(At,Ct,wi(s)),Ie(At,Ct,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=300,Ei=zt("authIdTokenMaxAge")||Ii;let jt=null;const Ti=s=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ei)return;const n=t==null?void 0:t.token;jt!==n&&(jt=n,await fetch(s,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Ni(s=Wt()){const e=Ze(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Kr(s,{popupRedirectResolver:_i,persistence:[Sn,xn,ys]}),r=zt("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=Ti(a.toString());pn(t,o,()=>o(t.currentUser)),hn(t,c=>o(c))}}const n=Js("auth");return n&&Yr(t,`http://${n}`),t}function ki(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}qr({loadJS(s){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=n=>{const a=S("internal-error");a.customData=n,t(a)},r.type="text/javascript",r.charset="UTF-8",ki().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yi("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="firebasestorage.googleapis.com",Ri="storageBucket",Pi=120*1e3,Si=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O extends Ce{constructor(e,t,r=0){super(We(e),`Firebase Storage: ${t} (${We(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,O.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return We(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var C;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(C||(C={}));function We(s){return"storage/"+s}function Ai(){const s="An unknown error occurred, please check the error payload for server response.";return new O(C.UNKNOWN,s)}function Ci(){return new O(C.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ji(){return new O(C.CANCELED,"User canceled the upload/download.")}function Oi(s){return new O(C.INVALID_URL,"Invalid URL '"+s+"'.")}function Li(s){return new O(C.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Ot(s){return new O(C.INVALID_ARGUMENT,s)}function Ss(){return new O(C.APP_DELETED,"The Firebase app was deleted.")}function Ui(s){return new O(C.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=k.makeFromUrl(e,t)}catch{return new k(e,"")}if(r.path==="")return r;throw Li(e)}static makeFromUrl(e,t){let r=null;const n="([A-Za-z0-9.\\-_]+)";function a(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+n+o,"i"),l={bucket:1,path:3};function d(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${u}/b/${n}/o${f}`,"i"),p={bucket:1,path:3},x=t===Ps?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${x}/${n}/${g}`,"i"),P=[{regex:c,indices:l,postModify:a},{regex:_,indices:p,postModify:d},{regex:v,indices:{bucket:1,path:2},postModify:d}];for(let w=0;w<P.length;w++){const B=P[w],y=B.regex.exec(e);if(y){const js=y[B.indices.bucket];let Fe=y[B.indices.path];Fe||(Fe=""),r=new k(js,Fe),B.postModify(r);break}}if(r==null)throw Oi(e);return r}}class Di{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(s,e,t){let r=1,n=null,a=null,o=!1,c=0;function l(){return c===2}let d=!1;function u(...g){d||(d=!0,e.apply(null,g))}function m(g){n=setTimeout(()=>{n=null,s(_,l())},g)}function f(){a&&clearTimeout(a)}function _(g,...v){if(d){f();return}if(g){f(),u.call(null,g,...v);return}if(l()||o){f(),u.call(null,g,...v);return}r<64&&(r*=2);let P;c===1?(c=2,P=0):P=(r+Math.random())*1e3,m(P)}let p=!1;function x(g){p||(p=!0,f(),!d&&(n!==null?(g||(c=2),clearTimeout(n),m(0)):g||(c=1)))}return m(0),a=setTimeout(()=>{o=!0,x(!0)},t),x}function Fi(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(s){return s!==void 0}function Lt(s,e,t,r){if(r<e)throw Ot(`Invalid value for '${s}'. Expected ${e} or greater.`);if(r>t)throw Ot(`Invalid value for '${s}'. Expected ${t} or less.`)}function zi(s){const e=encodeURIComponent;let t="?";for(const r in s)if(s.hasOwnProperty(r)){const n=e(r)+"="+e(s[r]);t=t+n+"&"}return t=t.slice(0,-1),t}var Se;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(Se||(Se={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(s,e){const t=s>=500&&s<600,n=[408,429].indexOf(s)!==-1,a=e.indexOf(s)!==-1;return t||n||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,n,a,o,c,l,d,u,m,f=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=a,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=u,this.connectionFactory_=m,this.retry=f,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,x)=>{this.resolve_=p,this.reject_=x,this.start_()})}start_(){const e=(r,n)=>{if(n){r(!1,new ge(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&a.addUploadProgressListener(o),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(o),this.pendingConnection_=null;const c=a.getErrorCode()===Se.NO_ERROR,l=a.getStatus();if(!c||Vi(l,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===Se.ABORT;r(!1,new ge(!1,null,u));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new ge(d,a))})},t=(r,n)=>{const a=this.resolve_,o=this.reject_,c=n.connection;if(n.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());qi(l)?a(l):a()}catch(l){o(l)}else if(c!==null){const l=Ai();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(n.canceled){const l=this.appDelete_?Ss():ji();o(l)}else{const l=Ci();o(l)}};this.canceled_?t(!1,new ge(!1,null,!0)):this.backoffId_=Mi(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ge{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Hi(s,e){e!==null&&e.length>0&&(s.Authorization="Firebase "+e)}function Bi(s,e){s["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $i(s,e){e&&(s["X-Firebase-GMPID"]=e)}function Gi(s,e){e!==null&&(s["X-Firebase-AppCheck"]=e)}function Ki(s,e,t,r,n,a,o=!0,c=!1){const l=zi(s.urlParams),d=s.url+l,u=Object.assign({},s.headers);return $i(u,e),Hi(u,t),Bi(u,a),Gi(u,r),new Wi(d,s.method,u,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,n,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(s){if(s.length===0)return null;const e=s.lastIndexOf("/");return e===-1?"":s.slice(0,e)}function Yi(s){const e=s.lastIndexOf("/",s.length-2);return e===-1?s:s.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this._service=e,t instanceof k?this._location=t:this._location=k.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ae(e,t)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yi(this._location.path)}get storage(){return this._service}get parent(){const e=Ji(this._location.path);if(e===null)return null;const t=new k(this._location.bucket,e);return new Ae(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Ui(e)}}function Ut(s,e){const t=e==null?void 0:e[Ri];return t==null?null:k.makeFromBucketSpec(t,s)}function Xi(s,e,t,r={}){s.host=`${e}:${t}`;const n=je(e);n&&(Ht(`https://${s.host}/b`),Bt("Storage",!0)),s._isUsingEmulator=!0,s._protocol=n?"https":"http";const{mockUserToken:a}=r;a&&(s._overrideAuthToken=typeof a=="string"?a:er(a,s.app.options.projectId))}class Qi{constructor(e,t,r,n,a,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=a,this._isUsingEmulator=o,this._bucket=null,this._host=Ps,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pi,this._maxUploadRetryTime=Si,this._requests=new Set,n!=null?this._bucket=k.makeFromBucketSpec(n,this._host):this._bucket=Ut(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=Ut(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(T(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ae(this,e)}_makeRequest(e,t,r,n,a=!0){if(this._deleted)return new Di(Ss());{const o=Ki(e,this._appId,r,n,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}const Dt="@firebase/storage",Mt="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="storage";function Zi(s=Wt(),e){s=j(s);const r=Ze(s,As).getImmediate({identifier:e}),n=Zs("storage");return n&&ea(r,...n),r}function ea(s,e,t,r={}){Xi(s,e,t,r)}function ta(s,{instanceIdentifier:e}){const t=s.getProvider("app").getImmediate(),r=s.getProvider("auth-internal"),n=s.getProvider("app-check-internal");return new Qi(t,r,n,e,ee)}function sa(){$e(new Ge(As,ta,"PUBLIC").setMultipleInstances(!0)),Ie(Dt,Mt,""),Ie(Dt,Mt,"esm2020")}sa();const ra={apiKey:"AIzaSyABNxs9tatcpbH5t_o2ty9H0lnyE80uGAI",authDomain:"wbl-habbo.firebaseapp.com",projectId:"wbl-habbo",storageBucket:"wbl-habbo.firebasestorage.app",messagingSenderId:"204000848269",appId:"1:204000848269:web:e7b7f2ce5475298669f5c4"},ct=tr(ra),He=Ni(ct),lt=sr(ct);Zi(ct);const Cs=b.createContext(void 0),na=()=>{const s=b.useContext(Cs);if(!s)throw new Error("useAuth must be used within AuthProvider");return s},ia=({children:s})=>{const[e,t]=b.useState(null),[r,n]=b.useState(!0);b.useEffect(()=>mn(He,l=>{t(l),n(!1)}),[]);const a=async(c,l)=>{await un(He,c,l)},o=async()=>{await fn(He)};return i.jsx(Cs.Provider,{value:{user:e,loading:r,login:a,logout:o},children:s})},aa=({children:s})=>{const{user:e,loading:t}=na();return t?i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"w-12 h-12 border-4 border-habboOrange border-t-transparent rounded-full animate-spin mx-auto mb-4"}),i.jsx("p",{className:"text-white/60",children:"Cargando..."})]})}):e?i.jsx(i.Fragment,{children:s}):i.jsx(Ds,{to:"/admin-wbl-2026/login",replace:!0})},oa=b.lazy(()=>Oe(()=>import("./LoginPage-BEjIMazd.js"),__vite__mapDeps([0,1,2]))),ca=b.lazy(()=>Oe(()=>import("./AdminPage-BGXkcl5N.js"),__vite__mapDeps([3,1,2,4,5]))),la=b.lazy(()=>Oe(()=>import("./SchedulePage-Dx1e9lCf.js"),__vite__mapDeps([6,1,4,2]))),da=b.lazy(()=>Oe(()=>import("./StandingsPage-DizGggZz.js"),__vite__mapDeps([7,1,5,2]))),ua=[{title:"Temporada 5 arranca el 12 de febrero",body:"Nuevas reglas de pitcheo, uniformes retro y modo espectador mejorado en Habbo.",tag:"Temporada",date:"Enero 2026"},{title:"Mercado de fichajes abierto",body:"Los equipos pueden registrar hasta 2 agentes libres por jornada. Consulta a tu GM.",tag:"Fichajes",date:"Enero 2026"},{title:"Evento amistoso en el lobby",body:"Mini home run derby en la plaza principal. Premios de rarezas y placas limitadas.",tag:"Eventos",date:"Próximo sábado"}],ha={name:"Habbo Meteors",season:"Season 4 · 2025",detail:"Serie 4-2 vs Neon Caps"},pa=[{name:"Season 1 · 2026",status:"Próxima",highlight:"Apertura de la primera temporada de la World Baseball League.",starts:"Por definir"}],ma=[{question:"¿De cuántos jugadores está compuesta la alineación del equipo?",answer:"Cada equipo se compone de 4 jugadores y hasta dos suplentes opcionales. La alineación se define según el rol defensivo de cada jugador. Pitcher, shortstop o primera base."},{question:"¿Cómo empiezo mi carrera dentro de la liga?",answer:'Si no sabes jugar, asegúrate de unirte al discord y buscar ayuda. La comunidad estará dispuesta a enseñarte lo básico para comenzar a jugar. Si estás interesado en unirte como jugador, en el discord encontrarás un canal llamado "agencia-libre" donde podrás postularte para que los equipos te contacten.'}],Ft=[{name:"Lucas",role:"Fundador",bio:"Visionario y líder del proyecto WBL.",size:"normal",image:"/avatars/lucas.png",profileUrl:"http://hobbaz.es/profile/robertoconla9"},{name:"Kush",role:"Director de Tecnología",bio:"Encargado del desarrollo técnico y coordinación general del proyecto.",size:"normal",image:"/avatars/kush.png",profileUrl:"http://hobbaz.es/profile/Kush"},{name:"xzxxzc",role:"Desarrollador de Aplicaciones",bio:"Desarrolla herramientas y aplicaciones para la gestión de la liga.",size:"normal",image:"/avatars/pepe.png",profileUrl:"http://hobbaz.es/profile/xzxxzc"},{name:"JJ",role:"Inversionista",bio:"Brinda el respaldo financiero para hacer realidad la liga.",size:"normal",image:"/avatars/wya.png",profileUrl:"http://hobbaz.es/profile/420am"},{name:"Flash",role:"Diseñador",bio:"Responsable de la identidad visual y estética del proyecto.",size:"normal",image:"/avatars/flash.png",profileUrl:"http://hobbaz.es/profile/ShoheiOhtani"},{name:"Skyripa",role:"Colaborador",bio:"Apoyo en el desarrollo del proyecto.",size:"small"},{name:"Alucard",role:"Colaborador",bio:"Apoyo en el desarrollo del proyecto.",size:"small"}],Be={Lucas:"/avatars/lucas.png",Kush:"/avatars/kush.png",Flash:"/avatars/flash.png",JJ:"/avatars/wya.png",xzxxzc:"/avatars/pepe.png"},fa=[{title:"INTRODUCCIÓN - COMANDOS",description:`• Pitcher: cutter - slider - fast - curve - knuckle - fake - reset
↳ reset: devuelve la bola al punto de lanzamiento
• Fildeo: b1 - b2 - b3 - h4 (o b4)
• Bate: swing - toque
↳ swing: la pelota es enviada al jardín, donde juega el primera base y el shortstop. [!] Posibilidad de homerun o foul
↳ toque: se envia la pelota dentro del juego de pitcher. [!] Sin probabilidad de homerun o foul.`},{title:"1.00 - JUEGO",description:`1.01 - El equipo que sea seleccionado como LOCAL será quien cierre el juego
1.02 - Los partidos tendrán fechas limites para jugarse, si uno de los equipos no muestra esfuerzo con acordar una fecha, se le dará la victoria por default (1-0) al rival.
1.02b - PODRÁ extenderse la fecha en caso de que ambos equipos no puedan acordar. La administración podrá poner una fecha concreta o darlo como no presentado (0-0)
1.03 - Cada equipo dispondrá de 3 tiempos muertos. El mánager es quien tiene el derecho de pedir tiempo (TIME), pedir revisión de X jugada o de realizar una denuncia en el canal de ticket
1.04 - Si un partido llega a un marcador de 7-0 se lo tomará como knockout y se terminará el partido
1.05 - Si ningún equipo se presenta a la hora que acordaron no se modificará el horario y se tomará como NO PRESENTADO (0-0)
1.06 - Se esperará como máximo 15 minutos si a la hora acordada falta el mínimo de jugadores para iniciar el partido (4 por equipo). No se podrán utilizar los tiempos muertos si no cumplen con el mínimo de jugadores. En caso de no contar con los 4 necesarios se dará default (1-0)
1.07 - Un equipo no podrá continuar el partido y será puesto el marcador 1-0 (o quedar como estaba si iban ganando) si no cuenta con sus cuatro bateadores OBLIGATORIOS, dando la victoria al equipo que sí tiene su equipo completo
1.08 - En caso de que el mánager no se presente al partido, este deberá seleccionar a uno de sus jugadores para que tomen su lugar temporalmente. En caso de que no avise, el umpire se encargará de seleccionarlo
1.09 - En caso de coincidir colores en el uniforme, el equipo local será el que decida qué uniforme usar.
1.10 - Cada juego constará de 5 innings con posibilidad de ir a extras.`},{title:"2.00 - EQUIPOS",description:`2.01 - Los equipos deben ser de 4 hasta 6 jugadores como máximo. Se debe elegir un mánager del equipo (que también puede ser jugador a la vez)
2.01b - En caso de tener un mánager NO JUGADOR no contará en la alineación (podrán ser 6 + el mánager, por ejemplo)
2.02 - Los equipos deben tener dos uniformes con distintos colores por si coinciden con el color del uniforme rival.
2.03 - Los jugadores solo pueden estar registrados en un único equipo durante la temporada.
2.04 - Los cambios en el roster solo podrán realizarse antes del inicio de la temporada y en fechas o permisos habilitados por la administración`},{title:"3.00 - PARTIDOS",description:`3.01 - Los partidos se jugarán con 4 jugadores en campo por equipo como mínimo.
3.02 - El orden del bateo debe mantenerse en todo el partido, salvo por expulsión o abandono.
3.02b - El orden debe ser notificado al umpire únicamente por el mánager antes de iniciar el partido.
3.03 - No se permitirá el ingreso de jugadores externos una vez iniciado el partido. Unicamente podrán estar los dos equipos, el umpire y personal de la administración.
3.04 - El umpire es la MÁXIMA AUTORIDAD durante el partido y sus decisiones son las que se deben seguir. La administración podrá poner excepciones a esta regla únicamente con clara justificación.
3.04b - Ante cualquier comportamiento que el umpire considere indebido podrá expulsar y advertir a un jugador según lo vea necesario.
3.05 - Cualquier invasión de campo no deseada sea por jugadores o no, no será tolerada. Interferir en un partido podrá resultar en expulsión según vea el umpire.`},{title:"4.00 - BATEADOR",description:`4.01 - El bateador deberá pararse en alguno de los felpudos rojos para indicar que está listo para batear.
4.01b - Una vez dado el ATT del pitcher no podrá bajarse del felpudo o será considerado un strike.
4.02 - Cuando un bateador llega a los 3 strikes quedará out.
4.02b - Un bateador no puede llegar al tercer strike por foul.
4.03 - Queda prohibido el uso de macros, copiar y pegar, y el uso de la flecha para arriba para ahorrar escribir swing o toque.
4.04 - Al acumular 4 bolas (por el pitcher) se le otorgará base por bola. Si habían corredores en alguna base asegurada deberá avanzar únicamente si estaba obligado a correr.
4.05 - Si se intenta batear una fake será contado como strike. Se tomará como intento de bateo si se baja del felpudo o envía algun comando para batear.
4.06 - En caso de no haber podido batear la pelota, el bateador deberá despejar la casilla home (salir de encima) para no molestar al pitcher.
4.07 - Si se logra batear y la pelota cae encima de donde está parado uno de los que fildean (sea 1B, SS o pitcher) será tomado como flyout. Este sistema está automatizado con wired, así que el bot dará aviso.`},{title:"5.00 - CORREDOR",description:`5.01 - El bateador que logre batear la bola deberá correr obligatoriamente a primera base y se convertirá en un corredor.
5.02 - Si la base es pisada el corredor no podrá continuar hacia las otras bases y se contará como base asegurada.
5.02b - Para robar una base debe esquivarse diagonalmente y seguir corriendo hacia la próxima.
5.02c - Si el corredor intenta recortar una base para robarla pero es interferido por alguien del equipo rival, podrá recortar la base esquivando al jugador que le está tapando el cuadro.
5.03 - En caso de que un corredor obligado a correr se quede quieto en una base y su compañero vaya hacia su base, será DOBLE OUT.
5.03b - En caso de que un corredor NO obligado a correr se quede quieto y venga su compañero, será OUT para el compañero que fue hacia su base. No se puede robar una base que aseguró un compañero.
5.04 - Un corredor solo puede ir hacia la siguiente base cuando la bola llega a la casilla home. En caso de adelantarse será considerado OUT.
5.05 - En caso de que se marque un homerun se deben pisar todas las bases que tengan en frente. Por ejemplo, si estaban en segunda base cuando metieron el homerun, deberán pisar obligatoriamente la tercera base y home.
5.06 - Un corredor podrá regresarse a su base segura únicamente si no pasó la mitad del recorrido para llegar a la siguiente base (4 casillas para adelante como máximo)
5.07 - Si el equipo que está fildeando interfiere en la llegada a una base será considerada como base asegurada. Si el corredor tenía intenciones de robar base, se debe seguir la regla 5.02c
5.07b - Si un corredor es interferido de asegurar base y detrás venía un compañero que robó base y va hacia la de este corredor, será OUT para el corredor al que le taparon el cuadro, ya que su compañero está queriendo ir a la misma base se vuelve culpa del compañero por no devolverse.`},{title:"6.00 - PITCHER",description:`6.01 - El pitcher deberá decir "ATT" antes de hacer cualquier lanzamiento. Este solo puede ser dicho luego del playball del umpire y cuando el bateador está en alguno de los felpudos rojos. No será contada cualquier variante a esta, sea ATENTO o cualquier "ATT" mal escrito.
6.01b - El pitcher deberá repetir el ATT si cometió bola (bola1, bola2...)
6.02 - En caso de escribir mal el lanzamiento luego del "ATT" será contado como bola. Por ejemplo, el pitcher dice ATT y luego escribe fsat en lugar de fast.
6.02b - Luego del ATT el pitcher no podrá no lanzar, en caso de bajarse de su lugar sin haber lanzado también será contado como bola. Tampoco podrá enviar algún otro mensaje que no sea un lanzamiento (pero sí luego de haber lanzado)
6.03 - El pitcher tendrá 8 segundos luego del ATT para hacer algún lanzamiento o será bola.
6.04 - Solo podrá utilizar una fake por turno de bateador. En caso de fallar el intento de lanzar una fake será bola.
6.04b - Como la knuckle también puede fallar debido a su complejidad será bola en caso de hacerlo.
6.05 - Luego de hacer algún lanzamiento el pitcher puede ir a buscar la bola a HOME para intentar dejar out a los corredores que se movieron de su base.`},{title:"7.00 - MERCADO",description:`7.01 - El mercado estará abierto antes de iniciar la temporada y no volverá a ser abierto hasta los playoff.
7.02 - Aquellos equipos eliminados pueden ofrecer a sus jugadores para que estén de refuerzo en otro equipo. El equipo que clasificó de primero será el primero en escoger qué refuerzo tomar.
7.02b - Si un equipo quiere tomar de refuerzo a otro no debe tener el cupo lleno. En caso de ya ser 6 jugadores en su equipo, el manager tendrá la libertad de sacar jugadores.`}],ga=[{label:"OPS",stat:".987",leader:"Flash",position:"P · #1",entries:[{name:"Kush",value:".889",imageUrl:"/avatars/kush.png"},{name:"Lucas",value:".770",imageUrl:"/avatars/lucas.png"},{name:"xzxxzc",value:".732",imageUrl:"/avatars/pepe.png"}]},{label:"Jonrones",stat:"31",leader:"Lucas",position:"P · #1",entries:[{name:"Kush",value:"25",imageUrl:"/avatars/kush.png"},{name:"Flash",value:"21",imageUrl:"/avatars/flash.png"},{name:"xzxxzc",value:"19",imageUrl:"/avatars/pepe.png"}]},{label:"Carreras",stat:"92",leader:"Flash",position:"P · #1",entries:[{name:"Kush",value:"81",imageUrl:"/avatars/kush.png"},{name:"JJ",value:"74",imageUrl:"/avatars/wya.png"},{name:"Lucas",value:"68",imageUrl:"/avatars/lucas.png"}]},{label:"Promedio",stat:".274",leader:"Flash",position:"P · #1",entries:[{name:"Kush",value:".262",imageUrl:"/avatars/kush.png"},{name:"JJ",value:".258",imageUrl:"/avatars/wya.png"},{name:"Lucas",value:".253",imageUrl:"/avatars/lucas.png"}]},{label:"Impulsadas",stat:"88",leader:"Kush",position:"1B · #2",entries:[{name:"JJ",value:"72",imageUrl:"/avatars/wya.png"},{name:"Lucas",value:"69",imageUrl:"/avatars/lucas.png"},{name:"xzxxzc",value:"65",imageUrl:"/avatars/pepe.png"}]},{label:"Hits",stat:"158",leader:"JJ",position:"1B · #3",entries:[{name:"Flash",value:"150",imageUrl:"/avatars/flash.png"},{name:"Kush",value:"147",imageUrl:"/avatars/kush.png"},{name:"Lucas",value:"139",imageUrl:"/avatars/lucas.png"}]}],ba=[{label:"Ganados",stat:"14",leader:"Dean Kremer",position:"P · #64",entries:[{name:"Trevor Rogers",value:"11",imageUrl:""},{name:"Zach Eflin",value:"9",imageUrl:""},{name:"Keegan Akin",value:"8",imageUrl:""}]},{label:"Salvados",stat:"21",leader:"Félix Bautista",position:"P · #74",entries:[{name:"Keegan Akin",value:"8",imageUrl:""},{name:"Yennier Cano",value:"4",imageUrl:""},{name:"Dietrich Enns",value:"3",imageUrl:""}]},{label:"Ponches",stat:"182",leader:"Flash",position:"P · #1",entries:[{name:"Kush",value:"156",imageUrl:"/avatars/kush.png"},{name:"Lucas",value:"143",imageUrl:"/avatars/lucas.png"},{name:"xzxxzc",value:"97",imageUrl:"/avatars/pepe.png"}]},{label:"PCL (ERA)",stat:"3.42",leader:"Dean Kremer",position:"P · #64",entries:[{name:"Cade Povich",value:"3.68",imageUrl:""},{name:"Trevor Rogers",value:"3.91",imageUrl:""},{name:"Zach Eflin",value:"4.02",imageUrl:""}]},{label:"Innings lanzados",stat:"183.1",leader:"Dean Kremer",position:"P · #64",entries:[{name:"Cade Povich",value:"168.2",imageUrl:""},{name:"Trevor Rogers",value:"162.1",imageUrl:""},{name:"Zach Eflin",value:"151.0",imageUrl:""}]},{label:"WHIP",stat:"1.21",leader:"Dean Kremer",position:"P · #64",entries:[{name:"Cade Povich",value:"1.25",imageUrl:""},{name:"Trevor Rogers",value:"1.28",imageUrl:""},{name:"Zach Eflin",value:"1.29",imageUrl:""}]}],qt=[{to:"/",label:"Inicio"},{to:"/schedule",label:"Programación"},{to:"/standings",label:"Clasificación"},{to:"/seasons",label:"Temporada"},{to:"/teams",label:"Equipos"},{to:"/stats",label:"Estadísticas"},{to:"/rules",label:"Reglas"},{to:"/faq",label:"FAQ"},{to:"/founders",label:"Créditos"}],be=({label:s,value:e,color:t})=>i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsxs("div",{className:"flex justify-between text-sm text-white/80 font-medium",children:[i.jsx("span",{children:s}),i.jsx("span",{children:e})]}),i.jsx("div",{className:"h-2 rounded-full bg-white/10 overflow-hidden",children:i.jsx("div",{className:`h-full rounded-full ${t}`,style:{width:`${e}%`}})})]}),xa=({name:s,imageUrl:e})=>i.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-white/12 via-white/6 to-white/3 border border-white/15 grid place-items-center overflow-hidden",children:e?i.jsx("img",{src:e,alt:s,className:"w-full h-full object-cover"}):i.jsx("span",{className:"text-xs font-semibold text-white/80",children:"X"})}),_a=()=>{const s=Fs(),[e,t]=b.useState(!1),r=n=>n==="/"?s.pathname==="/":s.pathname.startsWith(n);return b.useEffect(()=>{const a={"/":"Inicio","/schedule":"Programación","/standings":"Clasificación","/stats":"Estadísticas","/seasons":"Temporadas","/faq":"FAQ","/teams":"Equipos","/rules":"Reglas","/founders":"Créditos"}[s.pathname]||"WBL";document.title=`WBL · ${a}`,t(!1)},[s.pathname]),i.jsxs("div",{className:"min-h-screen text-white relative flex flex-col",children:[i.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-40 bg-grid","aria-hidden":!0}),i.jsxs("header",{className:"sticky top-0 z-20 backdrop-blur bg-[#0f1018]/85 border-b border-white/5",children:[i.jsxs("div",{className:"mx-auto max-w-6xl px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[i.jsx(xe,{to:"/",className:"hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018]",children:i.jsx("img",{src:"/LogoWBL.png",alt:"WBL Logo",className:"h-14 sm:h-16 md:h-20 w-auto drop-shadow-[0_0_12px_rgba(255,156,51,0.6)]"})}),i.jsxs("div",{className:"leading-tight",children:[i.jsx("p",{className:"font-display text-sm sm:text-lg",children:"Liga de Baseball · Hobbaz"}),i.jsx("p",{className:"text-xs text-white/70",children:"Temporada 1 · Hobbaz"})]})]}),i.jsx("nav",{className:"hidden md:flex items-center gap-4 text-xs sm:text-sm font-medium text-white/80",children:qt.map(n=>i.jsx(xe,{to:n.to,className:`hover:text-white transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] ${r(n.to)?"text-white":"text-white/80"}`,children:n.label},n.to))}),i.jsx("button",{onClick:()=>t(!e),className:"md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky","aria-label":"Toggle menu",children:i.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e?i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),e&&i.jsx("nav",{className:"md:hidden border-t border-white/5 bg-[#0f1018]/95 px-4 py-3 space-y-2",children:qt.map(n=>i.jsx(xe,{to:n.to,className:`block px-4 py-2 rounded-lg transition-colors ${r(n.to)?"bg-habboOrange text-[#1f1d2b] font-medium":"text-white/80 hover:bg-white/10"}`,children:n.label},n.to))})]}),i.jsx("main",{className:"mx-auto max-w-6xl px-4 sm:px-5 pb-16 sm:pb-20 pt-4 sm:pt-6 flex-1",children:i.jsx("div",{className:"animate-fadeIn",children:i.jsx(qs,{})},s.pathname)}),i.jsx("footer",{className:"border-t border-white/10 bg-[#0b0c12] mt-auto",children:i.jsxs("div",{className:"mx-auto max-w-6xl px-4 sm:px-5 py-4 sm:py-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between",children:[i.jsxs("div",{className:"text-center sm:text-left",children:[i.jsx("p",{className:"font-display text-base sm:text-lg",children:"World Baseball League · Hobbaz"}),i.jsx("p",{className:"text-white/60 text-xs sm:text-sm",children:"© 2026 WBL. Todos los derechos reservados. Proyecto de rol, no oficial."})]}),i.jsx("a",{href:"https://discord.gg/9ufJQpkq4S",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c12]",children:"Únete al Discord"})]})})]})},va=()=>{const[s,e]=b.useState(ua),[t,r]=b.useState(!0),[n,a]=b.useState(null),[o,c]=b.useState(!1);return b.useEffect(()=>{(async()=>{try{const d=Gt(Kt(lt,"news"),Jt("createdAt","desc"),rr(10)),m=(await $t(d)).docs.map(f=>f.data());m.length>0&&e(m)}catch(d){console.error("Error loading news:",d)}finally{r(!1)}})()},[]),i.jsxs("section",{className:"min-h-screen grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start relative px-4 sm:px-5 py-8 sm:py-12",style:{backgroundImage:"url(/fondo.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"},children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0f1018]/45 via-[#0f1018]/65 to-[#0f1018]/80 backdrop-blur-sm pointer-events-none"}),i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow relative z-10",children:[i.jsx("div",{className:"section-title mb-4 text-[8px] sm:text-[10px]",children:"Bienvenida"}),i.jsx("h1",{className:"font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-3",children:"Bienvenido a la World Baseball League"}),i.jsx("p",{className:"text-sm sm:text-base text-white/80 mb-4 sm:mb-6",children:"Liga oficial con fixtures y diseños semanales, mercado de fichajes, transmisión de partidos y stats en vivo."}),i.jsxs("div",{className:"grid gap-3 sm:gap-4 md:grid-cols-2",children:[i.jsxs("div",{className:"p-3 sm:p-4 rounded-xl bg-habboInk/70 border border-white/10",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-1",children:"Arranque temporada"}),i.jsx("p",{className:"font-semibold text-base sm:text-lg",children:"Por definir."})]}),i.jsxs("div",{className:"p-3 sm:p-4 rounded-xl bg-habboInk/70 border border-white/10",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-1",children:"Estadio"}),i.jsx("p",{className:"font-semibold text-base sm:text-lg",children:"Estadio Oficial - WBL"})]})]}),i.jsxs("div",{className:"mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3",children:[i.jsx("a",{href:"https://discord.gg/9ufJQpkq4S",target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-habboOrange text-[#1f1d2b] font-semibold shadow-pixel animate-pulseGlow relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboGold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018]",children:"Unirse al Discord"}),i.jsx(xe,{to:"/stats",className:"px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-habboSky/50 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018]",children:"Ver estadísticas"})]})]}),i.jsx("div",{className:"space-y-4 relative z-10",children:i.jsxs("div",{className:"bg-habboInk/80 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow",children:[i.jsx("div",{className:"section-title mb-4 text-[8px] sm:text-[10px]",children:"Noticias"}),t?i.jsx("div",{className:"text-center py-8",children:i.jsx("div",{className:"w-8 h-8 border-4 border-habboOrange border-t-transparent rounded-full animate-spin mx-auto"})}):i.jsx("div",{className:"space-y-3 sm:space-y-4",children:s.map((l,d)=>i.jsxs("article",{onClick:()=>{a(l),c(!0)},className:"cursor-pointer p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 hover:border-habboSky/50 hover:bg-white/8 transition-all hover:scale-[1.02]",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2 text-[10px] sm:text-xs text-white/60 uppercase tracking-wide",children:[i.jsx("span",{children:l.tag}),i.jsx("span",{children:l.date})]}),l.imageUrl&&i.jsx("div",{className:"relative w-full overflow-hidden rounded-lg border border-white/5 mb-2",style:{paddingTop:"56%"},children:i.jsx("img",{src:l.imageUrl,alt:l.title,className:"absolute inset-0 w-full h-full object-cover"})}),i.jsx("h3",{className:"font-semibold mb-1 text-sm sm:text-base line-clamp-2",children:l.title}),i.jsx("p",{className:"text-xs sm:text-sm text-white/75 line-clamp-2",children:l.body.length>100?l.body.substring(0,100)+"...":l.body})]},d))})]})}),o&&n&&i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm",onClick:()=>c(!1),children:i.jsxs("div",{className:"relative max-w-3xl w-full bg-[#0f1018] border border-white/10 rounded-2xl shadow-2xl card-glow overflow-hidden",style:{animation:"zoomInModal 180ms ease-out"},onClick:l=>l.stopPropagation(),children:[i.jsx("button",{onClick:()=>c(!1),className:"absolute top-3 right-3 p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20","aria-label":"Cerrar",children:"✕"}),n.imageUrl&&i.jsx("div",{className:"relative w-full",style:{paddingTop:"56%"},children:i.jsx("img",{src:n.imageUrl,alt:n.title,className:"absolute inset-0 w-full h-full object-contain bg-black"})}),i.jsxs("div",{className:"p-5 sm:p-6 space-y-2",children:[i.jsxs("div",{className:"flex items-center justify-between text-[10px] sm:text-xs text-white/60 uppercase tracking-wide",children:[i.jsx("span",{children:n.tag}),i.jsx("span",{children:n.date})]}),i.jsx("h3",{className:"font-semibold text-lg sm:text-xl",children:n.title}),i.jsx("p",{className:"text-sm text-white/80 whitespace-pre-wrap",children:n.body})]})]})})]})},wa=({teamsData:s})=>{var f,_;const[e,t]=b.useState(null);b.useEffect(()=>{(async()=>{try{const x=nr(lt,"stats","current"),g=await ir(x);g.exists()&&t(g.data())}catch(x){console.error("Error loading stats",x)}})()},[]);const r=b.useMemo(()=>{if(e){if(e.featuredTeamId==="")return null;if(e.featuredTeamId){const p=s.find(x=>x.id===e.featuredTeamId);if(p)return p}}return s[0]||null},[e,s]),n=(e==null?void 0:e.champion)||ha,a=(f=e==null?void 0:e.leadersBatting)!=null&&f.length?e.leadersBatting:ga,o=(_=e==null?void 0:e.leadersPitching)!=null&&_.length?e.leadersPitching:ba,c=p=>(p??"").toString().trim().length>0,l=p=>{const x=c(p.label)||c(p.stat)||c(p.leader)||c(p.position),g=Array.isArray(p.entries)&&p.entries.some(v=>c(v.name)||c(v.value)||c(v.imageUrl));return x||g},d=a.filter(l),u=o.filter(l),m=({label:p,stat:x,leader:g,imageUrl:v,position:re,entries:P})=>{var w,B;return i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-5 card-glow grid gap-3 hover:border-habboSky/30 hover:bg-white/8 transition-all hover:scale-[1.02]",children:[i.jsxs("div",{className:"flex items-start justify-between gap-3",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs text-white/60 uppercase mb-1",children:p}),i.jsx("p",{className:"text-4xl md:text-5xl font-black leading-none",children:x}),i.jsx("p",{className:"mt-2 font-semibold",children:g}),i.jsx("p",{className:"text-xs text-white/60",children:re})]}),i.jsx("div",{className:"w-20 h-24 rounded-xl bg-white/8 border border-white/10 overflow-hidden flex-shrink-0 grid place-items-center",children:g&&(v||Be[g]||(w=P.find(y=>y.name===g))!=null&&w.imageUrl)?i.jsx("img",{src:v||((B=P.find(y=>y.name===g))==null?void 0:B.imageUrl)||Be[g],alt:g,className:"w-full h-full object-contain p-1"}):i.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent border border-white/20 grid place-items-center text-white/70 font-semibold text-lg",children:(g==null?void 0:g.slice(0,1))||"?"})})]}),i.jsx("div",{className:"divide-y divide-white/5 rounded-xl border border-white/5 bg-white/3",children:P.map(y=>i.jsxs("div",{className:"flex items-center gap-3 px-3 py-2",children:[i.jsx(xa,{name:y.name,imageUrl:y.imageUrl||Be[y.name]}),i.jsx("div",{className:"flex-1",children:i.jsx("p",{className:"text-sm font-medium",children:y.name})}),i.jsx("span",{className:"font-semibold text-sm",children:y.value})]},y.name))})]})};return i.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[i.jsxs("div",{className:"grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr,1fr] items-start",children:[i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow lg:sticky lg:top-6 lg:self-start",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-2",children:"Equipo destacado"}),r?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex items-center justify-between gap-3 mb-4",children:[i.jsxs("div",{className:"flex flex-col gap-1",children:[i.jsx("h3",{className:"text-xl sm:text-2xl font-display",children:r.name}),i.jsxs("p",{className:"text-xs sm:text-base text-white/70",children:[r.city," · ",r.record]})]}),r.logoUrl&&i.jsx("img",{src:r.logoUrl,alt:`${r.name} logo`,className:"h-14 sm:h-16 w-auto rounded-lg bg-white/8 border border-white/10 object-contain p-1"})]}),r.hits!==void 0?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3",children:[i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"HITS"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:r.hits})]}),i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"RUNS"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:r.runs})]}),i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"HR"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:r.hr})]}),i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"SO (P)"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:r.so})]})]}),i.jsxs("div",{className:"mb-3",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-1 sm:mb-2",children:"Integrantes"}),i.jsx("p",{className:"text-xs sm:text-sm text-white/80",children:r.members})]})]}):i.jsxs("div",{className:"space-y-3 mb-3",children:[i.jsx(be,{label:"Poder",value:r.power||0,color:"bg-habboOrange"}),i.jsx(be,{label:"Contacto",value:r.contact||0,color:"bg-habboMint"}),i.jsx(be,{label:"Defensa",value:r.defense||0,color:"bg-habboSky"}),i.jsx(be,{label:"Velocidad",value:r.speed||0,color:"bg-habboBrick"})]}),i.jsxs("div",{className:"mt-3 sm:mt-4",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-1 sm:mb-2",children:"Alineación"}),i.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:r.lineup.map(p=>i.jsx("span",{className:"px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10",children:p},p))})]})]}):i.jsx("p",{className:"text-sm text-white/60",children:"Sin equipo destacado seleccionado."})]}),i.jsxs("div",{className:"space-y-4",children:[d.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-2",children:"Líderes de bateo"}),i.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:d.map(p=>i.jsx(m,{...p},`bat-${p.label}-${p.stat}-${p.leader}`))})]}),u.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-2",children:"Líderes de pitcheo"}),i.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:u.map(p=>i.jsx(m,{...p},`pit-${p.label}-${p.stat}-${p.leader}`))})]})]})]}),i.jsxs("div",{className:"bg-gradient-to-br from-habboGold/20 via-habboOrange/20 to-transparent border border-white/10 rounded-2xl p-4 sm:p-6",children:[i.jsx("div",{className:"section-title mb-3 text-[8px] sm:text-[10px]",children:"Actual campeon"}),i.jsx("p",{className:"font-display text-lg sm:text-xl mb-1",children:n.name}),i.jsxs("p",{className:"text-xs sm:text-sm text-white/70",children:[n.season," · ",n.detail]})]}),i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-6 card-glow",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3 gap-2",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70",children:"Tabla general"}),i.jsx("span",{className:"text-[10px] sm:text-xs px-2 py-1 rounded bg-white/10",children:"Top 4"})]}),i.jsx("div",{className:"divide-y divide-white/5",children:s.map((p,x)=>i.jsxs("div",{className:"py-2 sm:py-3 flex items-center gap-2 sm:gap-3",children:[i.jsxs("div",{className:"w-7 sm:w-8 h-7 sm:h-8 grid place-items-center rounded-lg bg-habboInk border border-white/10 font-semibold text-xs sm:text-sm",children:["#",x+1]}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("p",{className:"font-semibold text-xs sm:text-base truncate",children:p.name}),i.jsx("p",{className:"text-[10px] sm:text-xs text-white/60 truncate",children:p.city})]}),i.jsx("div",{className:"text-xs sm:text-sm font-semibold whitespace-nowrap",children:p.record})]},p.name))})]})]})},ya=()=>i.jsx("section",{className:"grid gap-3 sm:gap-4 md:grid-cols-3",children:pa.map(s=>i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 card-glow hover:border-habboGold/30 hover:bg-white/8 transition-all hover:scale-[1.02]",children:[i.jsx("p",{className:"text-[8px] sm:text-xs text-white/60 uppercase mb-1",children:s.status}),i.jsx("h3",{className:"font-display text-lg sm:text-xl mb-2",children:s.name}),i.jsx("p",{className:"text-white/75 text-xs sm:text-sm mb-2 sm:mb-3",children:s.highlight}),i.jsxs("div",{className:"text-xs sm:text-sm text-white/70",children:["Inicio: ",s.starts]})]},s.name))}),Ia=()=>i.jsxs("section",{className:"space-y-4 sm:space-y-5",children:[i.jsx("div",{className:"grid gap-3 sm:gap-4 md:grid-cols-2",children:ma.map(s=>i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 card-glow",children:[i.jsx("h3",{className:"font-display text-base sm:text-lg mb-2",children:s.question}),i.jsx("p",{className:"text-white/75 leading-relaxed text-xs sm:text-sm",children:s.answer})]},s.question))}),i.jsxs("div",{className:"bg-gradient-to-br from-habboSky/15 via-habboGold/20 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6",children:[i.jsx("div",{className:"section-title mb-2 sm:mb-3 text-lg sm:text-xl",children:"¿Quieres aprender a jugar?"}),i.jsx("p",{className:"text-white/80 mb-3 sm:mb-4 text-sm sm:text-base",children:"Visita nuestro Discord oficial donde encontrarás guías detalladas, tutoriales paso a paso y toda la información necesaria para comenzar tu carrera en la WBL."}),i.jsxs("a",{className:"inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap",href:"https://discord.gg/9ufJQpkq4S",target:"_blank",rel:"noopener noreferrer",children:[i.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})}),'Ir al canal "Cómo jugar"']})]})]}),Ea=({teamsData:s})=>i.jsx("section",{className:"grid gap-4 sm:gap-5 md:grid-cols-2",children:s.length===0?i.jsx("div",{className:"col-span-full text-center py-12 text-white/60",children:i.jsx("p",{className:"text-lg",children:"No hay equipos registrados aún."})}):s.map(e=>i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow hover:border-habboMint/30 hover:bg-white/8 transition-all hover:scale-[1.02]",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{className:"flex items-center gap-2",children:["logo"in e&&e.logo&&i.jsx("img",{src:e.logo,alt:`${e.name} logo`,className:"h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg bg-white/8 border border-white/10 object-contain p-1"}),i.jsx("h3",{className:"font-display text-lg sm:text-xl",children:e.name})]}),i.jsx("span",{className:"text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-habboOrange text-[#1f1d2b] font-semibold shadow-pixel hover:scale-110 transition-transform cursor-default",children:e.record})]}),i.jsx("p",{className:"text-white/70 text-xs sm:text-sm mb-3",children:e.city}),"hits"in e?i.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3",children:[i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"HITS"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:e.hits})]}),i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"RUNS"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:e.runs})]}),i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"HR"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:e.hr})]}),i.jsxs("span",{className:"p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10",children:[i.jsx("p",{className:"text-white/60 text-[10px] sm:text-xs",children:"SO (P)"}),i.jsx("p",{className:"font-semibold text-sm sm:text-base",children:e.so})]})]}):i.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3",children:[i.jsxs("span",{children:["Poder: ","power"in e?e.power:0]}),i.jsxs("span",{children:["Contacto: ","contact"in e?e.contact:0]}),i.jsxs("span",{children:["Defensa: ","defense"in e?e.defense:0]}),i.jsxs("span",{children:["Velocidad: ","speed"in e?e.speed:0]})]}),"members"in e&&i.jsxs("div",{className:"mb-3",children:[i.jsx("p",{className:"text-xs sm:text-sm text-white/70 mb-1 sm:mb-2",children:"Integrantes"}),i.jsx("p",{className:"text-xs sm:text-sm text-white/80",children:e.members})]}),i.jsx("p",{className:"text-[10px] sm:text-xs text-white/60 mb-1 sm:mb-2",children:"Alineación"}),i.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:e.lineup.map(t=>i.jsx("span",{className:"px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-[10px] sm:text-sm",children:t},t))})]},e.name))}),Ta=()=>i.jsxs("section",{className:"space-y-5 sm:space-y-6",children:[i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow",children:[i.jsx("div",{className:"section-title mb-3 sm:mb-4 text-lg sm:text-2xl",children:"Normativa oficial de la WBL"}),i.jsx("p",{className:"text-white/80 mb-4 sm:mb-6 text-sm sm:text-base",children:"Las reglas de la World Baseball League están diseñadas para garantizar un juego justo, competitivo y entretenido."}),i.jsx("div",{className:"space-y-3 sm:space-y-5",children:fa.map(s=>i.jsxs("div",{className:"p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20",children:[i.jsx("h3",{className:"font-display text-base sm:text-lg mb-2 sm:mb-3",children:s.title}),i.jsx("p",{className:"text-white/75 leading-relaxed text-xs sm:text-sm",children:s.description})]},s.title))})]}),i.jsxs("div",{className:"bg-gradient-to-br from-habboOrange/20 via-habboGold/15 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6",children:[i.jsx("div",{className:"section-title mb-2 sm:mb-3 text-lg sm:text-2xl",children:"Consulta las reglas completas"}),i.jsx("p",{className:"text-white/80 mb-3 sm:mb-4 text-sm sm:text-base",children:"¿Quieres conocer el reglamento actualizado, ver tutoriales de las mecánicas y enterarte de todo sobre la liga? Visita nuestro Discord Oficial donde encontrarás toda la información que necesitas."}),i.jsxs("a",{className:"inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboOrange text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboGold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap",href:"https://discord.gg/9ufJQpkq4S",target:"_blank",rel:"noopener noreferrer",children:[i.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5",fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})}),"Ver reglas en Discord"]})]})]}),Na=()=>i.jsxs("section",{className:"space-y-5 sm:space-y-6",children:[i.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow",children:[i.jsx("div",{className:"section-title mb-3 sm:mb-4 text-lg sm:text-2xl",children:"Creditos"}),i.jsx("p",{className:"text-white/80 mb-4 sm:mb-6 text-sm sm:text-base",children:"La World Baseball League fue creada por un grupo apasionado de roleplay en Habbo. Este grupo transformó el concepto de baseball en una experiencia competitiva única."})]}),i.jsx("div",{className:"grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3",children:Ft.filter(s=>s.size==="normal").map(s=>i.jsxs("a",{href:s.profileUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow hover:border-habboGold/60 hover:bg-white/12 transition-all hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(246,196,69,0.4)] cursor-pointer group",children:[i.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3",children:[s.image?i.jsx("div",{className:"w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-habboOrange/30 via-habboGold/20 to-transparent border-2 border-habboGold/40 flex-shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center p-1 overflow-hidden group-hover:border-habboGold/80 group-hover:shadow-[0_0_15px_rgba(255,156,51,0.6)]",children:i.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-contain"})}):i.jsx("div",{className:"w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-habboOrange/30 via-habboGold/20 to-transparent border-2 border-habboGold/40 grid place-items-center group-hover:scale-110 transition-transform flex-shrink-0 group-hover:border-habboGold/80 group-hover:shadow-[0_0_15px_rgba(255,156,51,0.6)]",children:i.jsx("span",{className:"text-lg sm:text-xl md:text-2xl font-black text-habboGold",children:s.name.slice(0,1)})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h3",{className:"font-display text-base sm:text-lg md:text-xl truncate group-hover:text-habboGold transition-colors",children:s.name}),i.jsx("p",{className:"text-[10px] sm:text-xs text-white/60 uppercase truncate group-hover:text-habboOrange transition-colors",children:s.role})]})]}),i.jsx("p",{className:"text-white/75 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors",children:s.bio}),i.jsxs("div",{className:"mt-3 sm:mt-4 flex items-center gap-2 text-xs text-white/60 group-hover:text-habboGold transition-colors opacity-0 group-hover:opacity-100",children:[i.jsx("svg",{className:"w-3 h-3 sm:w-4 sm:h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),i.jsx("span",{children:"Ver perfil en Hobbaz"})]})]},s.name))}),i.jsx("div",{className:"flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[7px] sm:text-[8px] text-white/40",children:Ft.filter(s=>s.size==="small").map(s=>i.jsx("span",{children:s.name},s.name))}),i.jsxs("div",{className:"bg-gradient-to-br from-habboMint/20 via-habboSky/15 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6",children:[i.jsx("div",{className:"section-title mb-2 sm:mb-3 text-lg sm:text-2xl",children:"Unete al legado"}),i.jsx("p",{className:"text-white/80 mb-3 sm:mb-4 text-sm sm:text-base",children:"Gracias a todo el equipo, la WBL sigue creciendo temporada tras temporada. Únete a la comunidad y forma parte de esta historia."}),i.jsx("a",{className:"inline-flex px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap",href:"https://discord.gg/9ufJQpkq4S",target:"_blank",rel:"noopener noreferrer",children:"Únete al Discord"})]})]}),$=({title:s,subtitle:e})=>i.jsxs("div",{className:"mb-6",children:[i.jsx("div",{className:"section-title mb-3 hover:text-habboGold transition-colors cursor-default",children:s}),i.jsx("p",{className:"text-white/75 text-sm max-w-2xl",children:e})]});function ka(){const[s,e]=b.useState([]);return b.useEffect(()=>{(async()=>{try{const r=await $t(Gt(Kt(lt,"teams"),Jt("order","asc")));if(!r.empty){const n=r.docs.map(a=>({id:a.id,...a.data()}));e(n)}}catch(r){console.error("Error loading teams",r)}})()},[]),i.jsx(ia,{children:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#0f1018] text-white",children:"Cargando..."}),children:i.jsxs(Ms,{children:[i.jsxs(E,{element:i.jsx(_a,{}),children:[i.jsx(E,{index:!0,element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"Inicio",subtitle:"Noticias y bienvenida a la liga roleplay de baseball en Hobbaz."}),i.jsx(va,{})]})}),i.jsx(E,{path:"/stats",element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"Estadisticas",subtitle:"Tabla general, equipo destacado y top de estadísticas."}),i.jsx(wa,{teamsData:s})]})}),i.jsx(E,{path:"/seasons",element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"Temporadas",subtitle:"Histórico de seasons jugadas y próxima temporada."}),i.jsx(ya,{})]})}),i.jsx(E,{path:"/faq",element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"FAQ",subtitle:"Respuestas rápidas sobre alineaciones, fichajes y cómo empezar."}),i.jsx(Ia,{})]})}),i.jsx(E,{path:"/teams",element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"Equipos",subtitle:"Planteles inscritos con stats y alineación visible."}),i.jsx(Ea,{teamsData:s})]})}),i.jsx(E,{path:"/rules",element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"Reglas",subtitle:"Normativa oficial y código de conducta de la WBL."}),i.jsx(Ta,{})]})}),i.jsx(E,{path:"/founders",element:i.jsxs(i.Fragment,{children:[i.jsx($,{title:"Creditos",subtitle:"Los visionarios que hicieron posible la World Baseball League."}),i.jsx(Na,{})]})}),i.jsx(E,{path:"/schedule",element:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsx("p",{children:"Cargando..."})}),children:i.jsx(la,{})})}),i.jsx(E,{path:"/standings",element:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsx("p",{children:"Cargando..."})}),children:i.jsx(da,{})})})]}),i.jsx(E,{path:"/admin-wbl-2026/login",element:i.jsx(oa,{})}),i.jsx(E,{path:"/admin-wbl-2026",element:i.jsx(aa,{children:i.jsx(ca,{})})})]})})})}dr.createRoot(document.getElementById("root")).render(i.jsx(zs.StrictMode,{children:i.jsx(Vs,{children:i.jsx(ka,{})})}));export{lt as d,i as j,na as u};

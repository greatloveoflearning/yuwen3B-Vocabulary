// When running on localhost, the app talks to local Firebase emulators
// instead of a real project, so the site is safe to develop against without
// touching production data. Set to false to always use the real project.
window.FIREBASE_USE_EMULATOR =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

if (window.FIREBASE_USE_EMULATOR) {
  // Fake config used only against the local emulator suite (see README) —
  // the emulator does not validate these values against a real project.
  window.FIREBASE_CONFIG = {
    apiKey: "demo-key",
    authDomain: "demo-yuwen3b-vocab.firebaseapp.com",
    projectId: "demo-yuwen3b-vocab",
    storageBucket: "demo-yuwen3b-vocab.appspot.com",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000000000",
  };
} else {
  // yuwen3b Firebase project's web app config. Not a secret — this just
  // identifies which Firebase project the site talks to; access is enforced
  // by firestore.rules, not by hiding this value.
  window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyCoOA5cRAxe4ghnWAKB8-khH-q2gigu-wY",
    authDomain: "yuwen3b.firebaseapp.com",
    projectId: "yuwen3b",
    storageBucket: "yuwen3b.firebasestorage.app",
    messagingSenderId: "914305468231",
    appId: "1:914305468231:web:f8371cb9ff59751b2c2e62",
  };
}

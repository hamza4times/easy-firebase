export {startProject};

/* -------------------------------------------------------------------
                            IMPORTS
------------------------------------------------------------------- */
import { initializeApp } from 'firebase/app';


/* -------------------------------------------------------------------
                         BASIC FUNCTIONS
------------------------------------------------------------------- */
function startProject(apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) {

    const firebaseConfig = {
        apiKey: String(apiKey),
        authDomain: String(authDomain),
        projectId: String(projectId),
        storageBucket: String(storageBucket),
        messagingSenderId: String(messagingSenderId),
        appId: String(appId)
    };

    const app = initializeApp(firebaseConfig);
}
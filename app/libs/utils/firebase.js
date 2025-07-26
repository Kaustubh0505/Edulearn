"use client";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const firebaseConfig = {
    apiKey: "AIzaSyD402LwS3FdF8siY598PDxDyUuQwi-4Wqg",
    authDomain: "edulearn-7c60c.firebaseapp.com",
    projectId: "edulearn-7c60c",
    storageBucket: "edulearn-7c60c.firebasestorage.app",
    messagingSenderId: "810545560254",
    appId: "1:810545560254:web:4a931bb42f972eea4dfcef",
    measurementId: "G-SRRVXWCB5N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// Function to check authentication and redirect
export const checkAuthAndRedirect = (router) => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.push('/auth/login');
        }
    });
};
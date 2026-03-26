import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// إعداداتك (تأكد أنها نفس التي في مشروعك)
const firebaseConfig = {
    apiKey: "AIzaSyCIqjdkyGxKsIydkPIvNHtO3tJ41dlyYV0",
    authDomain: "mystore-681e4.firebaseapp.com",
    projectId: "mystore-681e4",
    storageBucket: "mystore-681e4.firebasestorage.app",
    messagingSenderId: "995822112820",
    appId: "1:995822112820:web:1964a8c3ac9d6018b97a61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// برمجة الزر لفتح نافذة جوجل
const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
    loginBtn.onclick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("تم الدخول بنجاح!");
            })
            .catch((error) => {
                console.error("خطأ:", error.code);
                alert("تأكد من تشغيل الموقع عبر سيرفر (مثل Live Server) وليس كملف عادي");
            });
    }
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Feed from "../Pages/Feeder";
import Profile from "../Pages/Profile";
import Create from "../Pages/Create";
import Chat from "../Pages/ChatRoom";
import Connection from "../Pages/Connection";
import Jobs from "../Pages/Jobs";
import JobsDetail from "../Pages/JobsDetail";


const Voice = () => {
    const navigate = useNavigate();
    const commands = [
        {
            command: ["Ke *", "Buka *", "To *"],
            callback: (redirectPage) => setRedirectUrl(redirectPage)
        }
    ]
    const {transcript} = useSpeechRecognition({commands});
    const [redirectUrl, setRedirectUrl] = useState("");

    console.log(transcript);

    const pages = [
        'home', 
        'about', 
        'contact', 
        'login',
        'register',
        'masuk',
        'daftar',
        'kontak'
    ]    
    const url = {
        home: '/', 
        about: `/about`, 
        contact: '/contact', 
        login: '/login', 
        register: '/register',
        masuk: '/login',
        daftar: '/register',
        beranda: '/feed',
        koneksi: '/connection'
    }

    if(!SpeechRecognition.browserSupportsSpeechRecognition){
        return null;
    }

    let redirect = '';

    if(redirectUrl){
        if(pages.includes(redirectUrl)){
            redirect = navigate(url[redirectUrl])
        }else{
            redirect = <p>Halaman {redirectUrl} tidak tersedia</p>
        }
    }

    return(
        <div>
            <p>{transcript}</p>
            <p>Transcript: {redirect}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            {/* <button onClick={SpeechRecognition.startListening({ language: 'id' })}>Start</button> */}
        </div>
    )
}

export default Voice;
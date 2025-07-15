import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function TemplatePage(){
    const navigate = useNavigate();
    const [cssLoaded, setCssLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);
    useEffect(() => {
        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        //Dodać docelowy css
        // link.href = '/css/pages/main-page.css';
        // link.media = 'print';

        // link.onload = () => {
        //     link.media = 'all';
            setTimeout(() =>{
                setCssLoaded(true);
            }, 1000);
        // };

        // document.head.appendChild(link);

        // return () => {
        //     document.head.removeChild(link);
        // };
    }, []);
    useEffect(() => {
        if (cssLoaded) {
            setShow(true);
            setTimeout(() => {
                setShowOverflow(true);
            }, 500);
        }
    }, [cssLoaded]);
    return(
        <>
            <section className={`preloader ${show ? 'fade-out' : 'fade-in'}`}>
                <img src="/logo/logo.png" alt="LogoDLD" className="logo-preloader" />
            </section>
            <section id="template-page"className={`${show ? 'template-opacity' : ''}`}>
                <p>DLD Template</p>
            </section> 
        </>
    );
}
export default TemplatePage;
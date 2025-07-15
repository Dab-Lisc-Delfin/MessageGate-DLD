import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();
    const [cssLoaded, setCssLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);
    useEffect(() => {
        // if( !isLoggedIn){
        //     navigate("/");
        // }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/css/pages/main-page.css';
        link.media = 'print';

        link.onload = () => {
            link.media = 'all';
            setTimeout(() =>{
                setCssLoaded(true);
            }, 1000);
        };

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    useEffect(() => {
        if (cssLoaded) {
            setShow(true);
            setTimeout(() => {
                setShowOverflow(true);
            }, 500);
        }
    }, [cssLoaded]);
    function LogOut(){
        setHide(true);
        setShow(false);
        setTimeout(() =>{
            setIsLoggedIn(false);
            navigate("/");
        }, 1000);
    }
    return(
        <>
            <section className={`preloader ${show ? 'fade-out' : 'fade-in'}`}>
                <img src="/logo/logo.png" alt="LogoDLD" className="logo-preloader" />
            </section>
            <section id="home-page"className={`${show ? 'home-opacity' : ''}`}>
                <button onClick={LogOut}>Logout</button>
            </section>
        </>
    );
}
export default HomePage;
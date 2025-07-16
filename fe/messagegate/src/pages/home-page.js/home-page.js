import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();
    const [cssLoaded, setCssLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('user');
    const [type, setType] = useState('');
    const [showModal, setShowModal] = useState(false);
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
            // setCssLoaded(true);
        };

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    useEffect(() => {
        if (cssLoaded) {
            setShow(true);
        }
    }, [cssLoaded]);
    function LogOut(){
        setShow(false);
        setTimeout(() =>{
            setIsLoggedIn(false);
            navigate("/");
        }, 1000);
    }
    function showComposeModal(value){
        setShowModal(true);
        setType(value);
    }
    function HideModal(){
        setShowModal(false);
    }
    function submitSend(e){
        e.preventDefault();
        console.log('it works!');
    }
    return(
        <>
            <section className={`preloader ${show ? 'fade-out' : 'fade-in'}`}>
                <img src="/logo/logo.png" alt="LogoDLD" className="logo-preloader" />
            </section>
            <section className={`section-home-modal ${show ? 'display-modal' : ''} ${showModal ? 'show' : ''}`}>
                <div onClick={HideModal} className='modal-background-home'></div>
                <div className='modal-input-home'>
                    <div className="header-modal">
                        <img src="/logo/logo.png" alt="LogoDLD" className="logo-login-modal" />
                        <p>Send {type}</p>
                        <p onClick={HideModal} className='absolute-close-modal'>X</p>
                    </div>
                    <form method='post' onSubmit={submitSend} className='modal-form'>
                        <input placeholder='from'/>
                        <input placeholder='to'/>
                        <textarea></textarea>
                        <button type='submit' className='send-button'><p className='send-button-text'>Send</p></button>
                    </form>
                </div>
            </section>
            <section id="home-page"className={`${show ? 'home-opacity' : ''}`}>
                <header className={`${show ? 'slide-in' : 'slide-out'}`}>
                    <div className='container container-header-home'>
                        <div className='header-home-wrapper'>
                            <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
                            <p className='header-home-text'>Welcome back, {user}!</p>
                        </div>
                        <button className='header-logout-button' onClick={LogOut}>Logout</button>
                    </div>
                </header>
                <div className='container container-home-tiles'>
                    <div className='row row-home'>
                        <div className='col-12 col-lg-6 tile-container'>
                            <div className={`tile-home first ${show ? 'slide-in' : 'slide-out'}`}>
                                <p className='tile-heading'>Send email</p>
                                <div className='send-desc'>
                                    <p className='desc-text-home'>- Send a message directly to the recipient's email inbox.</p>
                                    <p className='desc-text-home'>- Write and send an email in just a few clicks.</p>
                                    <button onClick={()=>{showComposeModal('email')}} className='home-compose-button'>Compose</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 tile-container'>
                            <div className={`tile-home second ${show ? 'slide-in' : 'slide-out'}`}>
                                <p className='tile-heading'>Send sms</p>
                                <div className='send-desc'>
                                    <p className='desc-text-home'>- Quickly send a short text message to any phone number.</p>
                                    <p className='desc-text-home'>- Perfect for instant and brief communication.</p>
                                    <button onClick={()=>{showComposeModal('sms')}} className='home-compose-button'>Compose</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomePage;
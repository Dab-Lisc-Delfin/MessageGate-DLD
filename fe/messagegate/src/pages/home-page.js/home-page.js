import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import HomeModal from '../../components/home-modal';
import HomeTiles from '../../components/home-tiles';
import History from '../../components/history';

function HomePage(){
    const navigate = useNavigate();
    const [cssLoaded, setCssLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('user');
    const [type, setType] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showSmsModal1, setShowSmsModal1] = useState(false);
    const [from, setFrom] = useState('user');
    const [to, setTo] = useState('');
    const [fromTel, setTelFrom] = useState('user');
    const [toTel, setToTel] = useState('');
    const [errorFrom, setErrorFrom] = useState('');
    const [errorTo, setErrorTo] = useState('');
    const menuOptions = ['Home', 'History'];
    const [fadeOut, setFadeOut] = useState(false);
    const [currentPage, setCurrentPage] = useState('HomeFirstLoad');
    //const [currentPage, setCurrentPage] = useState('History');
    const [showMenu, setShowMenu] = useState(false);
    function LogOut(){ setShow(false); setTimeout(() =>{ setIsLoggedIn(false); navigate("/"); }, 1000); };
    function HideModal(){ setShowModal(false); };
    function HideModalSms(){ setShowSmsModal1(false); };
    useEffect(() => { if (cssLoaded) { setShow(true); } }, [cssLoaded]);
    const ListItems = menuOptions.map((option) =>{
        return(
            <ol onClick={()=> {NavigateMenu(`${option}`)}} key={option} className={`${option} ${(option === currentPage || (option === 'Home' && currentPage === 'HomeFirstLoad')) ? 'current' : ''}`}>{option}</ol>
        );
    });

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

    
    function showComposeModal(value, to, wait){
        setTimeout(() =>{
            setShowModal(true); 
            setTo(to);
            setType(value);
        }, wait);
    };
    function showSmsModal(value, to, wait){
        setTimeout(() =>{
            setShowSmsModal1(true); 
            setToTel(to);
            setType(value);
        }, wait);
    };
    function NavigateMenu(link){
        if(link !== currentPage){
            setFadeOut(true);
            setTimeout(()=>{
                setCurrentPage(link);
                setFadeOut(false);
            }, 300);
            
        }
    }

    function submitSend(e){
        e.preventDefault();
        if(from === ''){ setErrorFrom(true); }
        if(to === ''){ setErrorTo(true); }
    }

    return(
        <>
            <section className={`preloader ${show ? 'fade-out' : 'fade-in'}`}>
                <img src="/logo/logo.png" alt="LogoDLD" className="logo-preloader" />
            </section>
            {(currentPage === 'Home' || currentPage === 'HomeFirstLoad') && <HomeModal currentPage={currentPage} show={show} showSmsModal1={showSmsModal1} showModal={showModal} submitSend={submitSend} HideModal={HideModal} HideModalSms={HideModalSms} type={type} from={from} fromTel={fromTel} setFrom={setFrom} errorFrom={errorFrom} setErrorFrom={setErrorFrom} to={to} toTel={toTel} setTo={setTo} setToTel={setToTel} errorTo={errorTo} setErrorTo={setErrorTo} />}
            
            <section id="home-page"className={`${show ? 'home-opacity' : ''}`}>
                <header className={`${show ? 'slide-in' : 'slide-out'}`}>
                    <div className='container container-header-home'>
                        <div className='header-home-wrapper'>
                            <div className='d-flex'>
                                <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
                                <p className='header-home-text'>Welcome back, {user}!</p>
                            </div>
                            <div onClick={()=>{setShowMenu(!showMenu);}} className={`menu ${showMenu ? 'open' : ''}`}>
                                <div className='d-flex'>
                                    <p>Menu</p>
                                    <img src="/icons/arrow.webp" alt="Arrow" />
                                </div>
                                <ul>{ListItems}</ul>
                            </div>
                            <button className='header-logout-button' onClick={LogOut}>Logout</button>
                        </div>
                        
                    </div>
                </header>
                <div className={`home-tiles-wrapper ${fadeOut ? 'fade-out' : ''}`}>
                    {(currentPage === 'Home' || currentPage === 'HomeFirstLoad') && <HomeTiles showSmsModal={showSmsModal} showComposeModal={showComposeModal} show={show}/>}
                    {currentPage === 'History' && <History showComposeModal={showComposeModal} showSmsModal={showSmsModal} setFadeOut={setFadeOut} setCurrentPage={setCurrentPage}/>}
                </div>
            </section>
        </>
    );
}
export default HomePage;
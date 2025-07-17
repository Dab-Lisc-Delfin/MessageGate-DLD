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
    const [from, setFrom] = useState('user');
    const [to, setTo] = useState('');
    const [errorFrom, setErrorFrom] = useState('');
    const [errorTo, setErrorTo] = useState('');
    const [menu, setMenu] = useState(false);
    const menuOptions = ['Home', 'History'];
    const [fadeOut, setFadeOut] = useState(false);
    const [currentPage, setCurrentPage] = useState('HomeFirstLoad');
    function LogOut(){ setMenu(false); setShow(false); setTimeout(() =>{ setIsLoggedIn(false); navigate("/"); }, 1000); };
    function showComposeModal(value){ setShowModal(true); setType(value); };
    function HideModal(){ setShowModal(false); };
    useEffect(() => { if (cssLoaded) { setShow(true); if(window.innerWidth > 991) setMenu(true); } }, [cssLoaded]);
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
        console.log('it works!');
    }

    return(
        <>
            <section className={`preloader ${show ? 'fade-out' : 'fade-in'}`}>
                <img src="/logo/logo.png" alt="LogoDLD" className="logo-preloader" />
            </section>
            <section className={`menu-home ${menu ? 'fade-in' : 'fade-out'}`}>
                <ul>{ListItems}</ul>
                <button className='header-logout-button' onClick={LogOut}>Logout</button>
            </section>
            {(currentPage === 'Home' || currentPage === 'HomeFirstLoad') && <HomeModal currentPage={currentPage} show={show} showModal={showModal} submitSend={submitSend} HideModal={HideModal} type={type} from={from} setFrom={setFrom} errorFrom={errorFrom} setErrorFrom={setErrorFrom} to={to} setTo={setTo} errorTo={errorTo} setErrorTo={setErrorTo} />}
            
            <section id="home-page"className={`${show ? 'home-opacity' : ''}`}>
                <header className={`${show ? 'slide-in' : 'slide-out'}`}>
                    <div className='container container-header-home'>
                        <div className='header-home-wrapper'>
                            <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
                            <p className='header-home-text'>Welcome back, {user}!</p>
                        </div>
                        
                    </div>
                </header>
                <div className={`home-tiles-wrapper ${fadeOut ? 'fade-out' : ''}`}>
                    {(currentPage === 'Home' || currentPage === 'HomeFirstLoad') && <HomeTiles showComposeModal={showComposeModal} show={show}/>}
                    {currentPage === 'History' && <History/>}
                </div>
            </section>
        </>
    );
}
export default HomePage;
import { useState } from 'react';
import recent_correspondents from '../assets/jsons/recent.json'
import recent_correspondents_sms from '../assets/jsons/recent-sms.json'

function HomeModal({submitSend, showModal, showSmsModal1, show, HideModal, HideModalSms, type, from, fromTel, setToTel, setFrom, errorFrom, setErrorFrom, to, toTel, setTo, errorTo, setErrorTo}){
    
    const [recent, setRecent] = useState(false);
    function setValue(value){
        setTo(value);
    }
    function setValueTel(value){
        setToTel(value);
    }
    return(
        <>
            <section className={`section-home-modal ${show ? 'display-modal' : ''} ${showModal ? 'show' : ''}`}>
                <div onClick={HideModal} className='modal-background-home'></div>
                <div className='modal-input-home'>
                    <div className="header-modal">
                        <img src="/logo/logo.png" alt="LogoDLD" className="logo-login-modal" />
                        <p>Send {type}</p>
                        <p onClick={HideModal} className='absolute-close-modal'>X</p>
                    </div>
                    <form method='post' onSubmit={submitSend} className='modal-form'>
                        <input placeholder='from'name='from' onChange={(e)=>{ const value = e.target.value; setFrom(value);if (value.trim() !== '') { setErrorFrom(false); }}} value={from}/>
                        <div className={`ErrorTo ErrorFrom ${errorFrom ? 'showErrorTo' : ''}`}>
                            <p className='ErrorToText'>From can't be empty</p>
                        </div>
                        <input className={`${recent ? 'is-active' : ''}`} placeholder='to'name='to'onChange={(e)=>{const value = e.target.value; setTo(value);if (value.trim() !== '') { setErrorTo(false); }}} value={to}/>
                        <img className={`${recent ? 'is-active' : ''}`} src="/icons/arrow.webp" onClick={()=>{setRecent(!recent)}} alt="Arrow" />
                        <div className={`recent ${recent ? 'is-active' : 'is-not'}`}>
                            <ul>
                                {recent ?  recent_correspondents.recent_correspondents.map((item) => {
                                    return (
                                        <li key={item} onClick={()=>{setValue(item); setRecent(!recent);}}>
                                            <p>{item}</p>
                                        </li>
                                    );
                                }) : ''} 
                            </ul>
                        </div>
                        <div className={`ErrorTo ${errorTo ? 'showErrorTo' : ''}`}>
                            <p className='ErrorToText'>To can't be empty</p>
                        </div>
                        <textarea></textarea>
                        <button type='submit' className='send-button'><p className='send-button-text'>Send</p></button>
                    </form>
                </div>
            </section>
            <section className={`section-home-modal ${show ? 'display-modal' : ''} ${showSmsModal1 ? 'show' : ''}`}>
                <div onClick={HideModalSms} className='modal-background-home'></div>
                <div className='modal-input-home'>
                    <div className="header-modal">
                        <img src="/logo/logo.png" alt="LogoDLD" className="logo-login-modal" />
                        <p>Send {type}</p>
                        <p onClick={HideModalSms} className='absolute-close-modal'>X</p>
                    </div>
                    <form method='post' onSubmit={submitSend} className='modal-form'>
                        <input placeholder='from'name='fromTel' onChange={(e)=>{ const value = e.target.value; setFrom(value);if (value.trim() !== '') { setErrorFrom(false); }}} value={fromTel}/>
                        <div className={`ErrorTo ErrorFrom ${errorFrom ? 'showErrorTo' : ''}`}>
                            <p className='ErrorToText'>From can't be empty</p>
                        </div>
                        <input className={`${recent ? 'is-active' : ''}`} placeholder='to'name='toTel'onChange={(e)=>{const value = e.target.value; setToTel(value);if (value.trim() !== '') { setErrorTo(false); }}} value={toTel}/>
                        <img className={`${recent ? 'is-active' : ''}`} src="/icons/arrow.webp" onClick={()=>{setRecent(!recent)}} alt="Arrow" />
                        <div className={`recent ${recent ? 'is-active' : 'is-not'}`}>
                            <ul>
                                {recent ?  recent_correspondents_sms.recent_correspondents_sms.map((item) => {
                                    return (
                                        <li key={item} onClick={()=>{setValueTel(item); setRecent(!recent);}}>
                                            <p>{item}</p>
                                        </li>
                                    );
                                }) : ''} 
                            </ul>
                        </div>
                        <div className={`ErrorTo ${errorTo ? 'showErrorTo' : ''}`}>
                            <p className='ErrorToText'>To can't be empty</p>
                        </div>
                        <textarea></textarea>
                        <button type='submit' className='send-button'><p className='send-button-text'>Send</p></button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default HomeModal
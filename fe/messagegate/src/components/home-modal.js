function HomeModal({submitSend, showModal, show, HideModal, type, from, setFrom, errorFrom, setErrorFrom, to, setTo, errorTo, setErrorTo}){
    return(
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
                    <input placeholder='to'name='to'onChange={(e)=>{const value = e.target.value; setTo(value);if (value.trim() !== '') { setErrorTo(false); }}} value={to}/>
                    <div className={`ErrorTo ${errorTo ? 'showErrorTo' : ''}`}>
                        <p className='ErrorToText'>To can't be empty</p>
                    </div>
                    <textarea></textarea>
                    <button type='submit' className='send-button'><p className='send-button-text'>Send</p></button>
                </form>
            </div>
        </section>
    );
}

export default HomeModal
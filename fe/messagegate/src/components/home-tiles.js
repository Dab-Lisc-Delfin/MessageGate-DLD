function HomeTiles({show, showComposeModal, showSmsModal}){
    return(
        <div className='container container-home-tiles'>
            <div className='row row-home'>
                <div className='col-12 tile-container'>
                    <div className={`tile-home first ${show ? 'slide-in' : 'slide-out'}`}>
                        <p className='tile-heading'>Send email</p>
                        <div className='send-desc'>
                            <p className='desc-text-home'>- Send a message directly to the recipient's email inbox.</p>
                            <p className='desc-text-home'>- Write and send an email in just a few clicks.</p>
                            <button onClick={()=>{showComposeModal('email')}} className='home-compose-button'>Compose</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 tile-container'>
                    <div className={`tile-home second ${show ? 'slide-in' : 'slide-out'}`}>
                        <p className='tile-heading'>Send sms</p>
                        <div className='send-desc'>
                            <p className='desc-text-home'>- Quickly send a short text message to any phone number.</p>
                            <p className='desc-text-home'>- Perfect for instant and brief communication.</p>
                            <button onClick={()=>{showSmsModal('sms')}} className='home-compose-button'>Compose</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeTiles
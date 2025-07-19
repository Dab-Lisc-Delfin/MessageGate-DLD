function HomeTiles({show, showComposeModal, showSmsModal}){
    return(
        <div className='container container-home-tiles'>
            <div className='row row-home'>
                <div className='col-12 tile-container'>
                    <div className={`tile-home first ${show ? 'slide-in' : 'slide-out'}`}>
                        <p className='tile-heading'>Send email</p>
                        <button onClick={()=>{showComposeModal('email')}} className='home-compose-button'>Compose</button>
                    </div>
                </div>
                <div className='col-12 tile-container'>
                    <div className={`tile-home second ${show ? 'slide-in' : 'slide-out'}`}>
                        <p className='tile-heading'>Send sms</p>
                        <button onClick={()=>{showSmsModal('sms')}} className='home-compose-button'>Compose</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeTiles
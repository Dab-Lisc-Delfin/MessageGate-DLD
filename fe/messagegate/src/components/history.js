import { useState, useRef } from 'react'
import history from '../assets/jsons/history.json';
import history_sms from '../assets/jsons/history-sms.json';

function History({showComposeModal, setCurrentPage, setFadeOut, showSmsModal}){
    const [heights, setHeights] = useState({});
    const [type, setType] = useState(true);
    const refs = useRef({});

    function SetHeight(id){
        setHeights(prev => {
            const isOpen = prev[id] && prev[id] > 0;
            const newHeight = isOpen ? 0 : refs.current[id].scrollHeight;
            return { ...prev, [id]: newHeight };
        });
    }
    function Reply(e){
        setFadeOut(true);
        setTimeout(()=>{
            setCurrentPage('Home');
            setFadeOut(false);
        }, 300);
        e.preventDefault();
        e.stopPropagation();
    }
    function handleTypeChange(e) {
        setFadeOut(true);
        const value = e.target.value;
        setTimeout(()=>{
            setType(value === 'Emails');
            setFadeOut(false);
        }, 300);
    }

    return(
        <section className="History-section container">
            <div className="row">
                <div className='select'>
                    <select name='select'  value={type ? 'Emails' : 'Sms'} onChange={handleTypeChange}>
                        <option value="Emails">Emails</option>
                        <option value="Sms">Sms</option>
                    </select>
                </div>
                <ul>
                    {type ? 
                        history.history.map((item) => {
                            const isActive = heights[item.id] && heights[item.id] > 0;
                            return (
                                <li onClick={() => SetHeight(item.id)} key={item.id} className={isActive ? 'is-active' : ''} >
                                    <div className='d-flex'>
                                        <p><span>From:</span> {item.from}</p>
                                        <p><span>To:</span> {item.to}</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p><span>Subject:</span> {item.subject}</p>
                                        <p><span>Date:</span> {item.date}</p>
                                    </div>
                                    <p style={{ maxHeight: heights[item.id] || 0}} ref={el => refs.current[item.id] = el} className='content' >
                                        {item.content}
                                    </p>    
                                    <button onClick={(e)=>{Reply(e); showComposeModal('email', item.from , 500);}}>Reply</button>
                                </li>
                            );
                        })
                    : 
                        history_sms.content.map((item) => {
                            const isActive = heights[item.id] && heights[item.id] > 0;
                            return (
                                <li onClick={() => SetHeight(item.id)} key={item.id} className={isActive ? 'is-active' : ''} >
                                    <div className='d-flex'>
                                        <p><span>From:</span> {item.from}</p>
                                        <p><span>To:</span> {item.to}</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p><span>Date:</span> {item.date}</p>
                                    </div>
                                    <p style={{ maxHeight: heights[item.id] || 0}} ref={el => refs.current[item.id] = el} className='content' >
                                        {item.content}
                                    </p>    
                                    <button onClick={(e)=>{Reply(e); showSmsModal('sms', item.from , 500);}}>Reply</button>
                                </li>
                            );
                        })
                    }
                    
                </ul>
            </div>
        </section>
    );
}

export default History

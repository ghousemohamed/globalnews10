import React from 'react';
import './NewsCard.css'
const NewsCard = () => {
    return (
        
        <div className="card dib pa3 mr2 ma2 bw2 grow shadow-5" style={{width: '18rem'}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary b">Go somewhere</a>
        </div>
        </div>
        
        
    );
}

export default NewsCard;
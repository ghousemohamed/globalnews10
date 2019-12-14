import React from 'react';
import './NewsCard.css';

const NewsCard = ({news}) => {
    return (
        
        <div className="card pa3 mr2 ma2 bw2 grow shadow-5 dib" style={{width: '18rem'}}>
            {news.urlToImage === '' ? <img src='https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png' className="card-img-top" alt="..."/>:<img src={news.urlToImage} className="card-img-top" alt="..."/>}
            <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.source.name}</p>
            <a href={news.url} className="btn btn-primary b center"  target="_blank" rel="noopener noreferrer">See Story</a>
        </div>
        </div>
        
        
    );
}

export default NewsCard;
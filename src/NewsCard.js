import React from 'react';
import './NewsCard.css';

const NewsCard = ({news}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow=5">
        <div style={{width: '18rem'}} className="card" >
            <img src={news.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.source.name}</p>
            <a target="_blank" rel="noopener noreferrer" href={news.url} className="btn btn-primary b center">See Story</a>
        </div>
        </div>
        </div>
        
    );
}

export default NewsCard;
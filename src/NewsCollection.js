import React from 'react';
import './NewsCollection.css'

const NewsCollection=({newsArray})=>{
    
    return (
        <div className='tc'>
            {newsArray.map((news, index)=>{
                return <div className="card dib pa3 mr2 ma2 bw2 grow shadow-5" style={{width: '18rem'}} key={index}>
            <img src={news.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.source.name}</p>
            <a href={news.url} className="btn btn-primary b">See Story</a>
        </div>
        </div>
            })}
        </div>

    );
}

export default NewsCollection;

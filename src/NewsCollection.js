import React from 'react';
import './NewsCollection.css'
import NewsCard from './NewsCard';
const NewsCollection=({newsArray})=>{
    
    return (
    
        <div className='tc'>
        
            {newsArray.map((news, index)=>{
                return <NewsCard news={news}/>
            })
            }
        </div>
        
        

    );
}

export default NewsCollection;


import React from 'react';
import NewsCard from './NewsCard';

const NewsCollection=({newsArray})=>{
    
    return (
    
        <div className='tc'>
        
            {newsArray.map((news, index)=>{
                return (<NewsCard news={news} key={index}/>);
            })
            }
        </div>
        
        

    );
}

export default NewsCollection;


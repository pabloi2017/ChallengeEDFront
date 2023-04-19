import React from 'react';
import NewsGrid from './NewsGrid';

const NewsList = ({ articles }) => {
  return (
    <div>
     <NewsGrid articles={articles}/>    
    </div>
  );
};

export default NewsList;
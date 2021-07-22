import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Comments from './Comments';

export default function ImageItem({imageItem, imageIndex}) {
 
  let [likes, setLikes] = useState(imageItem.likes);

  function handleOnClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="col-md-6 mb-5">
      
      <img 
        className="img-fluid" 
        src={imageItem.imageURL} 
        alt={imageItem.description}
      />
      <Link to={`/fakestagram/${imageIndex}/.json`}>
        <strong>{imageItem.title}</strong>
      </Link>

      <p>{imageItem.description}</p>
      <div 
        onClick={handleOnClick}>
        ❤ {likes}
      </div>
      <Comments />
    </div>
  )
}

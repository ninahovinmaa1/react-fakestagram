import React, {useState} from 'react';

export default function ImageItem({imageItem}) {
 
  let [likes, setLikes] = useState(imageItem.likes);

  function handleOnClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="col-md-6">
      <img 
        className="img-fluid" 
        src={imageItem.imageURL} 
        alt={imageItem.description}
      />
      <strong>{imageItem.title}</strong>
      <p>{imageItem.description}</p>
      <p 
        onClick={handleOnClick}>
        ❤ {likes}
      </p>
    </div>
  )
}

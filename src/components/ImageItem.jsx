import React from 'react'

export default function ImageItem({imageItem}) {
  return (
    <div className="col-md-6">
      <img className="img-fluid" 
        src={imageItem.imageURL} 
        alt={imageItem.description}
      />
      <strong>{imageItem.title}</strong>
      <p>{imageItem.description}</p>
      <p>Likes: {imageItem.likes}</p>
    </div>
  )
}

import React, {useState, useEffect} from 'react';
import ImageItem from '../components/ImageItem';

export default function ImageListPage() {

  const [imageList, setImageList] = useState([])

  function fetchImageList() {
    fetch("https://image-mock-data.firebaseio.com/images.json")
      .then(response => response.json())
      .then(data => setImageList(data))
  }

  useEffect( ()=> {
    fetchImageList()
    }, [])

  return (
    <>
      <h2>Fakestagram</h2>
      <div className="row">
        {imageList.map( (imageItem, index) => {
          return <ImageItem 
          imageIndex={index}
            key={imageItem.id} 
            imageItem={imageItem}
          />
        })}
      </div>
    </>
  )
}

import React, {useEffect, useState} from 'react'
import ImageItem from '../components/ImageItem'

export default function ImageDetailPage(props) {
  const [imageData, setImageData] = useState(null)

  useEffect(()=> {

    const id = props.match.params.id
    const url = `https://image-mock-data.firebaseio.com/images/${id}.json`

    fetch(url)
      .then(response => response.json())
      .then(data => setImageData(data))
  }, [])
  
  
  return (
    <>
      {imageData
      ?
      <ImageItem imageItem={imageData} />
      :
      <p>Loading...</p>
      } 
    </>
  )
}

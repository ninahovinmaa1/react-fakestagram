import React, {useRef, useState} from 'react';

export default function Comments() {
  const inputRef = useRef()
  const [commentList, setCommentList] = useState([""])

  function handleOnClick() {
    //get user input of comment field
    let input = inputRef.current
    //add ^ to commentList if input is not empty
    if(input.value !== "") {
      setCommentList( [...commentList, input.value] )
    }
    //empty input field
    input.value = ""

  }


  return (
    <div>
      { commentList.map( (comment, index) => {
        return (
          <p key={index}>{comment}</p>
        )
      })}
      <input ref={inputRef} type="text" className="me-3"/>
      <button 
        onClick={handleOnClick} 
        className="btn btn-primary">
        Add comment
      </button>
    </div>
  )
}

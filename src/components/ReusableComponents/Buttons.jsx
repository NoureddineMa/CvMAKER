import React from 'react'

function CustomButton(props) {
  return (
    <button
       type={props.type} 
       onClick={props.onClick} 
       className={props.className}>
          {props.content}
        </button>
)
}
export default CustomButton
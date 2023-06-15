import React from 'react'

function CustomLabel(props) {
  return (
    <label for={props.type} 
    class="block mb-2 text-xs  font-medium text-gray-900 dark:text-white">
      {props.label}
      </label>
  )
}
export default CustomLabel
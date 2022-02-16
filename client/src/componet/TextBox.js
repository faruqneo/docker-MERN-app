import React from 'react'

export default function TextBox(props) {
  return (
    <div>
        <h3>{props.value?.name}</h3> <input type="text" className={props.value?.classname} id={props.value?.id} name={props.value?.name} size={props.value?.size} />
    </div>
  )
}

import React from 'react'
import './SeasonError.css'
export default function SeasonError(props) {
  return (
    <div className="error">
      <i className={"exclamation triangle icon massive"}>
      Error!
      </i>
      <h1>Error!</h1>
      <p className="error-mesage">{props.message}</p>
    </div>
  )
}

SeasonError.defaultProps = {
  message: '( •́ ̯•̀  )~~~'
}
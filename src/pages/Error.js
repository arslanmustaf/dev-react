import React from 'react'

let myStyle = {
    "width":'100vw',
    "height":'100vh',
    "display":'flex',
    "align-items":'center',
    "justify-content":'center',

}
function Error() {
  return (
    <div style={myStyle}>
        <h1>This Page is Not Available</h1>
    </div>
  )
}

export default Error
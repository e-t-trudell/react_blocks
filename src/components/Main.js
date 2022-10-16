// START HERE;
// add subcontent and advertisement to display from here to app using props.children
import React from 'react'

const Main = () => {
    const coffee = {
        backgroundColor:"#e06666",
        margin:'10px',
        height:'72vh',
        width:'70%',
        flexGrow:'3',
        flexShrink:'0'
    }
  return (
    <div style={coffee}>Main
    </div>
  )
}

export default Main
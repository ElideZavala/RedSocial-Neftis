import React from "react"

const Loading = () => {
  return (
    <div style={{ position:'fixed', height:'100%' ,width:'100%',backgroundColor:'#0008',  zIndex: 50}}>
      <div class="spinner">
  		<div class="dot1"></div>
  		<div class="dot2"></div>
		</div>
    </div>
  )
}

export default Loading

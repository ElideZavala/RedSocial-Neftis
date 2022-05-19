import React from "react"

const Loading = () => {
  return (
    <div style={{ position:'fixed', height:'100%' ,width:'100%', background: 'radial-gradient(circle at 0% 0%, var(--color-quinary) 50%, var(--color-tertiary) 75%, var(--color-secondary) 100%)', zIndex: 50}}>
      <div class="spinner">
  		<div class="dot1"></div>
  		<div class="dot2"></div>
		</div>
    </div>
  )
}

export default Loading

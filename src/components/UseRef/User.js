import React,{forwardRef} from 'react'

const User = (props,ref) => {
  return (
    <>
        <input type="value" ref={ref} />
    </>
  )
}

export default forwardRef(User);
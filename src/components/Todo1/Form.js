import React from 'react'

const Form = (props) => {
  return (
    <>
        <form>
            <input type="text" value={props.value} />
            <button type="submit">Add ToDo</button>
        </form>
    </>
  )
}

export default Form
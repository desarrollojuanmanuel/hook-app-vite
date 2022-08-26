import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputFef1 = useRef()
  const inputFef2 = useRef()
  const inputFef3 = useRef()
  const inputFef4 = useRef()

  const onClick = () => {
    console.log(inputFef1)
  }

  return (
    <>
      <h1> FocusScreen</h1>
      <hr />
      <input ref={inputFef1} type="text" placeholder='ingese algo 1' className='form-control mt-1 1' />
      <input ref={inputFef2} type="text" placeholder='ingese algo 2' className='form-control mt-2 2' />
      <input ref={inputFef3} type="text" placeholder='ingese algo 3' className='form-control mt-3 3' />
      <input ref={inputFef4} type="text" placeholder='ingese algo 4' className='form-control mt-4 4' />

      <button
        className='btn btn-primary mt-1'
        onClick={onClick}
      >
        Set Focus
      </button>

    </>
  )
}

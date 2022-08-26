import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("llamado")
    return (
        <button
            className='btn btn-primary'
            onClick={()=>{increment(5)}}
        >
            incrementar
        </button>
    )
})

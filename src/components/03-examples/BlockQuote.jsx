import { useState } from "react"
import { useRef } from "react"
import { useLayoutEffect } from "react"


const BlockQuote = ({ author, quote }) => {

    const pRef = useRef()
    const [setWidth, setSetWidth] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect()
        setSetWidth({width, height})
    }, [quote])

    return (
        <>
            <blockquote className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} children="mb-1">{author} - {quote}</p>
                <footer className="blockquote-footer">Juan Gutierrez</footer>
            </blockquote>

            <code> { JSON.stringify(setWidth) }</code>
            <br/>
        </>

    )
}

BlockQuote.defaultProps = {
    author: '',
    quote: ''
}

export default BlockQuote

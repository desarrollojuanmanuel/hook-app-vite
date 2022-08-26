import { memo } from "react"

export const Small = memo(({ counter }) => {
    console.log('dibukando ando')
    return (
        <small>{counter}</small>
    )
})

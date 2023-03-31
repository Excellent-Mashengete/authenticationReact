import React from 'react'
import { Button } from 'rsuite'

export const Mybutton = ((props) => {
    const { handle, label, appearance, mybtn } = props;
    return (
        <Button className={mybtn} onClick={handle} appearance={appearance}>{label}</Button>
    )
})  

export default Mybutton
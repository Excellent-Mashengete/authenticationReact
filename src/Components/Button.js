import React from 'react'
import { Button } from 'rsuite'

export const Mybutton = React.forwardRef((props, ref) => {
    const { handle, label, appearance, ...rest } = props;
    
    return (
        <Button onClick={handle} appearance={appearance} {...rest}>{label}</Button>
    )
})  

export default Mybutton
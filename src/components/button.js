import React from 'react';
import '../css/button.css';

const Button = props => {
    console.log({...props})

    return (
        <button className="button" {...props} />
    )
}

export default Button;
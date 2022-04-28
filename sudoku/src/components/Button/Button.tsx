import React from 'react'

/*
- takes in buttonText
- takes in onClick function
*/

export interface ButtonProps {
    buttonText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({buttonText, onClick}:ButtonProps) {
  return (
    <button onClick={onClick}>{buttonText}</button>
  )
}

export default Button
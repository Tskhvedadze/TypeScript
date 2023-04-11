import React from 'react'

type InputProps = {
    handleChangde: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ handleChangde }: InputProps) => {
    return <input type='text' onChange={handleChangde} />
}

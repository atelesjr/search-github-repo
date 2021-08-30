import { ChangeEvent } from 'react'
import * as S from './styles'

interface InputProps {
    name: string
    placeholder: string
    value: string
    onChange: (value: string) => void
}

const Input = ({name, placeholder, value, onChange }: InputProps) => {

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange(value)
    }



    return (
        <S.Input 
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    )
}

export default Input
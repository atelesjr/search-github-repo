import { useState } from 'react'
import * as S from './styles'
import Input from '../generics/Input'
import Button from '../generics/Button'

interface HeaderProps {
    setSearch: (state:string) => void
}

const Header = ({ setSearch }:HeaderProps) => {

    const [ text, setText ] = useState('')

    const onClick = () =>{

        if(text === '') {
            console.log('Erro')
        } else {
            setSearch(text)
            setText('')
        }

    }

    return (
        <S.Header>
            <span className="title">Github Search</span>
            <div className="form">
                <Input 
                    name='search'
                    placeholder='Search for organization'
                    value={text}
                    onChange={ setText }
                />
                <Button 
                    name='Search' 
                    onClick={onClick} 
                />
            </div>
        </S.Header>
    )
}

export default Header
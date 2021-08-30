import * as S from './styles'

interface ButtonProps {
    name: string
    label?: string
    onClick: () => void
}

const Button = ({name, label, onClick}:ButtonProps) => {
    return (
        <S.Button 
            name={name}
            onClick={onClick}
        >
            { label ? label : name }
        </S.Button>
    )
}

export default Button
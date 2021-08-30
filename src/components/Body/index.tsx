import Card, { Repository,  } from '../Card'

import * as S from './styles'

interface BodyProps {
    list: Repository[]
}
const Body = ({list}: BodyProps) => {
    return (
        <S.Body>   
            { 
                list.map((repo: Repository) => {
                    return( 
                        <Card  key={repo.id} repo={repo} />    
                    )
                })
            }
        </S.Body>
    )
}

export default Body
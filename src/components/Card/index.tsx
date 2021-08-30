import * as S from './styles'

export type Repository = {
    id: number
    name: string 
    size: number
    language: string
    watchers: number
    stargazers_count: number
    description: string 
    html_url: string

}

interface CardProps {
    repo: Repository
}

const Card = ({repo}: CardProps) => {
    const { name, size, language, watchers, stargazers_count, description, html_url } = repo ?? ''

    return (
        <S.Card onClick={() => {} }>
            <div className="header">
                <div className="title">
                    <span className="name">{ name } </span>
                </div>

                <div className="subtitle">
                    <div className="line1">
                        <span className="language">Language: {language}</span>
                        <span className="size">{size}KB</span>  
                    </div>
                    <div className="line2">
                        <span className="stars"> {stargazers_count} stars</span>
                        <span className="wachers">{watchers} watchers</span>
                    </div>
                </div>
            </div>
            <div className="body">
                <p>{description}</p>
                
                {/* <p>{html_url}</p> */}

            </div>

            
            

        </S.Card>
    )
}

export default Card
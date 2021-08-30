import { useEffect, useCallback, useState } from 'react'
import * as S from './styles'
//misc
import { searchOrganization } from './util/cli'
// components
import Header from './components/Header'
import Body from './components/Body'


function App() {
  const [ organization, setOrganization ] = useState<string>('')
  const [ list , setList ] = useState<any[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  useEffect(() => {
    console.log(list)
  }, [list])

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  const search = useCallback( async (org: string) => {
    setIsLoading(true)
    const response = await searchOrganization(org) 
    setList(response)
    setIsLoading(false)
  },[])

  useEffect(() => {
   organization && search(organization)
  },[organization, search])
  
  return (
    <S.Container>
      <Header setSearch={setOrganization}/>
      <Body list={list} />
      <S.Global />
    </S.Container>
  );
}

export default App;

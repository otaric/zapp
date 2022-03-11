import styled from 'styled-components'
import appConfig from '../../../config.json'


export const Div = styled.div`
  display: flex;
  align-items: center;
`

export const DivColumn = styled.div`
  display: flex;
  flex-direction:column ;
`

export const ContainerPrincipal = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icone = styled.img`
  border-radius: 100%;
  width: 150px;
`

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: white;
`

export const SubTitulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Texto = styled.p`
  display: block;
  color: white;
`

export const TextoForm = styled(Texto)`
  margin-bottom: 10px;
  font-size: 12px;
  color:${appConfig.theme.dark[300]} ;
`

export const TextArea = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 5px;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`

export const Botao = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${appConfig.theme.colors[100]};
    color: white;
  }
  &:focus {
    outline: none;
  }
`
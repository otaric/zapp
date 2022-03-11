import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import appConfig from '../../config.json'
import { Div } from './styled/style'

const ContainerContato = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${appConfig.theme.colors[200]};
  }
`

const IconeContato = styled.img`
  border-radius: 100%;
  width: 50px;
  margin-right: 10px;
  margin-left: 5px;
`

const ContatoInfo = styled.div`
  border-bottom: 1px solid ${appConfig.theme.colors[100]};
  flex: 1;
  flex-wrap: wrap;
  min-width: 0;
`

const ContactName = styled.h4``

const UltimaMensagem = styled.p`
  font-size: 14px;
  color: ${appConfig.theme.dark[100]};
  padding-bottom: 5px;
  margin-right: 5px;
  overflow: hidden;
  max-width: 230px;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const Horario = styled.p`
  color: white;
  text-align: end;
  font-size: 12px;
  margin-right: 5px;
  padding-bottom: 5px;
`

function Contato({ mapName, usuarioAtual, mensagens }) {
  const router = useRouter()
  const mensagensContato = mensagens.filter(mensagem =>
    mensagem.id.startsWith(mapName+"&|&")
  )

  var ultimo = mensagensContato[0]

  return (
    <ContainerContato
      onClick={function () {
        router.push(`/chat?username=${usuarioAtual}&contato=${mapName}`)
      }}
    >
      <IconeContato
        src={`https://github.com/${mapName}.png`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/images/default-user.png'
        }}
      />
      <ContatoInfo>
        <div>
          <ContactName>{mapName}</ContactName>
        </div>
        <div>
          <UltimaMensagem>{ultimo.texto}</UltimaMensagem>
          <Horario>{ultimo.tempo}</Horario>
        </div>
      </ContatoInfo>
    </ContainerContato>
  )
}

export default Contato

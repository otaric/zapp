import React from 'react'
import styled from 'styled-components'
import { DivColumn, Div } from './styled/style'
import appConfig from '../../config.json'

const ContainerMensagens = styled(DivColumn)`
  height: 100%;
  margin-top: 10px;
`

const ListaDasMensagens = styled(DivColumn)`
  height: 700px;
  flex-direction: column-reverse;
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    margin-left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${appConfig.theme.dark[100]};
    border-radius: 10px;
  }
`

const CorpoMensagem = styled.div`
  align-self: flex-end;
  padding: 8px;
  background-color: ${appConfig.theme.colors[100]};
  margin-bottom: 8px;
  margin-right: 30px;
  border-radius: 10px;
  min-width: 200px;
  max-width: 800px;
  position: relative;

  &:first-child {
    margin-bottom: 15px;
  }

  &:after {
    content: '';
    position: absolute;
    right: -8px;
    z-index: 0;
    top: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid ${appConfig.theme.colors[100]};
  }
`

const ConteudoMensagem = styled.div`
  display: flex;
  justify-content: space-between;
`

const TextoMensagem = styled.p`
  max-width: 700px;
  word-wrap: break-word;
  margin-right: 20px;
`

const Horario = styled.p`
  font-size: 12px;
  align-self: end;
`

function Mensagens({ mensagens, contato }) {
  let mensagensFiltradas = mensagens.filter(mensagem =>
    mensagem.id.startsWith(contato + '&|&')
  )

  mensagensFiltradas.pop()

  return (
    <ContainerMensagens>
      <ListaDasMensagens>
        {mensagensFiltradas.map(mensagem => {
          return (
            <CorpoMensagem>
              <ConteudoMensagem>
                <TextoMensagem id={mensagem.id}>{mensagem.texto}</TextoMensagem>
                <Horario>{mensagem.tempo}</Horario>
              </ConteudoMensagem>
            </CorpoMensagem>
          )
        })}
      </ListaDasMensagens>
    </ContainerMensagens>
  )
}

export default Mensagens

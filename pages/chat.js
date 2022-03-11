import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import {
  ContainerPrincipal,
  SubTitulo,
  TextArea,
  Div,
  DivColumn,
  Icone
} from '../source/components/styled/style'
import appConfig from '../config.json'
import Contato from '../source/components/Contato'
import Modal from '../source/components/Modal'
import Mensagens from '../source/components/Mensagens'

const ContainerChat = styled.div`
  width: 90%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  border-radius: 10px;
  justify-content: space-around;
`

const Containerbase = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  color: white;
  background-color: ${appConfig.theme.dark[400]};
`

const ContainerInfo = styled(Containerbase)`
  border-radius: 10px 0 0 10px;
  width: calc(25%);
  max-height: max-content;
`

const ContainerMensagens = styled(Containerbase)`
  border-radius: 0 10px 10px 0;
  width: calc(75%);
  display: flex;
  flex-direction: column;
`

const User = styled(Div)`
  height: 60px;
  padding: 10px;
  justify-content: space-between;
  background-color: ${appConfig.theme.colors[100]};
  margin-bottom: 10px;
  border-radius: 10px 0 0 10px;
`

const IconeUser = styled.img`
  padding: 2px;
  width: 50px;
  margin-right: 10px;
  border-radius: 100%;
`

const Add = styled.img`
  justify-self: end;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 10px;
`

const ContainerContatos = styled(DivColumn)`
  max-height: 750px;
`

const ContatosScroll = styled(DivColumn)`
  overflow: auto;
  overflow-x: hidden;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${appConfig.theme.dark[100]};
    border-radius: 10px;
  }
`

const TituloContatos = styled(SubTitulo)`
  margin-bottom: 10px;
  padding-bottom: 2px;
  border-bottom: 1px solid white;
`

const InputMensagem = styled(TextArea)`
  padding: 10px;
  border-radius: 0 5px 5px 0;
`

const DivUsuarioAtivado = styled(Div)`
  background-color: ${appConfig.theme.colors[100]};
  padding: 5px;
  border-radius: 0 10px 10px 0;
  max-height: 60px;
`

const NomeUsuarioAtivado = styled.p`
  margin-left: 20px;
`

const IconeUsuarioAtivado = styled(Icone)`
  width: 50px;
  margin-left: 30px;
`

const SemContatosDiv = styled(Div)`
  justify-content: center;
  height: 100%;
`

function Chat() {
  const router = useRouter()
  const usuarioLogado = router.query.username
  const contatoAtivado = router.query.contato
  const [contact, setContact] = React.useState('')
  const [listContact, setListContact] = React.useState([])
  /* mensagens */
  const [mensagem, setMensagem] = React.useState('')
  const [listaDeMensagens, setListaDeMensagens] = React.useState([])
  /* mensagens */
  const [showModal, setShowModal] = React.useState(false)

  let date = new Date().toLocaleDateString()
  let time = new Date().toLocaleTimeString()
  let timeSeconds = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: contatoAtivado + '&|&' + listaDeMensagens.length + 1,
      texto: novaMensagem,
      tempo: timeSeconds
    }

    setListaDeMensagens([mensagem, ...listaDeMensagens])

    const contatoNome = listContact.find(
      element => element.nome == contatoAtivado
    )

    contatoNome.data = time

    mensagem.id.startsWith(contatoAtivado + '&|&')
      ? listContact.sort(function (a, b) {
          if (a.data > b.data) {
            return -1
          } else {
            return true
          }
        })
      : console.log(mensagem)

    setMensagem('')
  }

  function handleTeste(contatoTeste) {
    setContact(contatoTeste)
  }

  function handleNovoContato(novoContato) {
    const contato = {
      id: listContact.length + 1,
      nome: novoContato,
      data: time
    }
    setListContact([contato, ...listContact])
    router.push(`/chat?username=${usuarioLogado}&contato=${novoContato}`)
    const mensagem = {
      id: novoContato + '&|&',
      texto: '⠀⠀⠀⠀⠀⠀⠀⠀⠀',
      tempo: time
    }
    setListaDeMensagens([mensagem, ...listaDeMensagens])
    setMensagem('')
    setContact('')
  }

  return (
    <>
      <Head>
        <title>ZAPP - CHAT</title>
      </Head>
      <ContainerPrincipal>
        <ContainerChat>
          <ContainerInfo>
            <User>
              <Div>
                <IconeUser
                  src={`https://github.com/${usuarioLogado}.png`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null
                    currentTarget.src = '/images/default-user.png'
                  }}
                />
                <p>{usuarioLogado}</p>
              </Div>
              <Div title="adicionar contato">
                <Add src="/images/add.svg" onClick={() => setShowModal(true)} />
                <Modal
                  onClose={() => setShowModal(false)}
                  show={showModal}
                  contact={contact}
                  newContact={handleTeste}
                  onContact={() => {
                    handleNovoContato(contact)
                  }}
                >
                  Adiconar Contato
                </Modal>
              </Div>
            </User>
            <ContainerContatos>
              <TituloContatos>Contatos</TituloContatos>
              <ContatosScroll>
                {listContact.map(contatoAtual => {
                  return (
                    <Contato
                      key={contatoAtual.id}
                      mapName={contatoAtual.nome}
                      usuarioAtual={usuarioLogado}
                      mensagens={listaDeMensagens}
                    />
                  )
                })}
              </ContatosScroll>
            </ContainerContatos>
          </ContainerInfo>
          <ContainerMensagens>
            {listContact.length === 0 ? (
              <SemContatosDiv>
                <h1>nenhum contato adicionado</h1>
              </SemContatosDiv>
            ) : (
              <>
                <DivUsuarioAtivado>
                  <IconeUsuarioAtivado
                    src={`https://github.com/${contatoAtivado}.png`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null
                      currentTarget.src = '/images/default-user.png'
                    }}
                  />
                  <NomeUsuarioAtivado>{contatoAtivado}</NomeUsuarioAtivado>
                </DivUsuarioAtivado>
                <Mensagens
                  mensagens={listaDeMensagens}
                  contato={contatoAtivado}
                />
                <InputMensagem
                  type="text"
                  placeholder="Mensagem..."
                  value={mensagem}
                  onChange={event => {
                    const valor = event.target.value
                    setMensagem(valor)
                  }}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      event.preventDefault()

                      handleNovaMensagem(mensagem)
                    }
                  }}
                ></InputMensagem>
              </>
            )}
          </ContainerMensagens>
        </ContainerChat>
      </ContainerPrincipal>
    </>
  )
}

export default Chat

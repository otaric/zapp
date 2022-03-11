import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import {
  Icone,
  Botao,
  TextArea,
  TextoForm,
  Texto,
  Titulo,
  ContainerPrincipal,
  Div
} from '../source/components/styled/style'
import appConfig from '../config.json'

const ContainerSecunadario = styled(ContainerPrincipal)`
  height: 25%;
  padding: 0 20px;
  border-radius: 20px;
  background-color: ${appConfig.theme.dark[700]};
`

const Container = styled(Div)`
  flex-direction: column;
  margin: 0 20px;
`

const Formulario = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
`

function HomePage() {
  const [username, setUsername] = React.useState('')
  const router = useRouter()

  const userPic = `https://github.com/${username}.png`

  return (
    <>
      <Head>
        <title>ZAPP - LOGIN</title>
      </Head>
      <ContainerPrincipal>
        <ContainerSecunadario>
          <Container>
            <Formulario
              onSubmit={function (event) {
                event.preventDefault()
                router.push(`/chat?username=${username}`)
              }}
            >
              <Titulo>Bem vindo ao ZAPP!</Titulo>

              <TextoForm>coloque um nome de usuário</TextoForm>

              <TextArea
                type="text"
                value={username}
                onChange={function (event) {
                  const valor = event.target.value
                  setUsername(valor)
                }}
              />
              <Botao type="submit" name="entrar">
                login
              </Botao>
            </Formulario>
          </Container>
          <Container>
            <Icone
              src={
                /*corrigindo bug que não mostrava a foto ao carregar site*/
                userPic == `https://github.com/.png`
                  ? '/images/default-user.png'
                  : userPic
              }
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = '/images/default-user.png'
              }}
            ></Icone>
            <Texto>{username}</Texto>
          </Container>
        </ContainerSecunadario>
      </ContainerPrincipal>
    </>
  )
}

export default HomePage

import React from 'react'
import Link from 'next/link'
import { ContainerPrincipal, Div } from '../source/components/styled/style'
import styled from 'styled-components'
import appConfig from '../config.json'
import Head from 'next/head'

const Bloco404 = styled(Div)`
  color: white;
  padding: 50px;
  background-color: ${appConfig.theme.dark[700]};
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  width: 40%;
`

const Titulo404 = styled.h1`
  font-size: 64px;
`

const Image404 = styled.img`
  height: 40%;
`

const StyledLink = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${appConfig.theme.colors[100]};
  }
`

function Page404() {
  return (
    <>
      <Head>
        <title>ZAPP | 404</title>
      </Head>
      <ContainerPrincipal>
        <Bloco404>
          <Image404 src="/images/zap.svg" />
          <Titulo404>404</Titulo404>
          <Link href="/">
            <StyledLink>Ir para Login!</StyledLink>
          </Link>
        </Bloco404>
      </ContainerPrincipal>
    </>
  )
}

export default Page404

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Icone, TextArea, Botao } from './styled/style'
import appConfig from '../../config.json'

const TitleModal = styled.h3`
  font-size: 18px;
`

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
`

const StyledModal = styled.div`
  background: grey;
  width: 30%;
  height: 50%;
  border-radius: 15px;
  padding: 15px;
`
const DivModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`

const IconeModal = styled(Icone)`
  margin-bottom: 20px;
`

const BotaoModal = styled(Botao)`
  width: 30%;
  align-self: flex-end;
`

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

function Modal({ show, onClose, children, onContact, newContact, contact }) {
  const [isBrowser, setIsBrowser] = React.useState(false)

  React.useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = event => {
    event.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <TitleModal>{children}</TitleModal>
          <a href="#" onClick={handleCloseClick}>
            <img src="/images/close.svg"></img>
          </a>
        </StyledModalHeader>

        <DivModal>
          <IconeModal
            src={`https://github.com/${contact}.png`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = '/images/default-user.png'
            }}
          />
          <TextArea
            type="text"
            value={contact}
            onChange={function (event) {
              const valor = event.target.value
              newContact(valor)
            }}
          />
          <BotaoModal
            type="submit"
            name="adicionar"
            onClick={function (event) {
              event.preventDefault()
              onContact(contact)
            }}
          >
            adicionar
          </BotaoModal>
        </DivModal>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

export default Modal

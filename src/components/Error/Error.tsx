import React from 'react'
import styled from 'styled-components'
import errorImage from './error.webp'

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ErrorMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const ErrorImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`

export const Error = (): JSX.Element => (
  <ErrorPageContainer>
    <ErrorImage src={errorImage} alt="Error" />
    <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
    <p>Please refresh the page and try again.</p>
  </ErrorPageContainer>
)

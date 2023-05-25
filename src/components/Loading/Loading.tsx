import React from 'react'
import styled from 'styled-components'

interface LoadingProps {
  message?: string
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #aecaf7;
  color: #fff;
  padding: 20px;
  border-radius: 4px;
  z-index: 9999;
`

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingMessage = styled.p`
  margin-top: 10px;
  font-size: 16px;
`

export const Loading = ({
  message = 'Loading...',
}: LoadingProps): JSX.Element => (
  <LoadingContainer>
    <LoadingSpinner />
    <LoadingMessage>{message}</LoadingMessage>
  </LoadingContainer>
)

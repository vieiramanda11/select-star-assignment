/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  onClick: () => void
  disabled?: boolean
  active?: boolean
  children: React.ReactNode
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px;
  border: none;
  background-color: ${({ active }) => (active ? '#4285F4' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#4285F4')};
  cursor: pointer;
  border-radius: 0;
  border-top: 1px solid #4285f4;
  border-bottom: 1px solid #4285f4;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:nth-child(1) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid #4285f4;
  }

  &:not(:last-child) {
    border-left: 1px solid #4285f4;
  }
`

export const Button = ({
  onClick,
  disabled = false,
  active = false,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} active={active}>
      {children}
    </StyledButton>
  )
}

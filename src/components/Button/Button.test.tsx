import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders button with children', () => {
    const { getByText } = render(<Button onClick={jest.fn()}>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>,
    )
    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('disables the button when disabled prop is true', () => {
    const { getByText } = render(
      <Button onClick={jest.fn()} disabled>
        Click me
      </Button>,
    )
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeDisabled()
  })
})

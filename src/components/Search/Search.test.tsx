import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from './Search'

describe('Search', () => {
  const onChangeMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with initial value and placeholder', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <Search
        value="initial value"
        onChange={onChangeMock}
        placeholder="Search here"
      />,
    )

    const inputElement = getByDisplayValue('initial value')
    const placeholderText = getByPlaceholderText('Search here')

    expect(inputElement).toBeInTheDocument()
    expect(placeholderText).toBeInTheDocument()
  })

  it('calls onChange function correctly when input value changes', () => {
    const { getByRole } = render(<Search onChange={onChangeMock} />)

    const inputElement = getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'new value' } })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object))
    expect(inputElement.value).toBe('new value')
  })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from './Search'

describe('Search', () => {
  it('updates the value when the input is changed', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Search onChange={handleChange} placeholder="Search table..." />,
    )

    const inputElement = getByPlaceholderText(
      'Search table...',
    ) as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'new value' } })

    expect(inputElement.value).toBe('new value')
  })
})

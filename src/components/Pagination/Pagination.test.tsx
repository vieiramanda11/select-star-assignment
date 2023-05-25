import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  const onPageChangeMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders pagination buttons and handles page change correctly', () => {
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    )

    const page1Button = getByText('1')
    const page4Button = getByText('4')
    const olderButton = getByText('Older')
    const newerButton = getByText('Newer')

    fireEvent.click(page1Button)
    fireEvent.click(page4Button)
    fireEvent.click(newerButton)
    fireEvent.click(olderButton)

    expect(onPageChangeMock).toHaveBeenCalledTimes(4)
    expect(onPageChangeMock).toHaveBeenCalledWith(1)
    expect(onPageChangeMock).toHaveBeenCalledWith(4)
    expect(onPageChangeMock).toHaveBeenCalledWith(1)
  })

  it('disables buttons correctly when on first and last page', () => {
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalPages={1}
        onPageChange={onPageChangeMock}
      />,
    )

    const olderButton = getByText('Older')
    const newerButton = getByText('Newer')

    expect(olderButton).toHaveAttribute('disabled')
    expect(newerButton).toHaveAttribute('disabled')
  })

  it('calls onPageChange with correct page number when older and newer buttons are clicked', () => {
    const { getByText } = render(
      <Pagination
        currentPage={3}
        totalPages={6}
        onPageChange={onPageChangeMock}
      />,
    )

    const olderButton = getByText('Older')
    const newerButton = getByText('Newer')

    fireEvent.click(olderButton)
    fireEvent.click(newerButton)

    expect(onPageChangeMock).toHaveBeenCalledTimes(2)
    expect(onPageChangeMock).toHaveBeenCalledWith(1)
    expect(onPageChangeMock).toHaveBeenCalledWith(5)
  })
})

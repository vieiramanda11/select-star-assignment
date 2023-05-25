import React from 'react'
import Button from '../Button'
import { styled } from 'styled-components'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps): JSX.Element => {
  const getPageNumbers = (): number[] => {
    const visiblePages = 9
    const pageNumbers: number[] = []
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2))
    let endPage = startPage + visiblePages - 1

    if (endPage > totalPages) {
      endPage = totalPages
      startPage = Math.max(1, endPage - visiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  return (
    <Container>
      <Button
        onClick={() => {
          onPageChange(currentPage - 1)
        }}
        disabled={currentPage <= 1}>
        Previous Page
      </Button>
      {getPageNumbers().map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => {
            onPageChange(pageNumber)
          }}
          active={pageNumber === currentPage}>
          {pageNumber}
        </Button>
      ))}
      <Button
        onClick={() => {
          onPageChange(currentPage + 1)
        }}
        disabled={currentPage >= totalPages}>
        Next Page
      </Button>
    </Container>
  )
}

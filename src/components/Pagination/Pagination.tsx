import React from 'react'
import Button from '../Button'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAnglesRight,
  faAnglesLeft,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`

const ArrowButton = styled.button`
  border: 1px solid #4285f4;
  color: #4285f4;
  border-radius: 16px;
  padding: 5px 20px;
  background-color: #fff;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ArrowIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
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
      <div>
        <Button
          onClick={() => {
            onPageChange(currentPage - 1)
          }}
          disabled={currentPage <= 1}>
          <FontAwesomeIcon icon={faAnglesLeft} />
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
          <FontAwesomeIcon icon={faAnglesRight} />
        </Button>
      </div>
      <ButtonsContainer>
        <ArrowButton
          onClick={() => {
            onPageChange(1)
          }}
          disabled={currentPage === 1}>
          <ArrowIcon icon={faArrowLeft} />
          Older
        </ArrowButton>
        <ArrowButton
          onClick={() => {
            onPageChange(totalPages - 1)
          }}
          disabled={currentPage === totalPages}>
          Newer
          <ArrowIcon icon={faArrowRight} />
        </ArrowButton>
      </ButtonsContainer>
    </Container>
  )
}

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { fetchApi } from '../../utils/fetchApi'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'
import Search from '../../components/Search'

const Container = styled.div`
  padding: 20px 80px;
  height: 80vh;
`

export const Home = (): JSX.Element => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  )

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): any => {
    const value = event.target.value
    setSearchQuery(value)

    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    const timeout = setTimeout(() => {
      handleSearch(value)
    }, 1000)

    setTypingTimeout(timeout)
  }

  const handleSearch = (query: string): any => {
    setPage(1)
    setSearchQuery(query)
  }

  const { isLoading, isError, data, isFetching } = useQuery(
    ['exhibitions', page, searchQuery],
    async () => await fetchApi(page, searchQuery),
    {
      keepPreviousData: true,
    },
  )

  const totalPages = data?.pagination?.total_pages ?? 0
  const currentPage = data?.pagination?.current_page ?? 0

  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout)
      }
    }
  }, [typingTimeout])

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <Search value={searchQuery} onChange={handleSearchChange} />
          <Table data={data.data} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
          {isFetching ? <span> Loading...</span> : null}
        </>
      )}
    </Container>
  )
}

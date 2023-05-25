import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchApi } from '../../utils/fetchApi'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'
import Search from '../../components/Search'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Container = styled.div`
  padding: 20px 80px;
  height: 70vh;
`

export const Home = (): JSX.Element => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined)
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  )
  const [sortOption, setSortOption] = useState<string | undefined>(undefined)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const queryClient = useQueryClient()

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): any => {
    const value = event.target.value
    setSearchQuery(value)

    if (typingTimeout !== null) {
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

  const handleHeaderClick = (header: string): void => {
    setSortOption(header)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const { isLoading, isError, data, isFetching } = useQuery(
    ['exhibitions', page, searchQuery, sortOption, sortOrder],
    async () => await fetchApi(page, searchQuery, sortOption, sortOrder),
    {
      keepPreviousData: true,
    },
  )

  const totalPages = data?.pagination?.total_pages ?? 0
  const currentPage = data?.pagination?.current_page ?? 0

  useEffect(() => {
    return () => {
      if (typingTimeout !== null) {
        clearTimeout(typingTimeout)
      }
    }
  }, [typingTimeout])

  useEffect(() => {
    const prefetchPages = []
    const prefetchRange = 4
    const startPage = Math.max(1, page - prefetchRange)
    const endPage = page + prefetchRange

    for (let i = startPage; i < page; i++) {
      prefetchPages.push(i)
    }

    for (let i = page + 1; i <= endPage; i++) {
      prefetchPages.push(i)
    }

    if (page <= totalPages - 4) {
      prefetchPages.forEach((prefetchPage: number) => {
        void queryClient.prefetchQuery({
          queryKey: ['exhibitions', prefetchPage],
          queryFn: async () =>
            await fetchApi(prefetchPage, searchQuery, sortOption, sortOrder),
        })
      })
    }
  }, [page, searchQuery, sortOption, sortOrder])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <Search value={searchQuery} onChange={handleSearchChange} />
          <Table
            data={data.data}
            onHeaderClick={handleHeaderClick}
            isFetching={isFetching}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </Container>
  )
}

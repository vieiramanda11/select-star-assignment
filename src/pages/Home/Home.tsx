/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { fetchApi } from '../../utils/fetchApi'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'

const Container = styled.div`
  padding: 20px 80px;
  height: 80vh;
`

export const Home = (): JSX.Element => {
  const [page, setPage] = useState(1)

  const { isLoading, isError, data, isFetching } = useQuery(
    ['exhibitions', page],
    async () => await fetchApi(page),
    {
      keepPreviousData: true,
    },
  )

  const totalPages = data?.pagination?.total_pages ?? 0
  const currentPage = data?.pagination?.current_page ?? 0

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          <Table data={data.data} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
          {isFetching ? <span> Loading...</span> : null}{' '}
        </>
      )}
    </Container>
  )
}

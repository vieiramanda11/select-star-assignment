import React from 'react'
import { Table } from './components/Table'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { fetchApi } from './utils/fetchApi'

// const data2 = [
//   {
//     id: '1',
//     title: 'Item 1',
//     is_featured: true,
//     short_description: 'Short description 1',
//     gallery: 'Gallery 1',
//   },
//   {
//     id: '2',
//     title: 'Item 2',
//     is_featured: false,
//     short_description: 'Short description 2',
//     gallery: 'Gallery 2',
//   },
//   {
//     id: '3',
//     title: 'Item 3',
//     is_featured: true,
//     short_description: 'Short description 3',
//     gallery: 'Gallery 3',
//   },
//   {
//     id: '4',
//     title: 'Item 4',
//     is_featured: false,
//     short_description: 'Short description 4',
//     gallery: 'Gallery 4',
//   },
//   {
//     id: '5',
//     title: 'Item 5',
//     is_featured: true,
//     short_description: 'Short description 5',
//     gallery: 'Gallery 5',
//   },
//   {
//     id: '6',
//     title: 'Item 6',
//     is_featured: false,
//     short_description: 'Short description 6',
//     gallery: 'Gallery 6',
//   },
//   {
//     id: '7',
//     title: 'Item 7',
//     is_featured: true,
//     short_description: 'Short description 7',
//     gallery: 'Gallery 7',
//   },
//   {
//     id: '8',
//     title: 'Item 8',
//     is_featured: false,
//     short_description: 'Short description 8',
//     gallery: 'Gallery 8',
//   },
//   {
//     id: '9',
//     title: 'Item 9',
//     is_featured: true,
//     short_description: 'Short description 9',
//     gallery: 'Gallery 9',
//   },
//   {
//     id: '10',
//     title: 'Item 10',
//     is_featured: false,
//     short_description: 'Short description 10',
//     gallery: 'Gallery 10',
//   },
//   {
//     id: '11',
//     title: 'Item 11',
//     is_featured: true,
//     short_description: 'Short description 11',
//     gallery: 'Gallery 11',
//   },
//   {
//     id: '12',
//     title: 'Item 12',
//     is_featured: false,
//     short_description: 'Short description 12',
//     gallery: 'Gallery 12',
//   },
//   {
//     id: '13',
//     title: 'Item 13',
//     is_featured: true,
//     short_description: 'Short description 13',
//     gallery: 'Gallery 13',
//   },
//   {
//     id: '14',
//     title: 'Item 14',
//     is_featured: false,
//     short_description: 'Short description 14',
//     gallery: 'Gallery 14',
//   },
//   {
//     id: '15',
//     title: 'Item 15',
//     is_featured: true,
//     short_description: 'Short description 15',
//     gallery: 'Gallery 15',
//   },
// ]

const Container = styled.div`
  padding: 20px 80px;
  height: 90vh;
`

function App(): JSX.Element {
  const { data, isLoading } = useQuery(['exhibitions'], fetchApi)

  return (
    <Container>
      {isLoading ? <div>Loading...</div> : <Table data={data.data} />}
    </Container>
  )
}

export default App

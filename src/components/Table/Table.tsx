import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.table`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const TableRow = styled.tr<{ isFeatured: boolean }>`
  background-color: ${({ isFeatured }) => (isFeatured ? '#FFD6D6' : '#D6FFD6')};
  text-align: center;
`

const TableHeaderCell = styled.th`
  padding: 10px;
  background-color: #e6e6e6;
  font-weight: bold;
  text-align: center;
`

const TableDataCell = styled.td`
  padding: 15px;
`

interface Data {
  id: string
  title: string
  is_featured: boolean
  short_description: string
  gallery: string
}

interface TableProps {
  data: Data[]
}

export const Table = ({ data }: TableProps): JSX.Element => {
  return (
    <TableContainer>
      <thead>
        <TableRow isFeatured={false}>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Is Featured</TableHeaderCell>
          <TableHeaderCell>Gallery Title</TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} isFeatured={item.is_featured}>
            <TableDataCell>{item.title}</TableDataCell>
            <TableDataCell>{item.short_description}</TableDataCell>
            <TableDataCell>{item.is_featured ? 'Yes' : 'No'}</TableDataCell>
            <TableDataCell>{item.gallery}</TableDataCell>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  )
}

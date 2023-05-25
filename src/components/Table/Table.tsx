import React from 'react'
import styled from 'styled-components'
import { isExhibitionOpen } from '../../utils/isExhibitionOpen'

const TableWrapper = styled.div`
  max-height: 100%;
  overflow: auto;
  margin: 30px 0;
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`
const TableContainer = styled.table`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: auto;
`

const TableRow = styled.tr<{ isOpen: string }>`
  background-color: ${({ isOpen }) =>
    isOpen === 'Open' ? '#cdeac4' : '#f4d5d5'};
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
    <TableWrapper>
      <TableContainer>
        <thead>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Is Featured</TableHeaderCell>
          <TableHeaderCell>Gallery Title</TableHeaderCell>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} isOpen={isExhibitionOpen(item)}>
              <TableDataCell>{item.title}</TableDataCell>
              <TableDataCell>{item.short_description}</TableDataCell>
              <TableDataCell>{item.is_featured ? 'Yes' : 'No'}</TableDataCell>
              <TableDataCell>{item.gallery}</TableDataCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </TableWrapper>
  )
}

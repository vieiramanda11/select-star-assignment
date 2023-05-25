import React from 'react'
import styled from 'styled-components'
import { isExhibitionOpen } from '../../utils/isExhibitionOpen'
import TableHeaderCell from '../TableHeaderCell'

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

const TableDataCell = styled.td`
  padding: 10px;
  height: 2rem;
`

const TableDataCellDescription = styled.td`
  padding: 10px;
  height: 2.5rem;
  > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
  }
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
  onHeaderClick: (option: string) => void
}

export const Table = ({ data, onHeaderClick }: TableProps): JSX.Element => {
  const handleHeaderClick = (option: string): any => {
    onHeaderClick(option)
  }
  return (
    <TableWrapper>
      <TableContainer>
        <thead>
          <TableHeaderCell onClick={() => handleHeaderClick('title')}>
            Title
          </TableHeaderCell>
          <TableHeaderCell onClick={() => handleHeaderClick('description')}>
            Description
          </TableHeaderCell>
          <TableHeaderCell onClick={() => handleHeaderClick('is_featured')}>
            Is Featured
          </TableHeaderCell>
          <TableHeaderCell onClick={() => handleHeaderClick('gallery_title')}>
            Gallery Title
          </TableHeaderCell>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} isOpen={isExhibitionOpen(item)}>
              <TableDataCell>{item.title}</TableDataCell>
              <TableDataCellDescription
                dangerouslySetInnerHTML={{
                  __html: item.short_description,
                }}
              />
              <TableDataCell>{item.is_featured ? 'Yes' : 'No'}</TableDataCell>
              <TableDataCell>{item.gallery}</TableDataCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </TableWrapper>
  )
}

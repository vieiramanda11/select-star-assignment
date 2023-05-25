import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { isExhibitionOpen } from '../../utils/isExhibitionOpen'
import TableHeaderCell from '../TableHeaderCell'
import { removeParagraphTags } from '../../utils/removeParagraphTags'

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
  height: 2.5rem;
  min-width: 130px;
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

const loadingAnimation = keyframes`
  0% {
    border-top-color: transparent;
    border-top-width: 0;
  }
  50% {
    border-top-color: #4285f4;
    border-top-width: 2px;
  }
  100% {
    border-top-color: transparent;
    border-top-width: 0;
  }
`

const LoadingBorder = css`
  animation: ${loadingAnimation} 1.5s infinite;
`

const LoadingTableContainer = styled(TableContainer)<{ isFetching: boolean }>`
  ${({ isFetching }) => isFetching && LoadingBorder};
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
  onHeaderClick?: (option: string) => void
  isFetching?: boolean
}

export const Table = ({
  data,
  onHeaderClick,
  isFetching = false,
}: TableProps): JSX.Element => {
  const handleHeaderClick = (option: string): any => {
    onHeaderClick?.(option)
  }

  return (
    <TableWrapper>
      <LoadingTableContainer isFetching={isFetching}>
        <thead>
          <TableHeaderCell onClick={() => handleHeaderClick('title')}>
            Title
          </TableHeaderCell>
          <TableHeaderCell enableHover={false}>Description</TableHeaderCell>
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
              <TableDataCellDescription>
                <p>{removeParagraphTags(item.short_description)}</p>
              </TableDataCellDescription>
              <TableDataCell>{item.is_featured ? 'Yes' : 'No'}</TableDataCell>
              <TableDataCell>{item.gallery}</TableDataCell>
            </TableRow>
          ))}
        </tbody>
      </LoadingTableContainer>
    </TableWrapper>
  )
}

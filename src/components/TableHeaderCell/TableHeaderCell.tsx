import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const TableHeaderCellWrapper = styled.th`
  padding: 10px;
  background-color: #e6e6e6;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  position: relative;

  &:hover .sort-icon {
    display: inline-block;
  }
`

const SortIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #999;
`

interface TableHeaderCellProps {
  onClick: () => void
  children: any
}

export const TableHeaderCell = ({
  onClick,
  children,
}: TableHeaderCellProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (): any => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): any => {
    setIsHovered(false)
  }

  return (
    <TableHeaderCellWrapper
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
      {isHovered && <SortIcon icon={faSort} className="sort-icon" />}
    </TableHeaderCellWrapper>
  )
}

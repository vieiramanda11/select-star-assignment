import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const TableHeaderCellWrapper = styled.th<{ enableHover: boolean }>`
  padding: 10px;
  background-color: #e6e6e6;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  position: relative;

  ${({ enableHover }) =>
    enableHover &&
    `
    &:hover .sort-icon {
      display: inline-block;
    }
  `}
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
  onClick?: () => void
  children: any
  enableHover?: boolean
}

export const TableHeaderCell = ({
  onClick,
  children,
  enableHover = true,
}: TableHeaderCellProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  return (
    <TableHeaderCellWrapper
      onClick={onClick}
      onMouseEnter={enableHover ? handleMouseEnter : undefined}
      onMouseLeave={enableHover ? handleMouseLeave : undefined}
      enableHover={enableHover}>
      {children}
      {isHovered && <SortIcon icon={faSort} className="sort-icon" />}
    </TableHeaderCellWrapper>
  )
}

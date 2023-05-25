import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface InputProps {
  value?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledInput = styled.input`
  padding: 8px 30px;
  border-radius: 16px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  width: 300px;

  ::placeholder {
    color: #aaa;
  }
`

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #666;
`

export const Search = ({
  value,
  onChange,
  placeholder = 'Search table...',
}: InputProps): JSX.Element => {
  return (
    <Container>
      <InputContainer>
        <SearchIcon icon={faSearch} />
        <StyledInput
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputContainer>
    </Container>
  )
}

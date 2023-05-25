/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { API_URL } from './constants'

export const fetchApi = async (
  page: number,
  searchQuery?: string,
): Promise<any> => {
  const url = `${API_URL}${
    searchQuery !== '' ? `search?q=${searchQuery}` : ''
  }?page=${page}&limit=30`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  return await response.json()
}

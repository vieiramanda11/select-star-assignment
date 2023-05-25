import { API_URL } from './constants'

export const fetchApi = async (page: number): Promise<any> => {
  const response = await fetch(`${API_URL}?page=${page}&limit=30`)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  return await response.json()
}

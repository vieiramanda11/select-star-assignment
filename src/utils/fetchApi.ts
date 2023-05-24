import { API_URL } from './constants'

export const fetchApi = async (): Promise<any> => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  return await response.json()
}

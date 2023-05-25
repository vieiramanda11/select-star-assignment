import { API_URL } from './constants'

export const fetchApi = async (
  page: number,
  searchQuery?: string,
  sortOption?: string,
): Promise<any> => {
  let url = `${API_URL}`
  if (searchQuery !== undefined || sortOption !== undefined) {
    url += `search`
    if (searchQuery !== undefined) {
      url += `?q=${searchQuery}`
    }
    if (sortOption !== undefined) {
      url += `${searchQuery !== undefined ? '&' : '?'}`
    }
  }
  url += `${
    searchQuery !== undefined || sortOption !== undefined ? '&' : '?'
  }page=${page}&limit=30`

  const requestBody = {
    page,
    size: 30,
    sort:
      sortOption != null
        ? [
            {
              [`${sortOption}.keyword`]: {
                unmapped_type: 'long',
                order: 'asc',
              },
            },
          ]
        : undefined,
    fields: [
      'id',
      'title',
      'description',
      'gallery_title',
      'type',
      'is_featured',
    ],
  }

  if (sortOption !== undefined) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    return await response.json()
  } else {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    return await response.json()
  }
}

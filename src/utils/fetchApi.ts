import { API_URL } from './constants'

export const fetchApi = async (
  page: number,
  searchQuery?: string,
  sortOption?: string,
  sortOrder?: string,
): Promise<any> => {
  const url = `${API_URL}search?q=${
    searchQuery ?? ''
  }&page=${page}&limit=30&fields=id,title,short_description,gallery_title,type,is_featured,aic_start_at,aic_end_at`

  const requestBody = {
    page,
    size: 30,
    sort:
      sortOption != null
        ? [
            {
              [`${sortOption}.keyword`]: {
                unmapped_type: 'long',
                order: sortOrder,
              },
            },
          ]
        : undefined,
    fields: [
      'id',
      'title',
      'short_description',
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

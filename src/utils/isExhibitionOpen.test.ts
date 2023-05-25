import { isExhibitionOpen } from './isExhibitionOpen'

describe('isExhibitionOpen', () => {
  it('returns "Open" when the current date is within the exhibition start and end dates', () => {
    const exhibition = {
      aic_start_at: '2023-01-01',
      aic_end_at: '2023-12-31',
    }

    const result = isExhibitionOpen(exhibition)

    expect(result).toBe('Open')
  })

  it('returns "Closed" when the current date is outside the exhibition start and end dates', () => {
    const exhibition = {
      aic_start_at: '2022-01-01',
      aic_end_at: '2022-12-31',
    }

    const result = isExhibitionOpen(exhibition)

    expect(result).toBe('Closed')
  })
})

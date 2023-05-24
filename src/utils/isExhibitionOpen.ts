export const isExhibitionOpen = (exhibition: any): string => {
  const currentDate = new Date()
  const exhibitionStartDate = new Date(exhibition.aic_start_at)
  const exhibitionEndDate = new Date(exhibition.aic_end_at)

  if (currentDate >= exhibitionStartDate && currentDate <= exhibitionEndDate) {
    return 'Open'
  } else {
    return 'Closed'
  }
}

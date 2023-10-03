export const dateString = (date: Date) => {
  return date.toLocaleString().slice(0, 19).replace('T', ' ').replaceAll('/', '.').replace(',', '')
}

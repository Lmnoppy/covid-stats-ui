
export default function sortByDateMostRecent(data) {
  const sortedDate = data.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  })
  return sortedDate;
}
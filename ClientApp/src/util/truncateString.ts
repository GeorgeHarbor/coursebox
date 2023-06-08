// https://medium.com/@DylanAttal/truncate-a-string-in-javascript-41f33171d5a8
export default function truncateString(str: string, num: number): string {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
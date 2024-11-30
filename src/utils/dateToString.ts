import Months from "../enum/Months"

export default function dateToString(date: Date | undefined): string {
    if (!date) return 'Invalid date'

    const day = date.getDate().toString().padStart(2, '0')
    const month = Months[date.getMonth()]
    const year = date.getFullYear()

    return `${month} ${day}, ${year}`
}
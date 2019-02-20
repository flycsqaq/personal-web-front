export class Book_POST {
  name: string
  page_total: number
  page_read : number
  start: string
  anticipated_end: string
  isCompleted: boolean
}

export class Book_GET extends Book_POST {
  id: number
  last_read_time: string
}

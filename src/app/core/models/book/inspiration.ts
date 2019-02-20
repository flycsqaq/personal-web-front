export class Inspiration_POST {
  book: number
  title: string
  body: string
}

export class Inspiration_GET extends Inspiration_POST {
  id : number
  created: string
  modified: string
}
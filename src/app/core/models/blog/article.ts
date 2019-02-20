export class Article_POST {
  title : string
  abstract : string
  body: string
  reference : string
  category : number
}

export class Article_GET extends Article_POST {
  id: number
  created: string
  modified: string
}

export interface Article {
  id?: number
  title: string
  abstract: string
  body: string
  reference: string
  category: number
  created?: string
  modified?: string
}

export interface Category {
  id?: number
  name: string
}
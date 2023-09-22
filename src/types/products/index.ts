export type IProduct = {
  id: number
  title: string
  price: number
  description: string
  category: string
  thumbnail: string
  images: string[]
}
export type GetProductsApiResponse = {
  products: IProduct[]
  total: number
  limit: number
  skip: number
}

export interface IProductParams {
  limit: number
  skip: number
  select: string
  q: string
}

export interface RequestProductBody {
  id: string
  title: string
}

export interface DataProduct {
  limit: number,
  products: Products[],
  skip: number,
  total: number
}

export interface Products {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: [],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}

const PRODUCT_BASE_URL = '/products'

const productsEndpoint = () => {
  return {
    products: () => `${PRODUCT_BASE_URL}/search`,
    productsById: (id: string | undefined): string =>
      `${PRODUCT_BASE_URL}/${id}`,
    searchProducts: (searchParams: string | undefined): string =>
      `${PRODUCT_BASE_URL}/search${searchParams}`,
    categories: () => `${PRODUCT_BASE_URL}/categories`,
    updateProduct: (id: string) => `${PRODUCT_BASE_URL}/${id}`
  }
}

const endpoints = {
  productsEndpoint
}

export default endpoints

import api from '../../services/api'
import { AxiosResponse } from 'axios'
import { GetProductsApiResponse, IProductParams } from '../../types/products'
import endpoints from '../../constants/endpoint'
import { useQuery } from 'react-query'

async function getProducts(
  params?: Partial<IProductParams>
): Promise<GetProductsApiResponse> {
  const { data }: AxiosResponse<GetProductsApiResponse> = await api.get(
    endpoints.productsEndpoint().products(),
    { params }
  )
  return data
}

export default function useFetchProducts(params?: Partial<IProductParams>) {
  return useQuery<GetProductsApiResponse>({
    queryKey: ['products', params],
    queryFn: () => getProducts(params)
  })
}

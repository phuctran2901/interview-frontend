import api from '../../services/api'
import { AxiosResponse } from 'axios'
import endpoints from '../../constants/endpoint'
import { useQuery } from 'react-query'

async function getCategories(): Promise<string[]> {
  const { data }: AxiosResponse<string[]> = await api.get(
    endpoints.productsEndpoint().categories()
  )
  return data
}

export default function useFetchProductsCategories() {
  return useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  })
}

import { useMutation } from 'react-query'
import {
  GetProductsApiResponse,
  IProduct,
  IProductParams,
  RequestProductBody
} from '../../types/products'
import api from '../../services/api'
import endpoints from '../../constants/endpoint'
import { AxiosResponse } from 'axios'
import queryClient from '../../services/queryClient'

const updateProduct = async (
  body: RequestProductBody
): Promise<AxiosResponse<IProduct>> => {
  const data: AxiosResponse<IProduct> = await api.put(
    endpoints.productsEndpoint().updateProduct(body.id),
    { title: body.title }
  )

  return data
}

export default function useUpdateProduct(params?: Partial<IProductParams>) {
  return useMutation(updateProduct, {
    onSuccess: (data) => {
      queryClient.setQueryData<GetProductsApiResponse | undefined>(
        ['products', params],
        (oldQueryData?: GetProductsApiResponse) =>
          oldQueryData && {
            ...oldQueryData,
            products: oldQueryData?.products?.map((prod: IProduct) => ({
              ...prod,
              title: prod.id === data.data.id ? data.data.title : prod.title
            }))
          }
      )
    }
  })
}

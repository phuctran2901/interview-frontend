import { useEffect } from 'preact/compat'
import SearchInput from '../SearchInput/SearchInput'
import Button from '../Button/Button'
import useFetchProductsCategories from '../../queries/category'
import { UseQueryResult } from 'react-query'
import { GetProductsApiResponse, Product } from '../../types/products'
import useFetchProducts from '../../queries/products'
import useStore from '../../store'
import { Categories } from '../../types/category'
import List from '../Product/List'
import { useDebounce } from '../../hooks/useDebounce'
import { Header } from '../Header/Header'
export const Card = (): React.JSX<Element> => {
  const { data: categories }: UseQueryResult<string[], unknown> =
    useFetchProductsCategories()
  const searchStr = useStore((state) => state.searchStr)

  const { data }: UseQueryResult<GetProductsApiResponse, unknown> =
    useFetchProducts({
      select: 'title,price,thumbnail,category',
      q: searchStr,
      limit: 100,
      skip: 0
    })
  const setCategories = useStore((state) => state.setCategories)

  const handleGroupProductByCategory = () => {
    const formatData: Categories[] =
      categories?.map((cate: string) => ({
        name: cate,
        products:
          data?.products?.filter(
            (product: Product) => product.category === cate
          ) || []
      })) || []
    setCategories(formatData)
  }

  useEffect(() => {
    if (categories && data) {
      handleGroupProductByCategory()
    }
  }, [categories, data])

  return (
    <div
      className={
        'min-w-[529px] h-[90%] rounded-[24px] p-[24px] gap-[32px] max-h-screen bg-neutral-8 '
      }
    >
      <div class={'flex gap-[8px]'}>
        <Header />
      </div>
      <div className={'mt-[24px] flex gap-[16px] pb-[20px]'}>
        <h2 className={'text-xl text-text-0'}>Product List</h2>
        <div className={'flex-1 flex items-center '}>
          <div class={'border-neutral-4 border-dashed border-t w-full'} />
        </div>
      </div>
      <List />
    </div>
  )
}

export default Card

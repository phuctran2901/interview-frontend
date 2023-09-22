import useStore from '../../store'
import { Categories } from '../../types/category'
import ProductGroup from './ProductGroup'

export const List = () => {
  const categories = useStore((state) => state.categories)

  return (
    <div className={'h-[calc(100%-100px)] overflow-y-auto overflow-x-hidden '}>
      {categories?.map((cate: Categories, index: number) => (
        <ProductGroup
          category={cate.name}
          products={cate.products}
          key={cate.name}
          index={index}
        />
      ))}
    </div>
  )
}

export default List

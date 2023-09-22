import { useState } from 'preact/hooks'
import ButtonGroup from '../Button/ButtonGroup'
import Product from './Product'
import { IProduct } from '../../types/products'
interface Props {
  category: string
  products: IProduct[]
}
export const ProductGroup = ({ category, products }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={'mt-[24px]'}>
      <ButtonGroup
        isOpen={isOpen}
        label={category}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      />
      <div className={`px-9 ${isOpen ? 'visible' : 'hidden'}`}>
        {products?.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGroup

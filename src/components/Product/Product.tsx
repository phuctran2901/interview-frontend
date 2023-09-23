import useUpdateProduct from '../../mutation/products'
import useStore from '../../store'
import { IProduct } from '../../types/products'
import { useRef, useEffect, useState } from 'preact/compat'
interface Props {
  product: IProduct
}
export const Product = ({ product }: Props) => {
  const searchStr = useStore((state) => state.searchStr)
  const [title, setTitle] = useState<string>(product.title)

  const updateProduct = useUpdateProduct({
    select: 'title,price,thumbnail,category',
    q: searchStr,
    limit: 100,
    skip: 0
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const editingId = useStore((state) => state.editingId)
  const setEditingId = useStore((state) => state.setEditingId)
  const resetEditingId = useStore((state) => state.resetEditingId)
  const isEdit = editingId === product.id

  useEffect(() => {
    editingId === product.id && inputRef?.current?.focus()
  }, [editingId])

  return (
    <div
      className={
        ' h-[96px] rounded-[8px] px-[16px] py-[12px] bg-neutral-8 flex gap-[24px] items-center border-transparent border hover:border-primary-30'
      }
    >
      <div className={'w-[72px] h-[72px] rounded-[8px] overflow-hidden'}>
        <img
          className={'w-full h-full object-cover'}
          src={product.thumbnail || ''}
        />
      </div>
      <div className={'flex-1'}>
        {isEdit ? (
          <input
            value={title}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                resetEditingId()
                updateProduct.mutate({
                  title,
                  id: product.id.toString()
                })
              }
            }}
            onChange={(event) => {
              setTitle((event.target as HTMLInputElement).value)
            }}
            ref={inputRef}
            className={
              'text-md w-full text-text-0 outline-none px-[8px] py-[6px] hover:bg-neutral-7 active:bg-neutral-6 rounded-[8px] border border-primary-100'
            }
          />
        ) : (
          <div
            onClick={() => {
              setEditingId(product.id)
            }}
            className={
              'w-[302px] px-[8px] py-[6px] border border-transparent hover:bg-neutral-7 active:bg-neutral-6 rounded-[8px] focus:border-2 focus:border-primary-30'
            }
          >
            <h4 className={'text-md  text-text-0 max-w-full line-clamp-1'}>
              {title}
            </h4>
          </div>
        )}
        <p className={'px-[8px] text-xs text-text-1'}>$ {product.price}</p>
      </div>
    </div>
  )
}

export default Product

import { JSXInternal } from 'preact/src/jsx'
import React from 'preact/compat'
import useStore from '../../store'

interface Props {
  value: string
  setValue: React.StateUpdater<string>
  setSearchStr: (str: string) => void
  searchStr: string
}

export const SearchInput = ({
  value,
  setValue,
  setSearchStr,
  searchStr
}: Props) => {
  return (
    <div className='relative w-[280px] h-[42px] group'>
      <div className='absolute top-[23px] bottom-[20px] left-4 flex items-center pl-3 pointer-events-none'>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.87211 14.5383C9.35126 14.538 10.7878 14.0428 11.9529 13.1316L15.0271 16.2058C15.3525 16.5312 15.8801 16.5312 16.2054 16.2058C16.5308 15.8804 16.5308 15.3528 16.2054 15.0275L13.1313 11.9533C14.0429 10.788 14.5384 9.35115 14.5388 7.87162C14.5388 4.19579 11.5479 1.20496 7.87211 1.20496C4.19628 1.20496 1.20544 4.19579 1.20544 7.87162C1.20544 11.5475 4.19628 14.5383 7.87211 14.5383ZM7.87211 2.87162C10.6296 2.87162 12.8721 5.11412 12.8721 7.87162C12.8721 10.6291 10.6296 12.8716 7.87211 12.8716C5.11461 12.8716 2.87211 10.6291 2.87211 7.87162C2.87211 5.11412 5.11461 2.87162 7.87211 2.87162Z'
            fill='#B1B8C0'
          />
        </svg>
      </div>
      <div>
        <input
          value={value}
          className={`focus:bg-neutral-8 focus:border-primary-100 w-full hover:bg-neutral-8 hover:border-primary-30 ${
            searchStr ? 'border-neutral-1' : 'border-neutral-4'
          } bg-neutral-7  text-sm text-text-0 border  rounded-[50px] py-[12px] px-[16px] gap-[8px] pl-[40px] outline-none`}
          placeholder='Search'
          required
          onKeyDown={(
            e: JSXInternal.TargetedEvent<HTMLInputElement, Event>
          ) => {
            if (e.keyCode === 13) {
              // enter
              setSearchStr(value)
            }
          }}
          onChange={(e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
            setValue(e.target.value)
          }}
        />
        {value && (
          <button
            onClick={() => setValue('')}
            className={
              'absolute top-[11px] right-[20px] cursor-pointer flex items-center justify-center hover:bg-neutral-7 w-[24px] h-[24px] p-[4px] rounded-[15px] visited:bg-neutral-6 border-2  border-transparent focus:border-primary-30 disabled:bg-neutral-6 disabled:text-neutral-6'
            }
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.3751 3.62502C12.0299 3.27983 11.4703 3.27979 11.1251 3.62494L7.99956 6.75L4.87489 3.62505C4.52972 3.27986 3.97006 3.27986 3.62489 3.62506C3.27976 3.97021 3.27976 4.52979 3.62489 4.87494L6.74967 8L3.62489 11.1251C3.27976 11.4702 3.27976 12.0298 3.62489 12.3749C3.97006 12.7201 4.52972 12.7201 4.87489 12.3749L7.99956 9.25L11.1251 12.3751C11.4703 12.7202 12.0299 12.7202 12.3751 12.375C12.7202 12.0298 12.7202 11.4702 12.3751 11.125L9.25033 8L12.3751 4.87498C12.7202 4.5298 12.7202 3.97019 12.3751 3.62502Z'
                fill='#505866'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchInput

import React from 'preact'
interface Props {
  label: string
  onClick?: () => void
  isOpen: boolean
}

export const ButtonGroup = ({ label, onClick, isOpen }: Props) => {
  return (
    <button
      className={
        'w-[480px] h-[48px] rounded-[8px] py-[12px] px-[16px] bg-neutral-8 text-text-0 hover:bg-neutral-7 active:bg-neutral-6 flex   disabled:bg-neutral-8 disabled:text-text-4'
      }
      onClick={onClick}
    >
      <div>
        {isOpen ? (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M16.3536 9.64645C16.5488 9.84171 16.5488 10.1583 16.3536 10.3536L12.3536 14.3536C12.2598 14.4473 12.1326 14.5 12 14.5C11.8674 14.5 11.7402 14.4473 11.6464 14.3536L7.64645 10.3536C7.45118 10.1583 7.45118 9.84171 7.64645 9.64645C7.84171 9.45118 8.15829 9.45118 8.35355 9.64645L12 13.2929L15.6464 9.64645C15.8417 9.45118 16.1583 9.45118 16.3536 9.64645Z'
              fill='#202020'
            />
          </svg>
        ) : (
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M9.64645 7.64645C9.84171 7.45118 10.1583 7.45118 10.3536 7.64645L14.3536 11.6464C14.5488 11.8417 14.5488 12.1583 14.3536 12.3536L10.3536 16.3536C10.1583 16.5488 9.84171 16.5488 9.64645 16.3536C9.45118 16.1583 9.45118 15.8417 9.64645 15.6464L13.2929 12L9.64645 8.35355C9.45118 8.15829 9.45118 7.84171 9.64645 7.64645Z'
              fill='#202020'
            />
          </svg>
        )}
      </div>
      <h3 className={'text-text-0 text-xl'}>{label}</h3>
    </button>
  )
}

export default ButtonGroup

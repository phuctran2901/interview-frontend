import React from 'preact'
interface Props {
  children: string | React.Component
  onClick?: () => void
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        'w-[76px] h-[42px] rounded-[8px] py-[12px] px-[16px] bg-neutral-8 text-text-0 hover:bg-neutral-7 active:bg-neutral-6 flex items-center justify-center focus:bg-neutral-8 focus:border focus:border-primary-30 disabled:bg-neutral-8 disabled:text-text-4'
      }
    >
      {children}
    </button>
  )
}

export default Button

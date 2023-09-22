import useStore from '../../store'
import Button from '../Button/Button'
import SearchInput from '../SearchInput/SearchInput'
import { useState } from 'preact/compat'
export const Header = () => {
  const [value, setValue] = useState('')
  const searchStr = useStore((state) => state.searchStr)
  const setSearchStr = useStore((state) => state.setSearchStr)

  return (
    <div class={'flex gap-[8px]'}>
      <SearchInput
        value={value}
        setValue={setValue}
        setSearchStr={setSearchStr}
        searchStr={searchStr}
      />
      {searchStr && (
        <Button
          onClick={() => {
            setSearchStr('')
            setValue('')
          }}
        >
          Cancel
        </Button>
      )}
    </div>
  )
}

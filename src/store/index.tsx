import { create } from 'zustand'
import { Categories } from '../types/category'
interface CategoriesState {
  categories: Categories[]
  setCategories: (cate: Categories[]) => void
  editingId: number | null
  setEditingId: (id: number) => void
  resetEditingId: () => void
  searchStr: string
  setSearchStr: (key: string) => void
}
const useStore = create<CategoriesState>((set) => ({
  categories: [],
  setCategories: (cate: Categories[]) =>
    set((state: CategoriesState) => ({ ...state, categories: cate })),
  editingId: null,
  setEditingId: (id: number) =>
    set((state: CategoriesState) => ({ ...state, editingId: id })),
  resetEditingId: () =>
    set((state: CategoriesState) => ({ ...state, editingId: null })),
  searchStr: '',
  setSearchStr: (key: string) =>
    set((state: CategoriesState) => ({ ...state, searchStr: key }))
}))
export default useStore

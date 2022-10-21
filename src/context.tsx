import React, { createContext, Dispatch, SetStateAction } from 'react'

export type SneakersItem = {
  id: number,
  productId: number,
  parentId?: number,
  title: string,
  price: number,
  imageUrl: string,
  thumb?: string,
  sizes?: number[]
}

export interface ISneakersContext {
  sneakers: SneakersItem[],
  cartItems: SneakersItem[],
  favorites: SneakersItem[],
  showCase: string,
  isLoading: boolean,
  isLoadingFavorite: boolean,
  cartLoading: boolean,
  mobileMenuOpened: boolean,
  cartOpened: boolean,
  isItemAdded?: (id: number) => boolean,
  isItemFavorited?: (id: number) => boolean,
  setCartOpened?: Dispatch<SetStateAction<boolean>>,
  setCartItems?: Dispatch<SetStateAction<SneakersItem[]>>,
  setGlobalLoading?: Dispatch<SetStateAction<boolean>>,
  onAddToFavorite?: (obj: SneakersItem) => Promise<void>,
  onAddToCard?: (obj: SneakersItem) => Promise<void>,
  setMobileMenuOpened?: Dispatch<SetStateAction<boolean>>,
  onRemoveItem?: (obj: SneakersItem) => Promise<void>,
}

export const defaultState: ISneakersContext = {
  sneakers: [],
  cartItems: [],
  favorites: [],
  showCase: '/',
  isLoading: false,
  isLoadingFavorite: false,
  cartLoading: false,
  mobileMenuOpened: false,
  cartOpened: false,
}

const AppContext = createContext<ISneakersContext>(defaultState)

export default AppContext
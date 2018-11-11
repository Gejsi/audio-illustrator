import { ReactNode } from 'react'

// All these types were written by Martin Hochel
// Check out his great article: https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64

type HasRenderProp<T> = T extends { render: (props: any) => ReactNode }
  ? T
  : never

type HasChildrenProp<T> = T extends { children: (props: any) => ReactNode }
  ? T
  : never

type IsFunction<T> = T extends (...args: any[]) => any ? T : never

const isFunction = <T extends {}>(value: T): value is IsFunction<T> =>
  typeof value === 'function'

export const hasRender = <T extends {}>(
  value: T
): value is HasRenderProp<T> =>
  'render' in value && isFunction((value as HasRenderProp<T>).render)

export const hasChildren = <T extends {}>(
  value: T
): value is HasChildrenProp<T> =>
  'children' in value && isFunction((value as HasChildrenProp<T>).children)

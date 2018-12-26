import { ReactNode } from 'react'

// All these types were written by Martin Hochel
// Check out his great article: https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64

export type HasRenderProp<T> = T extends { render: (props: any) => ReactNode }
  ? T
  : never

export type HasChildrenProp<T> = T extends {
  children: (props: any) => ReactNode
}
  ? T
  : never

export type IsFunction<T> = T extends (...args: any[]) => any ? T : never

export const isFunction = <T extends {}>(value: T): value is IsFunction<T> =>
  typeof value === 'function'

export const hasRender = <T extends {}>(value: T): value is HasRenderProp<T> =>
  'render' in value && isFunction((value as HasRenderProp<T>).render)

export const hasChildren = <T extends {}>(
  value: T
): value is HasChildrenProp<T> =>
  'children' in value && isFunction((value as HasChildrenProp<T>).children)

export const getAverage = (arr: Uint8Array, chunkSize: number): number[] => {
  // Divide array in chunks, e.g. [1, 2, 3, 4] => [1, 2] and [3, 4]
  const results: Uint8Array[] = new Array(Math.ceil(arr.length / chunkSize))
    .fill(0)
    .map((_, i) => arr.slice(chunkSize * i, chunkSize * i + chunkSize))

  // Get average from chunks
  return results.map(
    result => result.reduce((acc, cur) => acc + cur, 0) / result.length
  )
}

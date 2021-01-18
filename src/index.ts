/**
 * [[include:src/README.md]]
 *
 * @packageDocumentation
 * @module twind
 */

import { create } from './twind/instance'

const instance = create()

export const { tw } = instance
export const { setup } = instance

export { create }
export * from './twind/sheets'
export * from './twind/modes'
export * from './twind/prefix'
export { theme } from './twind/theme'
export { cyrb32 as hash } from './twind/util'

export * from './types'

/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
    adminLogin: typeof routes['auth.admin_login']
  }
  products: {
    store: typeof routes['products.store']
    index: typeof routes['products.index']
    show: typeof routes['products.show']
    update: typeof routes['products.update']
    destroy: typeof routes['products.destroy']
  }
}



import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare category: string

  @column()
  declare stock: number

  @column()
  declare description: string

  @column({
    prepare: (value) => JSON.stringify(value),
    consume: (value) => {
      try {
        return typeof value === 'string' ? JSON.parse(value) : value
      } catch {
        return []
      }
    },
  })
  declare images: string[]
}

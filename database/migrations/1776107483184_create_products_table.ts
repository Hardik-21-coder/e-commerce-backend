// import { BaseSchema } from '@adonisjs/lucid/schema'

// export default class CreateProductsTable extends BaseSchema {
//   protected tableName = 'products'

//   async up() {
//     this.schema.createTable(this.tableName, (table) => {
//       table.increments('id').primary()

//       table.string('name').notNullable()
//       table.integer('price').notNullable()

//       table.string('category').notNullable()
//       table.integer('stock').defaultTo(0)

//       table.text('description')

//       // JSON for images array
//       table.json('images').nullable()

//       table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
//       table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
//     })
//   }

//   async down() {
//     this.schema.dropTable(this.tableName)
//   }
// }


import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateProductsTable extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('name').notNullable()
      table.integer('price').notNullable()

      table.string('category').notNullable()
      table.integer('stock').defaultTo(0)

      table.text('description').nullable()

      // images array (JSON)
      table.json('images').nullable()

      // timestamps (recommended way)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

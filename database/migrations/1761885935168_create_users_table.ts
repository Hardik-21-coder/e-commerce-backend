// import { BaseSchema } from '@adonisjs/lucid/schema'

// export default class extends BaseSchema {
//   protected tableName = 'users'

//   async up() {
//     this.schema.createTable(this.tableName, (table) => {
//       table.increments('id').notNullable()

//       table.string('name').notNullable()   // 🔥 FIXED

//       table.string('email', 254).notNullable().unique()
//       table.string('password').notNullable()

//       table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
//       table.timestamp('updated_at', { useTz: true }).nullable()
//     })
//   }

//   async down() {
//     this.schema.dropTable(this.tableName)
//   }
// }

// import { BaseSchema } from '@adonisjs/lucid/schema'

// export default class extends BaseSchema {
//   protected tableName = 'users'

//   async up() {
//     this.schema.createTable(this.tableName, (table) => {
//       table.increments('id')
//       table.string('name') // 🔥 IMPORTANT
//       table.string('email').notNullable().unique()
//       table.string('password').notNullable()

//       table.timestamp('created_at').defaultTo(this.now())
//       table.timestamp('updated_at').nullable()
//     })
//   }

//   async down() {
//     this.schema.dropTable(this.tableName)
//   }
// }

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name') // user name
      table.string('email').notNullable().unique()
      table.string('password').notNullable()

      table.string('role').defaultTo('user') // 🔥 IMPORTANT (admin/user)

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

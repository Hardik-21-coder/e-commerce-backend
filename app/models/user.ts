import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import type { AccessToken } from '@adonisjs/auth/access_tokens'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  currentAccessToken?: AccessToken

  static accessTokens = DbAccessTokensProvider.forModel(User)

  static async verifyCredentials(email: string, password: string) {
    const user = await this.findBy('email', email)

    if (!user) {
      throw new Error('User not found')
    }

    const isValid = await hash.verify(user.password, password)

    if (!isValid) {
      throw new Error('Invalid password')
    }

    return user
  }

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}

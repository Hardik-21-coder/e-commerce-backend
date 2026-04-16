import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AdminUserSeeder extends BaseSeeder {
  public async run() {
    const existingAdmin = await User.findBy('email', 'admin123@gmail.com')

    if (!existingAdmin) {
      await User.create({
        name: 'Admin',
        email: 'admin123@gmail.com',
        password: await hash.make('123456'),
        role: 'admin',
      })

      console.log('✅ Admin user created')
    } else {
      console.log('ℹ️ Admin already exists')
    }
  }
}

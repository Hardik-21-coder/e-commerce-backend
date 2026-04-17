

  import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {


  async register({ request, response }: HttpContext) {
    try {
      const { name, email, password } = request.only([
        'name',
        'email',
        'password',
      ])

      if (!name || !email || !password) {
        return response.badRequest({
          message: 'All fields required',
        })
      }

      const existingUser = await User.findBy('email', email)

      if (existingUser) {
        return response.badRequest({
          message: 'Email already exists',
        })
      }

      const user = await User.create({
        name,
        email,
        password: await hash.make(password),
        role: 'user',
      })

      return response.ok({
        success: true,
        message: 'User Registered Successfully',
        user,
      })
    } catch (error) {
      console.log("REGISTER ERROR:", error)

      return response.internalServerError({
        message: 'Something went wrong',
      })
    }
  }


  async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      if (!email || !password) {
        return response.badRequest({
          message: 'Email & Password required',
        })
      }

      const user = await User.findBy('email', email)

      if (!user) {
        return response.badRequest({
          message: 'User not found',
        })
      }

      const isMatch = await hash.verify(user.password, password)

      if (!isMatch) {
        return response.badRequest({
          message: 'Invalid password',
        })
      }

      return response.ok({
        success: true,
        message: 'Login Success',
        user,
      })
    } catch (error) {
      console.log("LOGIN ERROR:", error)

      return response.internalServerError({
        message: 'Something went wrong',
      })
    }
  }

  //  ADMIN LOGIN
  async adminLogin({ request, response }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      if (!email || !password) {
        return response.badRequest({
          message: 'Email & Password required',
        })
      }

      const user = await User.findBy('email', email)

      if (!user) {
        return response.badRequest({
          message: 'User not found',
        })
      }

      const isMatch = await hash.verify(user.password, password)

      if (!isMatch) {
        return response.badRequest({
          message: 'Invalid password',
        })
      }

      if (user.role !== 'admin') {
        return response.forbidden({
          message: 'Access Denied (Not Admin)',
        })
      }

      return response.ok({
        success: true,
        message: 'Admin Login Success',
        user,
      })
    } catch (error) {
      console.log("ADMIN LOGIN ERROR:", error)

      return response.internalServerError({
        message: 'Something went wrong',
      })
    }
  }
}

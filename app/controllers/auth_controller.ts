  // import User from '#models/user'
  // import hash from '@adonisjs/core/services/hash'

  // export default class AuthController {
  //   async register({ request, response }) {
  //     try {
  //       const { name, email, password } = request.only([
  //         'name',
  //         'email',
  //         'password',
  //       ])

  //       const existingUser = await User.findBy('email', email)

  //       if (existingUser) {
  //         return response.status(400).json({
  //           message: 'Email already exists',
  //         })
  //       }

  //       const user = await User.create({
  //         name,
  //         email,
  //         password: await hash.make(password),
  //       })

  //       return response.json({
  //         message: 'User Registered',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }
  // }

  // import User from '#models/user'
  // import hash from '@adonisjs/core/services/hash'

  // export default class AuthController {

  //   // ✅ REGISTER
  //   async register({ request, response }) {
  //     try {
  //       const { name, email, password } = request.only([
  //         'name',
  //         'email',
  //         'password',
  //       ])

  //       const existingUser = await User.findBy('email', email)

  //       if (existingUser) {
  //         return response.status(400).json({
  //           message: 'Email already exists',
  //         })
  //       }

  //       const user = await User.create({
  //         name, // 🔥 FIXED
  //         email,
  //         password: await hash.make(password),
  //       })

  //       return response.json({
  //         success: true,
  //         message: 'User Registered',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }

  //   // ✅ LOGIN
  //   async login({ request, response }) {
  //   try {
  //     const { email, password } = request.only(['email', 'password'])

  //     const user = await User.findBy('email', email)

  //     if (!user) {
  //       return response.status(400).json({
  //         message: 'User not found',
  //       })
  //     }

  //     const isMatch = await hash.verify(user.password, password)

  //     if (!isMatch) {
  //       return response.status(400).json({
  //         message: 'Invalid password',
  //       })
  //     }

  //     return response.json({
  //       message: 'Login success',
  //       user,
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     return response.status(500).json({
  //       message: 'Error',
  //     })
  //   }
  // }

  // import User from '#models/user'
  // import hash from '@adonisjs/core/services/hash'

  // export default class AuthController {

  //   // ✅ REGISTER
  //   async register({ request, response }) {
  //     try {
  //       const { name, email, password } = request.only([
  //         'name',
  //         'email',
  //         'password',
  //       ])

  //       const existingUser = await User.findBy('email', email)

  //       if (existingUser) {
  //         return response.status(400).json({
  //           message: 'Email already exists',
  //         })
  //       }

  //       const user = await User.create({
  //         name,
  //         email,
  //         password: await hash.make(password),
  //       })

  //       return response.json({
  //         success: true,
  //         message: 'User Registered',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }

  //   // ✅ LOGIN
  //   async login({ request, response }) {
  //     try {
  //       const { email, password } = request.only(['email', 'password'])

  //       const user = await User.findBy('email', email)

  //       if (!user) {
  //         return response.status(400).json({
  //           message: 'User not found',
  //         })
  //       }

  //       const isMatch = await hash.verify(user.password, password)

  //       if (!isMatch) {
  //         return response.status(400).json({
  //           message: 'Invalid password',
  //         })
  //       }

  //       return response.json({
  //         message: 'Login success',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }
  // }

  // import User from '#models/user'
  // import hash from '@adonisjs/core/services/hash'
  // import type { HttpContext } from '@adonisjs/core/http'

  // export default class AuthContro

  //   // ✅ REGISTER (user only)
  //   async register({ request, response }: HttpContext) {
  //     try {
  //       const { name, email, password } = request.only(['name', 'email', 'password'])

  //       const existingUser = await User.findBy('email', email)

  //       if (existingUser) {
  //         return response.status(400).json({
  //           message: 'Email already exists',
  //         })
  //       }

  //       const user = await User.create({
  //         name,
  //         email,
  //         password: await hash.make(password),
  //         role: "user" // 🔥 IMPORTANT
  //       })

  //       return response.json({
  //         success: true,
  //         message: 'User Registered',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }

  //   // ✅ NORMAL USER LOGIN
  //   async login({ request, response }) {
  //     try {
  //       const { email, password } = request.only(['email', 'password'])

  //       const user = await User.findBy('email', email)

  //       if (!user) {
  //         return response.status(400).json({
  //           message: 'User not found',
  //         })
  //       }

  //       const isMatch = await hash.verify(user.password, password)

  //       if (!isMatch) {
  //         return response.status(400).json({
  //           message: 'Invalid password',
  //         })
  //       }

  //       return response.json({
  //         message: 'Login success',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }

  //   // 🔥 ADMIN LOGIN (NEW)
  //   async adminLogin({ request, response }) {
  //     try {
  //       const { email, password } = request.only(['email', 'password'])

  //       const user = await User.findBy('email', email)

  //       if (!user) {
  //         return response.status(400).json({
  //           message: 'User not found',
  //         })
  //       }

  //       const isMatch = await hash.verify(user.password, password)

  //       if (!isMatch) {
  //         return response.status(400).json({
  //           message: 'Invalid password',
  //         })
  //       }

  //       // 🔥 MAIN ADMIN CHECK
  //       if (user.role !== "admin") {
  //         return response.status(403).json({
  //           message: 'Access Denied (Not Admin)',
  //         })
  //       }

  //       return response.json({
  //         message: 'Admin Login Success',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }
  // }

  // import User from '#models/user'
  // import hash from '@adonisjs/core/services/hash'
  // import type { HttpContext } from '@adonisjs/core/http'

  // export default class AuthController {
  //   // ✅ REGISTER (user only)
  //   async register({ request, response }: HttpContext) {
  //     try {
  //       const { name, email, password } = request.only(['name', 'email', 'password'])

  //       const existingUser = await User.findBy('email', email)

  //       if (existingUser) {
  //         return response.status(400).json({
  //           message: 'Email already exists',
  //         })
  //       }

  //       const user = await User.create({
  //         name,
  //         email,
  //         password: await hash.make(password),
  //         role: 'user',
  //       })

  //       return response.json({
  //         success: true,
  //         message: 'User Registered',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }

  //   // ✅ NORMAL USER LOGIN
  //   async login({ request, response }: HttpContext) {
  //     try {
  //       const { email, password } = request.only(['email', 'password'])

  //       const user = await User.findBy('email', email)

  //       if (!user) {
  //         return response.status(400).json({
  //           message: 'User not found',
  //         })
  //       }

  //       const isMatch = await hash.verify(user.password, password)

  //       if (!isMatch) {
  //         return response.status(400).json({
  //           message: 'Invalid password',
  //         })
  //       }

  //       return response.json({
  //         message: 'Login success',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }

  //   // 🔥 ADMIN LOGIN
  //   async adminLogin({ request, response }: HttpContext) {
  //     try {
  //       const { email, password } = request.only(['email', 'password'])

  //       const user = await User.findBy('email', email)

  //       if (!user) {
  //         return response.status(400).json({
  //           message: 'User not found',
  //         })
  //       }

  //       const isMatch = await hash.verify(user.password, password)

  //       if (!isMatch) {
  //         return response.status(400).json({
  //           message: 'Invalid password',
  //         })
  //       }

  //       // 🔥 ADMIN CHECK
  //       if (user.role !== 'admin') {
  //         return response.status(403).json({
  //           message: 'Access Denied (Not Admin)',
  //         })
  //       }

  //       return response.json({
  //         message: 'Admin Login Success',
  //         user,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       return response.status(500).json({
  //         message: 'Error',
  //       })
  //     }
  //   }
  // }


  import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {

  // ✅ REGISTER
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
        role: 'user', // ✅ default role
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

  // ✅ USER LOGIN
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

  // ✅ ADMIN LOGIN
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

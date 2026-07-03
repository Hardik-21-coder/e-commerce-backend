import fs from 'node:fs'
import path from 'node:path'
import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'

import User from '#models/user'
import AuthController from '#controllers/auth_controller'
import ProductsController from '#controllers/products_controller'

// ========================
// SERVER CHECK
// ========================
router.get('/', async () => {
  return {
    message: 'Server Running ✅',
  }
})

// ========================
// IMAGE ROUTE
// ========================
// router.get('/uploads/*', async ({ params, response }) => {
//   try {
//     const filePath = params['*'].join('/')

//     const uploadPath = app.makePath('uploads')
//     const absolutePath = path.join(uploadPath, filePath)

//     console.log('==========================')
//     console.log('Current Working Dir :', process.cwd())
//     console.log('Uploads Folder      :', uploadPath)
//     console.log('Requested File      :', filePath)
//     console.log('Absolute Path       :', absolutePath)
//     console.log('File Exists         :', fs.existsSync(absolutePath))
//     console.log('==========================')

//     if (!fs.existsSync(absolutePath)) {
//       return response.status(404).json({
//         success: false,
//         message: 'Image not found ❌',
//         path: absolutePath,
//       })
//     }

//     response.type(path.extname(filePath))

//     return response.stream(fs.createReadStream(absolutePath))
//   } catch (error) {
//     console.log(error)

//     return response.status(500).json({
//       success: false,
//       message: 'Server Error',
//     })
//   }
// })

// ========================
// AUTH ROUTES
// ========================
router.group(() => {
  router.post('/register', [AuthController, 'register'])
  router.post('/login', [AuthController, 'login'])
  router.post('/admin/login', [AuthController, 'adminLogin'])
}).prefix('/auth')

// ========================
// USERS
// ========================
router.get('/users', async () => {
  return await User.query().select('id', 'name', 'email', 'role')
})

// ========================
// PRODUCTS
// ========================
router.group(() => {
  router.post('/', [ProductsController, 'store'])
  router.get('/', [ProductsController, 'index'])
  router.get('/:id', [ProductsController, 'show'])
  router.put('/:id', [ProductsController, 'update'])
  router.delete('/:id', [ProductsController, 'destroy'])
}).prefix('/products')

// ========================
// DELETE USER
// ========================
router.delete('/users/:id', async ({ params, response }) => {
  try {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return {
      success: true,
      message: 'User deleted ✅',
    }
  } catch {
    return response.status(404).json({
      success: false,
      message: 'User not found ❌',
    })
  }
})

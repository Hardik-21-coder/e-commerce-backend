// // // import router from '@adonisjs/core/services/router'
// // // //import AuthController from '#controllers/auth_controller'
// // // import User from '#models/user'
// // // import AuthController from '#controllers/auth_controller'

// // // // basic check route
// // // router.get('/', async () => {
// // //   return {
// // //     message: 'Server Running ✅',
// // //   }
// // // })

// // // // auth routes (clean structure)
// // // router.group(() => {
// // //   router.post('/register', [AuthController, 'register'])
// // //   router.post('/login', [AuthController, 'login'])
// // //   router.post('/admin/login', [AuthController, 'adminLogin'])
// // // }).prefix('/auth')

// // // // users list (testing)
// // // router.get('/users', async () => {
// // //   return await User.query().select('id', 'name', 'email', 'role')
// // // })

// // // import router from '@adonisjs/core/services/router'
// // // import User from '#models/user'
// // // import AuthController from '#controllers/auth_controller'

// // // // test route
// // // router.get('/', async () => {
// // //   return { message: 'Server Running ✅' }
// // // })

// // // // auth routes
// // // router.group(() => {
// // //   router.post('/register', [AuthController, 'register'])
// // //   router.post('/login', [AuthController, 'login'])
// // //   router.post('/admin/login', [AuthController, 'adminLogin'])
// // // }).prefix('/auth')

// // // // users list
// // // router.get('/users', async () => {
// // //   return await User.query().select('id', 'name', 'email', 'role')
// // // })

// // import router from '@adonisjs/core/services/router'
// // import User from '#models/user'
// // import AuthController from '#controllers/auth_controller'
// // import ProductsController from '#controllers/products_controller' // 👈 ADD THIS

// // // test route
// // router.get('/', async () => {
// //   return { message: 'Server Running ✅' }
// // })

// // // auth routes
// // router.group(() => {
// //   router.post('/register', [AuthController, 'register'])
// //   router.post('/login', [AuthController, 'login'])
// //   router.post('/admin/login', [AuthController, 'adminLogin'])
// // }).prefix('/auth')

// // // users list
// // router.get('/users', async () => {
// //   return await User.query().select('id', 'name', 'email', 'role')
// // })

// // // ✅ PRODUCT ROUTES
// // router.group(() => {
// //   router.post('/', [ProductsController, 'store']) // 👉 POST /products
// // }).prefix('/products')

// import Product from '#models/product'
// import type { HttpContext } from '@adonisjs/core/http'

// export default class ProductsController {

//   // ✅ CREATE PRODUCT
//   async store({ request, response }: HttpContext) {
//     try {
//       const { name, price, category, stock, description, images } =
//         request.only(['name', 'price', 'category', 'stock', 'description', 'images'])

//       if (!name || !price || !category) {
//         return response.badRequest({
//           message: 'Required fields missing',
//         })
//       }

//       const product = await Product.create({
//         name,
//         price,
//         category,
//         stock,
//         description,
//         images,
//       })

//       return response.ok({
//         success: true,
//         message: 'Product Added Successfully',
//         product,
//       })

//     } catch (error) {
//       console.log("PRODUCT ERROR:", error)

//       return response.internalServerError({
//         message: 'Something went wrong',
//       })
//     }
//   }

//   // ✅ GET ALL PRODUCTS 🔥 (IMPORTANT)
//   async index({ response }: HttpContext) {
//     try {
//       const products = await Product.all()

//       return response.ok({
//         success: true,
//         products,
//       })
//     } catch (error) {
//       console.log("FETCH ERROR:", error)

//       return response.internalServerError({
//         message: 'Something went wrong',
//       })
//     }
//   }
// }/



// import router from '@adonisjs/core/services/router'
// import User from '#models/user'
// import AuthController from '#controllers/auth_controller'
// import ProductsController from '#controllers/products_controller'

// // test route
// router.get('/', async () => {
//   return { message: 'Server Running ✅' }
// })

// // auth routes
// router.group(() => {
//   router.post('/register', [AuthController, 'register'])
//   router.post('/login', [AuthController, 'login'])
//   router.post('/admin/login', [AuthController, 'adminLogin'])
// }).prefix('/auth')

// // users
// router.get('/users', async () => {
//   return await User.query().select('id', 'name', 'email', 'role')
// })

// // ✅ PRODUCT ROUTES
// router.group(() => {
//   router.post('/', [ProductsController, 'store'])
//   router.get('/', [ProductsController, 'index']) // 👈 MUST
// }).prefix('/products')



// import router from '@adonisjs/core/services/router'
// import User from '#models/user'
// import AuthController from '#controllers/auth_controller'
// import ProductsController from '#controllers/products_controller'

// // server check
// router.get('/', async () => {
//   return { message: 'Server Running ✅' }
// })

// // auth routes
// router.group(() => {
//   router.post('/register', [AuthController, 'register'])
//   router.post('/login', [AuthController, 'login'])
//   router.post('/admin/login', [AuthController, 'adminLogin'])
// }).prefix('/auth')

// // users list
// router.get('/users', async () => {
//   return await User.query().select('id', 'name', 'email', 'role')
// })

// // product routes
// router.group(() => {
//   router.post('/', [ProductsController, 'store'])
//   router.get('/', [ProductsController, 'index'])
//   router.get('/:id', [ProductsController, 'show'])
//   router.put('/:id', [ProductsController, 'update'])
//   router.delete('/:id', [ProductsController, 'destroy'])
// }).prefix('/products')


import router from '@adonisjs/core/services/router'
import Application from '@adonisjs/core/services/app'
import User from '#models/user'
import AuthController from '#controllers/auth_controller'
import ProductsController from '#controllers/products_controller'

// ================= SERVER CHECK =================
router.get('/', async () => {
  return { message: 'Server Running ✅' }
})

// ================= ✅ IMAGE SERVE ROUTE =================
// browser ma open thai shake:
// http://localhost:3333/uploads/filename.jpg
// router.get('/uploads/*', async ({ request, response }) => {
//   try {
//     const filePath = request.param('*').join('/')

//     return response.download(
//       Application.publicPath(`uploads/${filePath}`)
//     )
//   } catch (error) {
//     return response.status(404).json({
//       message: 'Image not found ❌',
//     })
//   }
// })

router.get('/uploads/*', async ({ params, response }) => {
  try {
    const filePath = params['*'].join('/')

    return response.download(
      Application.publicPath(`../uploads/${filePath}`)
    )
  } catch (error) {
    return response.status(404).json({
      message: 'Image not found ❌',
    })
  }
})
// ================= AUTH ROUTES =================
router.group(() => {
  router.post('/register', [AuthController, 'register'])
  router.post('/login', [AuthController, 'login'])
  router.post('/admin/login', [AuthController, 'adminLogin'])
}).prefix('/auth')

// ================= USERS =================
router.get('/users', async () => {
  return await User.query().select('id', 'name', 'email', 'role')
})

// ================= PRODUCTS =================
router.group(() => {
  router.post('/', [ProductsController, 'store'])
  router.get('/', [ProductsController, 'index'])
  router.get('/:id', [ProductsController, 'show'])
  router.put('/:id', [ProductsController, 'update'])
  router.delete('/:id', [ProductsController, 'destroy'])
}).prefix('/products')

router.delete('/users/:id', async ({ params, response }) => {
  try {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return { message: 'User deleted ✅' }
  } catch (error) {
    return response.status(404).json({
      message: 'User not found ❌',
    })
  }
})

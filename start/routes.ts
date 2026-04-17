
import router from '@adonisjs/core/services/router'
import Application from '@adonisjs/core/services/app'
import User from '#models/user'
import AuthController from '#controllers/auth_controller'
import ProductsController from '#controllers/products_controller'

// SERVER CHECK
router.get('/', async () => {
  return { message: 'Server Running ✅' }
})


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
// AUTH ROUTES
router.group(() => {
  router.post('/register', [AuthController, 'register'])
  router.post('/login', [AuthController, 'login'])
  router.post('/admin/login', [AuthController, 'adminLogin'])
}).prefix('/auth')

//  USERS
router.get('/users', async () => {
  return await User.query().select('id', 'name', 'email', 'role')
})

//  PRODUCTS
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

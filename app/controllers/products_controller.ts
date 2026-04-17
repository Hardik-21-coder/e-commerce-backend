import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {

  // CREATE PRODUCT
  async store({ request, response }: HttpContext) {
    try {
      const data = request.only([
        'name',
        'price',
        'category',
        'stock',
        'description',
      ])

      const images = request.files('images')

      const imageNames: string[] = []

      if (images && images.length) {
        for (const img of images) {
          await img.move('uploads')
          imageNames.push(img.fileName || img.clientName)
        }
      }

      const product = await Product.create({
        ...data,
        images: imageNames,
      })

      return response.ok({
        success: true,
        product,
      })

    } catch (error) {
      console.log("STORE ERROR:", error)

      return response.internalServerError({
        success: false,
        message: error.message,
      })
    }
  }

  // GET ALL PRODUCTS
  async index({ response }: HttpContext) {
    try {
      const products = await Product.all()

      return response.ok({
        success: true,
        products,
      })

    } catch (error) {
      console.log("INDEX ERROR:", error)

      return response.internalServerError({
        success: false,
        message: error.message,
      })
    }
  }

  // GET SINGLE
  async show({ params, response }: HttpContext) {
    try {
      const product = await Product.find(params.id)

      if (!product) {
        return response.notFound({
          success: false,
          message: 'Product not found',
        })
      }

      return response.ok({
        success: true,
        product,
      })

    } catch (error) {
      return response.internalServerError({
        success: false,
        message: error.message,
      })
    }
  }

  // UPDATE
  async update({ params, request, response }: HttpContext) {
    try {
      const product = await Product.find(params.id)

      if (!product) {
        return response.notFound({
          success: false,
          message: 'Product not found',
        })
      }

      product.merge(request.only([
        'name',
        'price',
        'category',
        'stock',
        'description',
      ]))

      await product.save()

      return response.ok({
        success: true,
        product,
      })

    } catch (error) {
      return response.internalServerError({
        success: false,
        message: error.message,
      })
    }
  }

  // DELETE
  async destroy({ params, response }: HttpContext) {
    try {
      const product = await Product.find(params.id)

      if (!product) {
        return response.notFound({
          success: false,
          message: 'Product not found',
        })
      }

      await product.delete()

      return response.ok({
        success: true,
        message: 'Deleted successfully',
      })

    } catch (error) {
      return response.internalServerError({
        success: false,
        message: error.message,
      })
    }
  }
}

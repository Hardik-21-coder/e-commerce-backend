import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'
import cloudinary from '#config/cloudinary'

export default class ProductsController {

  // CREATE PRODUCT (CLOUDINARY FIXED)
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

    console.log("===================================")
    console.log("Files Received:", images?.length)

    const imageUrls: string[] = []

    if (images && images.length > 0) {
      for (const img of images) {

        console.log("Image Name:", img.clientName)
        console.log("Image TmpPath:", img.tmpPath)

        if (!img.tmpPath) {
          console.log("TmpPath Not Found")
          continue
        }

        try {
          const result = await cloudinary.uploader.upload(img.tmpPath, {
            folder: "products",
          })

          console.log("Cloudinary Result:")
          console.log(result)

          console.log("Secure URL:")
          console.log(result.secure_url)

          imageUrls.push(result.secure_url)

        } catch (err) {
          console.log("Cloudinary Upload Error:")
          console.log(err)
        }
      }
    }

    console.log("Final Image URLs:")
    console.log(imageUrls)

    if (imageUrls.length === 0) {
      imageUrls.push("https://via.placeholder.com/300")
    }

    console.log("Saving Product...")

    const product = await Product.create({
      ...data,
      images: imageUrls,
    })

    console.log("Saved Product:")
    console.log(product)

    return response.ok({
      success: true,
      product,
    })

  } catch (error) {
    console.log("STORE ERROR:")
    console.log(error)

    return response.internalServerError({
      success: false,
      message: error.message,

    })

  }
}

  // GET ALL PRODUCTS
  async index({ response }: HttpContext) {
    const products = await Product.all()

    return response.ok({
      success: true,
      products,
    })
  }

  // GET SINGLE PRODUCT
  async show({ params, response }: HttpContext) {
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
  }

  // UPDATE PRODUCT
  async update({ params, request, response }: HttpContext) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.notFound({
        success: false,
        message: 'Product not found',
      })
    }

    product.merge(
      request.only([
        'name',
        'price',
        'category',
        'stock',
        'description',
      ])
    )

    await product.save()

    return response.ok({
      success: true,
      product,
    })
  }

  // DELETE PRODUCT
  async destroy({ params, response }: HttpContext) {
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
  }
}

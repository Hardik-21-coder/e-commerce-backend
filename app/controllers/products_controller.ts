// // // // import Product from '#models/product'
// // // // import type { HttpContext } from '@adonisjs/core/http'

// // // // export default class ProductsController {

// // // //   // ✅ CREATE PRODUCT
// // // //   async store({ request, response }: HttpContext) {
// // // //     try {
// // // //       const { name, price, category, stock, description, images } =
// // // //         request.only(['name', 'price', 'category', 'stock', 'description', 'images'])

// // // //       if (!name || !price || !category) {
// // // //         return response.badRequest({
// // // //           message: 'Required fields missing',
// // // //         })
// // // //       }

// // // //       const product = await Product.create({
// // // //         name,
// // // //         price,
// // // //         category,
// // // //         stock,
// // // //         description,
// // // //         images,
// // // //       })

// // // //       return response.ok({
// // // //         success: true,
// // // //         message: 'Product Added Successfully',
// // // //         product,
// // // //       })

// // // //     } catch (error) {
// // // //       console.log("PRODUCT ERROR:", error)

// // // //       return response.internalServerError({
// // // //         message: 'Something went wrong',
// // // //       })
// // // //     }
// // // //   }
// // // // }

// // // import Product from '#models/product'
// // // import type { HttpContext } from '@adonisjs/core/http'

// // // export default class ProductsController {

// // //   async store({ request, response }: HttpContext) {
// // //     const { name, price, category, stock, description, images } =
// // //       request.only(['name', 'price', 'category', 'stock', 'description', 'images'])

// // //     const product = await Product.create({
// // //       name,
// // //       price,
// // //       category,
// // //       stock,
// // //       description,
// // //       images,
// // //     })

// // //     return response.ok({
// // //       success: true,
// // //       product,
// // //     })
// // //   }

// // //   async index({ response }: HttpContext) {
// // //     const products = await Product.all()

// // //     return response.ok({
// // //       success: true,
// // //       products: products.map(p => p.serialize()), // 🔥 IMPORTANT
// // //     })
// // //   }
// // // }



// // // import Product from '#models/product'
// // // import type { HttpContext } from '@adonisjs/core/http'

// // // export default class ProductsController {

// // //   // CREATE PRODUCT
// // //   async store({ request, response }: HttpContext) {
// // //     try {
// // //       const data = request.only([
// // //         'name',
// // //         'price',
// // //         'category',
// // //         'stock',
// // //         'description',
// // //         'images',
// // //       ])

// // //       if (!data.name || !data.price || !data.category) {
// // //         return response.badRequest({
// // //           success: false,
// // //           message: 'Required fields missing',
// // //         })
// // //       }

// // //       const product = await Product.create(data)

// // //       return response.ok({
// // //         success: true,
// // //         message: 'Product created successfully',
// // //         product,
// // //       })
// // //     } catch (error) {
// // //       console.log('CREATE PRODUCT ERROR:', error)

// // //       return response.internalServerError({
// // //         success: false,
// // //         message: 'Something went wrong',
// // //       })
// // //     }
// // //   }

// // //   // GET ALL PRODUCTS
// // //   async index({ response }: HttpContext) {
// // //     try {
// // //       const products = await Product.all()

// // //       return response.ok({
// // //         success: true,
// // //         products: products.map((p) => p.serialize()),
// // //       })
// // //     } catch (error) {
// // //       console.log('GET PRODUCTS ERROR:', error)

// // //       return response.internalServerError({
// // //         success: false,
// // //         message: 'Unable to fetch products',
// // //       })
// // //     }
// // //   }

// // //   // GET SINGLE PRODUCT
// // //   async show({ params, response }: HttpContext) {
// // //     try {
// // //       const product = await Product.find(params.id)

// // //       if (!product) {
// // //         return response.notFound({
// // //           success: false,
// // //           message: 'Product not found',
// // //         })
// // //       }

// // //       return response.ok({
// // //         success: true,
// // //         product: product.serialize(),
// // //       })
// // //     } catch (error) {
// // //       return response.internalServerError({
// // //         success: false,
// // //         message: 'Error fetching product',
// // //       })
// // //     }
// // //   }

// // //   // UPDATE PRODUCT
// // //   async update({ params, request, response }: HttpContext) {
// // //     try {
// // //       const product = await Product.find(params.id)

// // //       if (!product) {
// // //         return response.notFound({
// // //           success: false,
// // //           message: 'Product not found',
// // //         })
// // //       }

// // //       product.merge(request.only([
// // //         'name',
// // //         'price',
// // //         'category',
// // //         'stock',
// // //         'description',
// // //         'images',
// // //       ]))

// // //       await product.save()

// // //       return response.ok({
// // //         success: true,
// // //         message: 'Product updated successfully',
// // //         product: product.serialize(),
// // //       })
// // //     } catch (error) {
// // //       return response.internalServerError({
// // //         success: false,
// // //         message: 'Update failed',
// // //       })
// // //     }
// // //   }

// // //   // DELETE PRODUCT
// // //   async destroy({ params, response }: HttpContext) {
// // //     try {
// // //       const product = await Product.find(params.id)

// // //       if (!product) {
// // //         return response.notFound({
// // //           success: false,
// // //           message: 'Product not found',
// // //         })
// // //       }

// // //       await product.delete()

// // //       return response.ok({
// // //         success: true,
// // //         message: 'Product deleted successfully',
// // //       })
// // //     } catch (error) {
// // //       return response.internalServerError({
// // //         success: false,
// // //         message: 'Delete failed',
// // //       })
// // //     }
// // //   }
// // // }

// // //import Product from '#models/product
// // //

// // import Product from '#models/product'
// // import type { HttpContext } from '@adonisjs/core/http'

// // export default class ProductsController {

// //   // CREATE PRODUCT
// //   async store({ request, response }: HttpContext) {
// //     try {
// //       // text fields
// //       const data = request.only([
// //         'name',
// //         'price',
// //         'category',
// //         'stock',
// //         'description',
// //       ])

// //       // validation
// //       if (!data.name || !data.price || !data.category) {
// //         return response.badRequest({
// //           success: false,
// //           message: 'Required fields missing',
// //         })
// //       }

// //       // files
// //       const images = request.files('images')

// //       const imageNames: string[] = []

// //       if (images && images.length) {
// //         for (let img of images) {
// //           await img.move('uploads')
// //           imageNames.push(img.fileName || img.clientName)
// //         }
// //       }

// //       // save product
// //       const product = await Product.create({
// //         ...data,
// //         images: imageNames,
// //       })

// //       return response.ok({
// //         success: true,
// //         message: 'Product created successfully',
// //         product,
// //       })

// //     } catch (error) {
// //       console.log('STORE ERROR:', error)

// //       return response.internalServerError({
// //         success: false,
// //         message: 'Upload failed',
// //       })
// //     }
// //   }

// //   // GET ALL
// //   async index({ response }: HttpContext) {
// //     try {
// //       const products = await Product.all()

// //       return response.ok({
// //         success: true,
// //         products,
// //       })
// //     } catch (error) {
// //       console.log(error)

// //       return response.internalServerError({
// //         success: false,
// //         message: 'Unable to fetch products',
// //       })
// //     }
// //   }

// //   // GET ONE
// //   async show({ params, response }: HttpContext) {
// //     try {
// //       const product = await Product.find(params.id)

// //       if (!product) {
// //         return response.notFound({
// //           success: false,
// //           message: 'Product not found',
// //         })
// //       }

// //       return response.ok({
// //         success: true,
// //         product,
// //       })
// //     } catch (error) {
// //       return response.internalServerError({
// //         success: false,
// //         message: 'Error fetching product',
// //       })
// //     }
// //   }

// //   // UPDATE
// //   async update({ params, request, response }: HttpContext) {
// //     try {
// //       const product = await Product.find(params.id)

// //       if (!product) {
// //         return response.notFound({
// //           success: false,
// //           message: 'Product not found',
// //         })
// //       }

// //       product.merge(request.only([
// //         'name',
// //         'price',
// //         'category',
// //         'stock',
// //         'description',
// //         'images',
// //       ]))

// //       await product.save()

// //       return response.ok({
// //         success: true,
// //         message: 'Updated successfully',
// //         product,
// //       })

// //     } catch (error) {
// //       return response.internalServerError({
// //         success: false,
// //         message: 'Update failed',
// //       })
// //     }
// //   }

// //   // DELETE
// //   async destroy({ params, response }: HttpContext) {
// //     try {
// //       const product = await Product.find(params.id)

// //       if (!product) {
// //         return response.notFound({
// //           success: false,
// //           message: 'Product not found',
// //         })
// //       }

// //       await product.delete()

// //       return response.ok({
// //         success: true,
// //         message: 'Deleted successfully',
// //       })

// //     } catch (error) {
// //       return response.internalServerError({
// //         success: false,
// //         message: 'Delete failed',
// //       })
// //     }
// //   }
// // }


// import Product from '#models/product'
// import type { HttpContext } from '@adonisjs/core/http'

// export default class ProductsController {

//   // CREATE PRODUCT
//   async store({ request, response }: HttpContext) {
//     try {
//       const data = request.only([
//         'name',
//         'price',
//         'category',
//         'stock',
//         'description',
//       ])

//       const images = request.files('images')

//       const imageNames: string[] = []

//       if (images && images.length) {
//         for (const img of images) {
//           await img.move('uploads')
//           imageNames.push(img.fileName || img.clientName)
//         }
//       }

//       const product = await Product.create({
//         ...data,
//         images: imageNames,
//       })

//       return response.ok({
//         success: true,
//         product,
//       })

//     } catch (error) {
//       console.log("STORE ERROR:", error)

//       return response.internalServerError({
//         success: false,
//         message: error.message,
//       })
//     }
//   }

//   // GET ALL PRODUCTS
//   async index({ response }: HttpContext) {
//     try {
//       const products = await Product.all()

//       return response.ok({
//         success: true,
//         products,
//       })

//     } catch (error) {
//       console.log("INDEX ERROR:", error)

//       return response.internalServerError({
//         success: false,
//         message: error.message,
//       })
//     }
//   }
// }


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
        images: JSON.stringify(imageNames), // ✅ FIXED
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

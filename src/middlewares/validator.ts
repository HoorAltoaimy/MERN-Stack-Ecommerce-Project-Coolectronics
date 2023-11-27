import { check } from 'express-validator'

import { Users } from '../models/user'
import { Product } from '../models/productSchema'

export const validateuser = [
  check('userName')
    .notEmpty()
    .withMessage('Username must not be empty')
    .custom(async (value: string) => {
      if (value.includes(' ')) {
        throw new Error('Username must not contain spaces')
      }
      // Check if the username is already in use
      const existingUser = await Users.findOne({ userName: value })
      if (existingUser) {
        throw new Error('Username is already in use')
      }

      return true
    }),
  check('name').optional().notEmpty().withMessage('Name is required'),
  check('isAdmin').optional().isBoolean().withMessage('isAdmin must be a boolean'),
  check('isBan').optional().isBoolean().withMessage('isBan must be a boolean'),
]
export const validateIdProduct = [check('id').isNumeric().withMessage('id must be a number')]

export const validateProduct = [
  check('name')
    .notEmpty()
    .withMessage('Product name is required')
    .custom(async (value: string) => {
      // Check if the product is already in use
      const existingProduct = await Product.findOne({ name: value })
      if (existingProduct) {
        throw new Error('There is already product with the same name')
      }

      return true
    }),
  check('price').notEmpty().withMessage('Price is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('quantity').notEmpty().withMessage('Quantity is required'),
  check('shipping').notEmpty().withMessage('Shipping is required'),
]

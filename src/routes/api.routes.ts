import { Router } from 'express';

import { BookController } from '../controller/book.controller';
import { UserController } from '../controller/user.controller';
import { OrderController } from '../controller/order.controller';

const router = Router();
const userController = new UserController();
const orderController = new OrderController();
const bookController = new BookController();

/**
 * @openapi
 * paths:
 *   /api/login:
 *     post:
 *       tags:
 *         - User
 *       summary: Login
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   description: The user's username.
 *                 password:
 *                   type: string
 *                   description: The user's password.
 *     response:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              items:
 *                $ref: '#/components/schemas/CreateUserInput'
 */
router.post('/login', userController.loginController);

/**
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - User
 *     summary: List users
 *     response:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CreateUserInput'
 */
router.get('/users', userController.listUsersController);
/**
 * @openapi
 * '/api/users/:id':
 *  get:
 *     tags:
 *     - User
 *     summary: user detail
 *     response:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              items:
 *                $ref: '#/components/schemas/CreateUserInput'
 */
router.get('/users/:id', userController.userDetailController);
 /**
   * @openapi
   * '/api/user':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post('/user', userController.registerUserController);

/**
 * @openapi
 * '/api/books':
 *  get:
 *     tags:
 *     - Book
 *     summary: List Books
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/BookSchema'
 */
router.get('/books', bookController.listBookController);
/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *     tags:
 *       - Book
 *     summary: Get a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the book to get
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookSchemaResponse'
 */
router.get('/books/:id', bookController.detailBookController);
/**
 * @openapi
 * '/api/book':
 *  post:
 *     tags:
 *     - Book
 *     summary: Create Book
 *     requestBody:
 *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/BookSchema'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              items:
 *                $ref: '#/components/schemas/BookSchema'
 */
router.post('/book', bookController.createBookController);

/**
 * @openapi
 * '/api/orders':
 *  get:
 *     tags:
 *     - Orders
 *     summary: List Orders
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/OrderSchemaResponse'
 */
router.get('/orders', orderController.listOrderController);
/**
 * @openapi
 * '/api/order':
 *  post:
 *     tags:
 *     - Orders
 *     summary: Create Order
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/OrderSchemaResponse'
 */
router.post('/order', orderController.createOrderController);
/**
 * @openapi
 * '/api/cancel-order':
 *  get:
 *     tags:
 *     - Orders
 *     summary: Cancel Order
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/OrderSchemaResponse'
 */
router.post('/cancel-order', orderController.cancelOrderController);
/**
 * @openapi
 * '/api/approve-order':
 *  get:
 *     tags:
 *     - Orders
 *     summary: Approve Order
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/OrderSchemaResponse'
 */
router.post('/approve-order', orderController.approveOrderController);

export default router;
const expess = require('express');
const router = expess.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multer');

// Middleware for overriding methods
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

router.get('/', productController.getAllProducts);
router.get('/create', productController.renderCreateForm);
router.post('/', upload.single('image'), productController.createProduct);
router.get('/:id', productController.getProductById);
router.get('/:id/edit', productController.renderEditForm);
router.put('/:id', upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;
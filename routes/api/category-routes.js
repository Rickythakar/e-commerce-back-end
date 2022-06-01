const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  console.log('This is GET /api/categories/');
  // find all categories
  const categoryData = await Category.findAll().catch((err) => {
      // be sure to include its associated Product data
    res.json(err);
  });
  res.json(categoryData);
  // res.sendStatus(200)
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  console.log('This is GET /api/categories/id');
  const categoryDataById = await Category.findOne({
      // be sure to include its associated Product data
    where: {
      id: req.params.id
    }
  })
    .catch((err) => {
      res.json(err);
    });
  res.json(categoryDataById);
  // res.sendStatus(200)
});


// create a new category
router.post('/', (req, res) => {
  console.log('This is POST /api/categories/');
  const createCategory = await Category.create().catch((err) => {
    res.json(err);
  });
  res.json(createCategory);
  // res.sendStatus(200)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
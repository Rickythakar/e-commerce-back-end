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
  res.status(200).json(categoryDataById);
});


// create a new category
router.post('/', (req, res) => {
  console.log('This is POST /api/categories/');
  Category.create(req.body).then((Category) => res.json(Category))
    .catch((err) => {
      res.json(err);
    });
});


router.put('/:id', (req, res) => {
  // Update a category by its category name or id
  console.log('This is PUT /api/categories/id');
  Category.update(
    { category_name: req.body.name },
    {
      where: {
        id: req.params.id
      }
    })
    .then((Category) => res.json(Category))
    // be sure to include its associated Product data
    .catch((err) => {
      res.json(err);
    });
  res.status(200).json(Category);
});



router.delete('/:id', (req, res) => {
  // Delete a category by its id
  console.log('This is DELETE /api/categories/id');
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((Category) => res.json(Category))
    // be sure to include its associated Product data
    .catch((err) => {
      res.json(err);
    });
  res.status(200).json(Category);
});


module.exports = router;
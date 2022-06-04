const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  console.log('This is GET /api/tag');
  const tagData = await Tag.findAll({
    // be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .catch((err) => {
      res.json(err);
    });
  res.status(200).json(tagData);
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  console.log('This is GET /api/tag/id');
  const tagData = Tag.findOne({
    // be sure to include its associated Tag data
    where: {
      id: req.params.id
    }
  })
    .catch((err) => {
      res.json(err);
    });
  res.status(200).json(tagData);
});

router.post('/', (req, res) => {
  // create a new tag
  //    {
  //   "tag_name": "test",
  //   "id": 1
  //   }
  console.log('This is POST /api/tag/');
  Tag.create(req.body).then((Tag) => res.json(Tag))
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // Update a category by its category name or id
  console.log('This is PUT /api/tag/id');
  Tag.update(
    { tag_name: req.body.name },
    {
      where: {
        id: req.params.id
      }
    })
    .then((Tag) => res.json(Tag))
    // be sure to include its associated Product data
    .catch((err) => {
      res.json(err);
    });
  res.status(200).json(Tag);
});


router.delete('/:id', (req, res) => {
  // Delete a tag by its id
  console.log('This is DELETE /api/tag/id');
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((Tag) => res.json(Tag))
    // be sure to include its associated Product data
    .catch((err) => {
      res.json(err);
    });
  res.status(200).json(Tag);
});

module.exports = router;
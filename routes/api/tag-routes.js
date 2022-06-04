const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  console.log('This is GET /api/tag');
  // find all tags
  const tagData = await Tag.findAll({
    // be sure to include its associated Product data
    include:{
      model: Product,
      attributes: ['product_name','price','stock','category_id' ]
    }
  })
  .catch((err) => {
    res.json(err);
  });
res.status(200).json(tagData);
});

router.get('/:id', (req, res) => {
  console.log('This is GET /api/tag/id');
  // find a single tag by its `id`
  const tagData = await Tag.findOne({
    // be sure to include its associated Product data
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
  console.log('This is POST /api/tag/');
  Tag.create(req.body).then((Tag) => res.json(Tag))
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // Update a category by its category name or id
  console.log('This is PUT /api/tag/id');
  Tag.update({
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
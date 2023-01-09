const getCategory = (req, res) => res.send(`Categoría con id ${req.params.id}`);

module.exports = getCategory;

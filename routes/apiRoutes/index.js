const router = require('express').Router();
const notesRoutes = require('./noteRoutes');

router.use(notesRoutes);
router.use(require('./noteRoutes'));

module.exports = router;
const router = require("express").Router();
const CardsController = require("../controllers/cardsController");

// Categories Endpoints
router.get('/', CardsController.getAllCards);
router.post('/', CardsController.createCard);
router.delete('/', CardsController.deleteCard);

module.exports = router;
const models = require("../../models")
const { successResponse, errorResponse } = require("../utils/response")
const sequelize = require("sequelize")
const {getBalance, getLastDigits} = require("../utils/helper")


module.exports = class CardsController {

    /**
     * This function will create categories in the database 
     * if categories already exist then it will do nothing 
     * if there are no categories in the system then it will create all the categories in the system for once
     *
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
     static async createCards() {

        try {
            const cards = await models.Card.findAll().catch(err => {
                return err;
            });

            if (cards.length === 0) {
            await models.Card.bulkCreate([
                { number: '5105105105105100', balance: '0' },
                { number: '4111111111111111', balance: '0'},
                { number: '4012888888881881', balance: '5'}
            ]).catch(err => {
                return err;
            })
            return true;
            }
            return false;

        } catch (err) {
            return err;
        }
    }

        /**
     * This Function will find all the categories
     * @param {object} req
     * @param {object} res
     * @param {function} next
     */
    static async getAllCards(req, res, next) {
        console.log('get')
        try {
            const cards = await models.Card.findAll({
                attributes: ['lastDigits', 'balance', 'id'],
                order: [
                    ['balance', 'DESC'],
                ]
            }).catch(err => {
                return res.json(errorResponse(404, "cards not found"))
            });

            return res.json(successResponse(200, "success", cards))
        } catch (err) {
            return res.json(errorResponse(400, "error getting cards", err))
        }
    }

    static async createCard(req, res, next) {

        let number = req.body.number
        if(number!= undefined && number!= null && number.length === 16){
            let balance = getBalance(number);
            let lastDigits = getLastDigits(number)
        
            try {
                const cards = await models.Card.create({
                    number: number, balance: balance, lastDigits: lastDigits
                }).catch(err => {
                    return res.json(errorResponse(404, "cards not found"))
                });
                return res.json(successResponse(200, "success", cards))
            } catch (err) {
                return res.json(errorResponse(400, "error getting cards", err))
            }
        }else{
            return res.json(errorResponse(400, "invalid card"))
        }
    }

    static async deleteCard(req, res, next) {

        console.log('delete')
        try {
            const cards = await models.Card.destroy({
                where: {
                    id: req.query.id
                }
            }).catch(err => {
                return res.json(errorResponse(404, "cards not found"))
            });
            
            return res.json(successResponse(200, "success", cards))
            
        } catch (err) {
            return res.json(errorResponse(400, "error getting cards", err))
        }
    }
    
}
const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

// GET

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch( err => {
            res.status(500).json(
                { message: 'Failed to retrieve cars'}
            );
        });
});
// working

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
        .where({ id })
        .first()
        .then(car => {
            res.status(200).json(car);
        })
        .catch( err => {
            res.status(500).json(
                { message: 'Failed to retrieve specified car'}
            );
        });
});
// working

// POST

router.post('/', (req, res) => {
    const carsData = res.body;

    db('cars').insert(carsData)
        .then(ids => {
            db('cars')
                .where( { id: ids[0] })
                .then(newCarsEntry => {
                    res.status(201).json(newCarsEntry);
                })
        })
        .catch( err => {
            res.status(500).json(
                { message: 'Failed to add data to table'}
            );
        });
});
// working


// PUT

router.put('/:id', (req, res) => {
    const body = req.body
    const { id } = req.params
    
    db('cars')
        .where( {id: id})
        .update(body)
        .then( count => {
            count > 0
            ? res.status(200).json(
                { message: 'Updated Successfully!'}
            )
            : res.status(404).json(
                { message: 'The specified ID could not be found'}
            )
        })
        .catch( err => {
            res.status(500).json(
                { message: 'The data could not be updated at this time'}
            )
        });

});


module.exports = router;
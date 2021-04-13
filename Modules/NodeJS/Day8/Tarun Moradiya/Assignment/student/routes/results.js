const router = require('express').Router()
const varifyToken = require('./varifyToken')

const results = [
    {
        studentId: 1,
        studentName: 'John Doe',
        result: {
            maths: 90,
            physics: 92,
            chemistry: 87
        }
    },
    {
        studentId: 2,
        studentName: 'anna Maria',
        result: {
            maths: 85,
            physics: 95,
            chemistry: 89
        }
    },
    {
        studentId: 1,
        studentName: 'Kevin Rogan',
        result: {
            maths: 85,
            physics: 90,
            chemistry: 95
        }
    }
]

router.get('/', varifyToken, (req, res) => {
    res.json(results)
})

module.exports = router
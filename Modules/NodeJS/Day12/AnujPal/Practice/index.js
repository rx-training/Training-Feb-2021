const mongoose = require('mongoose');
const courceSchema = new mongoose.Schema({

    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    tags: {
        type: Array,
        // validate:
        // {
        //     validator: function (v) {
        //         return v && v.length > 0
        //     },
        //     message: 'A tags should atleast one entry'
        // }

        validate: {
            async: true,
            validator: {
                function(v, callback) {
                    setTimeout(() => {
                        const result = v && v.length > 0
                    }, 4000);
                },
                message: 'A tags should atleast one entry'
                
            }
        }
    },
    date: { type: Date, default: Date.now },
    isPulished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPulished; }
    }
});

const Cource = mongoose.model('Cource', courceSchema)

async function createCource() {
    const cource = new Cource({
        author: 'Anuj',
        tags: ['A'],
        isPulished: true,
        price: 15
    })
    try {
        const a1 = cource.save();
    }
    catch (err) {
        for (const field in err.errors) {
       console.log(err.errors[field].message)
        }
    }
}

createCource();
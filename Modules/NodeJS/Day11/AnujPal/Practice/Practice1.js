const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("We are connected")
    }).catch((err) => {
        console.log("Error");
    });

const courceSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [10, 'Too sort length'], maxlength: [12, 'Too big length'] },
    author: String,
    tags: [String],
    data: { type: Date, default: Date.now },
    isPublished: Boolean

});
const Cource = mongoose.model('Corce', courceSchema);
async function createCource() {

    const cource = new Cource({
        name: 'Reactgfhxjcjhcjgjhj',
        author: 'An',
        tags: ['React', 'Frontend'],
        isPublished: true
    });
    try {
        const result = await cource.save();
        console.log(result);
    }
    catch (err) {
        for (const field in err.errors) {
            console.log(err.errors[field].message)
        }
    }

}
async function getCource() {

    const cources = await Cource.find();

    console.log(cources);
}

createCource();

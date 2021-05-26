const { string, date } = require('joi');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("We are connected")
    }).catch((err) => {
        console.log("Error");
    });

const courceSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    data: { type: Date, default: Date.now },
    isPublished: Boolean

});
const Cource = mongoose.model('Corce', courceSchema);

async function createCource() {

    const cource = new Cource({
        name: 'React Cource',
        author: 'Anuj',
        tags: ['React', 'Frontend'],
        isPublished: true
    });

    const result = await cource.save();
    console.log(result);
}


async function getCource() {
    const cources = await Cource.find({author : 'Anuj', isPublished : true})
                                .limit(10)
                                .sort({name : 1})
                                .select({name : 1 , tags : 1});
    console.log(cources);
}

getCource();




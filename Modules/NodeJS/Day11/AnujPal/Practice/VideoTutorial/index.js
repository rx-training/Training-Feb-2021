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
    const pagenumber=2;
    const pagesize=10;
    const cources = await Cource
        .find({ price: { $gte: 10, $lte: 20 } })  //returns the result set where cource price is in between 10$ and 20$.
         .find({ price: { $in: [10, 15, 20] } })   // returns the result set where cource price is 10$ or 15$ or 20$.
            .find()
            .or([{ author: 'mosh' }, { isPublished: 'true' }])  // returns result set where author is mosh or isPublished is true
            .and([{ author: 'mosh' }, { isPublished: 'true' }]) // returns result set where author is mosh and isPublished is true
            .find({ author: /^mosh/ })  //the author string contain Mosh at the begining
            .find({ author: /Hamedani$/i }) //the author string contain Hamedani at the end.
            .find({ author: /.*Mosh.*/i })  // the author string contain mosh anywhere
            .limit(pagesize);
            skip((pagenumber-1)*pagesize)
            .sort({ name: 1 }) // the result set is sorted by the name
            .select({ name: 1, tags: 1 });  //the result set contains only name and tags
            .count();  //counts the document in the result set.
    console.log(cources);
}

getCource();




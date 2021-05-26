// trade off between query performance vc consistency

// using References (normalization) => CONSISTENCY
let author = {
    name : 'Mosh Hamedani'
}

let course = {
    author : 'id'
}

//using embedded documents (denormalization) => PERFORMANCE
let course = {
    author : {
        name : 'Mosh Hamedani'
    }
}

//hybrid
let author = {
    name : 'Mosh'
    // 50 other properties
}

let course = {
    author : {
        id : 'ref',
        name : 'Mosh'
    }
}
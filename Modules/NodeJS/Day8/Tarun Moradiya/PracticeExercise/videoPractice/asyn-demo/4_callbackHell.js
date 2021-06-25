console.log('Before')

getUser(1, function(user) {

    //get repositories
    getRepositories(user.gitHubUserName, (repos) => {
        getCommits(repo, (commits) => {
            //CALLBACK HELL / CRISTMAS TREE PROBLEM

        })
    })
})

console.log('after')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...')
        callback({id: id, gitHubUserName: 'Tarun'})
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('calling an api..')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('calling an git api..')
        callback(['commit'])
    }, 2000);
}

//syncronous version looks cleaner

console.log('Before')
const user = getUser(1)
const repos = getRepositories(user.gitHubUserName)
const commits = getCommits(repos[0])
console.log('After')
console.log('Before')

getUser(1, function(user) {
    console.log('user', user)

    //get repositories
    getRepositories(user.gitHubUserName, repo => console.log(repo))
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
console.log('Before')

const user = getUser(1)

console.log(user)

console.log('after')

function getUser(id) {
    setTimeout(() => {
        console.log('Reading user from database...')
        // return {id: id, gitHubUserName: 'Tarun'}
    }, 2000);

    return {id: id, gitHubUserName: 'Tarun'}
}
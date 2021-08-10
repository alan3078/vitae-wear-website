import http from '../http-common'

const getAll = async () => {
    let users
    try {
        users = await http.get('/users')
    } catch (error) {
        console.error(error)
    }

    return users
}

export default {
    getAll
}

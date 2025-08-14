import person from '../model/person.js'

class PersonService {
    async saveUser(body) {
        const personModel = await person.create({
            name: body.name,
            document: body.document,
            state: body.state,
            city: body.city,
            token: body.token
        })
        return personModel
    }

    async getUserById(id) {
        let personModel = await person.findByPk(id)
        return personModel
    }

    async getUsers() {
        let personModel = await person.findAll({})
        return personModel
    }
}

export default PersonService
import person from '../model/person.js'

class PersonService {
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
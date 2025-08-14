import person from '../model/person.js'

class PersonService {
    async saveUser(body) {
        const personModel = await person.create({
            name: body.name,
            document: body.document,
            state: body.state,
            city: body.city,
            token: body.token
        });
        return personModel;
    }

    async getUserById(id) {
        const personModel = await person.findByPk(id);
        return personModel;
    }

    async getUsers() {
        const personModel = await person.findAll({});
        return personModel;
    }

    async deleteUserById(userId) {
        const deleteCount = await person.destroy({where: { id: userId }})
        return deleteCount
    }
}

export default PersonService;
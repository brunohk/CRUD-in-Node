import person from '../model/person.js'

class PersonService {
    async saveUser(body) {
        const personModel = await person.create({
            name:     body.name,
            document: body.document,
            state:    body.state,
            city:     body.city,
            token:    body.token
        });
        return personModel;
    }

    async getUserById(userId) {
        const personModel = await person.findByPk(userId);
        return personModel;
    }

    async getUsers() {
        const personModel = await person.findAll({});
        return personModel;
    }

    async deleteUserById(userId) {
        const deleteCount = await person.destroy({ where: { id: userId } });
        return deleteCount;
    }

    async updateUserById(body, userId) {
        const [userUpdatedCount, users] = await person.update(body, { where: { id: userId }, returning: true});
        return {userUpdatedCount: userUpdatedCount, user: users[0]};
    }
}

export default PersonService;
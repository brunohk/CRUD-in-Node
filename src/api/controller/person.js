class PersonController {
    constructor(personService) {
        this.personService = personService;
    }

    async saveUser(req) {
        const user = await this.personService.saveUser(req.body);
        return user;
    }

    async getUserById(req, _) {
        const userId = req.params.id;
        const user =  await this.personService.getUserById(userId);
        return user;
    }

    async getUsers(_, __) {
        const user =  await this.personService.getUsers();
        return user;
    }

    async deleteUserById(req) {
        const userId = req.params.id;
        const deleteCount = await this.personService.deleteUserById(userId);
        return deleteCount;
    }

    async updateUserById(req) {
        const userId = req.params.id;
        const body = req.body;
        return await this.personService.updateUserById(body, userId) 
    }
}

export default PersonController;
class PersonController {
    constructor(personService) {
        this.personService = personService
    }

    async getUserById(req, _) {
        const userId = req.params.id
        const user =  await this.personService.getUserById(userId)
        return user
    }

    async getUsers(_, __) {
        const user =  await this.personService.getUsers()
        return user
    }
}

export default PersonController
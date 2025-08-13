class PersonController {
    constructor(personService) {
        this.personService = personService
    }

    async getUserById(req, _) {
        const userId = req.params.id
        const user =  await this.personService.getUserById(userId)
        return user
    }
}

export default PersonController
import { response, Router } from 'express';

const usersRouter = Router()

usersRouter.get("/:id", (request, response) => {
    return response.send(console.log('olá mundo'))
})

export { usersRouter }
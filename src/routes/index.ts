import { Router } from 'express';
import { usersRouter } from './users.router'
import { gamesRouter } from './games.router'

const router = Router();

router.use("/users", usersRouter)
router.use("/games", gamesRouter)

export { router }
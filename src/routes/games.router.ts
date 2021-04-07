import { Router } from 'express';
import { FindUsersByGameIdController } from '../modules/games/useCase/findUsersByGameId/FindUsersByGameIdController'
import { FindByTitleContainingController } from '../modules/games/useCase/findByTitleContaining/FindByTitleContainingController'
import { CountAllGamesController } from '../modules/games/useCase/countAllGames/CountAllGamesController'

const findUsersByGameIdController = new FindUsersByGameIdController()
const findByTitleContainingController = new FindByTitleContainingController()
const countAllGamesController = new CountAllGamesController()

const gamesRouter = Router()

gamesRouter.get("/countGames", countAllGamesController.handle)
gamesRouter.get("/findByTitle", findByTitleContainingController.handle)
gamesRouter.get("/findUsersByGameId/:id", findUsersByGameIdController.handle)

export { gamesRouter }
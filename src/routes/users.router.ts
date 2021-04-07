import { Router } from 'express';
import { FindAllUsersOrderedByFirstNameController } from '../modules/users/useCase/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController';
import { FindUserWithGamesByIdController } from '../modules/users/useCase/findUserWithGamesById/FindUserWithGamesByIdController'
import { FindUserByFullNameController } from '../modules/users/useCase/findUserByFullName/FindUserByFullNameController'

const usersRouter = Router()

const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();
const findUserWithGamesByIdController = new FindUserWithGamesByIdController()
const findUserByFullNameController = new FindUserByFullNameController()

usersRouter.get("/userGame/:id", findUserWithGamesByIdController.handle)
usersRouter.get("/", findAllUsersOrderedByFirstNameController.handle)
usersRouter.get("/userByFullName", findUserByFullNameController.handle)

export { usersRouter }
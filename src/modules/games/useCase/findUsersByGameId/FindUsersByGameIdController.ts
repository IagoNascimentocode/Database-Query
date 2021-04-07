import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUsersByGameIdUseCase } from './FindUsersByGameIdUseCase';


class FindUsersByGameIdController {

    async handle(request: Request, response: Response) {
        const { game_id } = request.params

        const findUsersByGameIdUseCase = container.resolve(FindUsersByGameIdUseCase)

        const user = await findUsersByGameIdUseCase.execute(game_id)

        return response.json(user)
    }
}

export { FindUsersByGameIdController }
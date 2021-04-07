import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";


@injectable()
class CountAllGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) { }
    async execute() {
        const total = this.gamesRepository.countAllGames()

        return total
    }

}

export { CountAllGamesUseCase }
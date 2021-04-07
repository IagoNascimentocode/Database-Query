import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindByTitleContainingUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) { }

    async execute(title: string): Promise<Game[]> {
        const games = this.gamesRepository.findByTitleContaining(title)

        return games
    }


}
export { FindByTitleContainingUseCase }
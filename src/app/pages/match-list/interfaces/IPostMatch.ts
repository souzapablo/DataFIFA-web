import { IPlayer } from "src/app/shared/interfaces/IPlayer";

export interface IPostMatch {
    competition: number;
    opponentId: number;
    isHome: boolean;
    players: IPlayer[];
}
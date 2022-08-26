import { IGoal } from "./IGoal";

export interface IMatchDetails {
    competition: string;
    opponentName: string;
    opponentLogoUrl: string;
    teamName: string;
    teamLogoUrl: string;
    stadium: string;
    score: string;
    isHome: boolean;
    matchGoals: IGoal[];
    lineUp: string[];
}
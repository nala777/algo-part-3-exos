import { wall } from "../src/wall";

describe('wall', () => {
    it('return expected array', () => {
        let history = [
            "Mon premier message pikaface",
            "Si tu n'est pas un tueur de petit chaton tu dois partager ce message à tes amis",
            "Un autre message super intéressant !"
        ];

        expect(wall(history, "Hier, j'ai mangé une pomme !").length).toEqual(4);
    });
});
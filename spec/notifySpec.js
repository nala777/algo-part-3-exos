import { notify } from "../src/notify";

describe('notify', () => {
    it('return green with 3 messages', () => {
        let messages = [
            "Mon premier message pikaface",
            "Si tu n'est pas un tueur de petit chaton tu dois partager ce message à tes amis",
            "Un autre message super intéressant !"
        ];

        expect(notify(messages)).toEqual([3, 'green']);
    });

    it('return red with 6 messages', () => {
        let messages = [
            "Mon premier message pikaface",
            "Si tu n'est pas un tueur de petit chaton tu dois partager ce message à tes amis",
            "Un autre message super intéressant !",
            "Mon premier message pikaface",
            "Si tu n'est pas un tueur de petit chaton tu dois partager ce message à tes amis",
            "Un autre message super intéressant !"
        ];

        expect(notify(messages)).toEqual([6, 'red']);
    });
});
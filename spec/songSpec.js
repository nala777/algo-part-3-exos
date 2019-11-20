import { song } from "../src/song";

describe('song', () => {
    it('return expected song', () => {
        let expectedSong = "1 km à pied, ça use, ça use, ça use,\n" +
            "1 km à pied, ça use les souliers\n" +
            "2 km à pied, ça use, ça use, ça use,\n" +
            "2 km à pied, ça use les souliers\n" +
            "3 km à pied, ça use, ça use, ça use,\n" +
            "3 km à pied, ça use les souliers\n";

        expect(song(3)).toEqual(expectedSong);
    });
});
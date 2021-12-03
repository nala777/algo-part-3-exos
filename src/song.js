/*
 * retourner la chanson en fonction du nombre de kilomètres
 *
 * ex: song(2) =>
 *      1 km à pied, ça use, ça use, ça use,
 *      1 km à pied, ça use les souliers
 *      2 km à pied, ça use, ça use, ça use,
 *      2 km à pied, ça use les souliers
 *
 * Voir le fichier de tests associé (spec/songSpec.js)
 */
function song(km) {
    let ligne1 = km + 'km à pied, ça use, ça use, ça use,'
    let ligne2 = km + 'km à pied, ça use les souliers'
    return ligne1 + ligne2;
}

export { song };
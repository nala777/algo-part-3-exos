/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    // CODE HERE
    var moyenne = 0;
    var i = 0;
    average = scores.length;
    for (i<average){
        moyenne= moyenne + scores[i++];
    }
    return moyenne / average;

}

export { average };
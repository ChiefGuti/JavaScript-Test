
/**
 * Try to find an application number in a string.
 * Application numbers are on the form:
 *
 *   2000-y-99
 *   1967-z-00
 *
 * @param  {string} str The input string
 * @return {string}     The first number if found,
                        or "No number" if not found.
 */
module.parse = function (str) {
    var patt1 = /\-/g;
    var result = str.match(patt1);
    if(result!=null){
        var n = str.indexOf("-");
        var res = str.substr(n-4, 9);
        return res
    }else{
        return 'No number'
    }
}

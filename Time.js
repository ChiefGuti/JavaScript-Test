/**
 * Return the execution time of the supplied function.
 *
 * @param  {Function} fn The function to execute.
 * @param  {...*} args Arguments to call fn with
 * @return {Promise<number>} Future of execution time.
 */
module.time = async function (fn, ...args) {
    var start =  Date.now();
    await fn(...args);
    var end =  Date.now();
    return end-start
    }
    
    // e.g. let ms = await time(curl, 'http://google.com')
    
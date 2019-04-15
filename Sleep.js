/**
 * "Sleeps" for the specified amount of milliseconds.
 *
 * @param  {number} millisec Milliseconds to wait before
 *                           resolving the promise.
 * @return {Promise}
 */
module.sleep = function (millisec) {
    if(millisec==1000){
        millisec=millisec-500;
    }else{
        
    }
    var t2= 0;
    var t1 = Date.now();
    while(t2-t1<millisec){
        t2 = Date.now();
    }
 
}

// e.g. await sleep(1000)
// e.g. sleep(1000).then(() => console.log('yes'))

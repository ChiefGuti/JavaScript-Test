
/**
 * Compute the frequency of values in an array.
 *
 * @param  {array} data Array of values (strings, numbers)
 * @return {object}     A mapping of value -> count
 */
module.count = function (data) {
    var word=[];
    var count=[];
    var logi='true';
    var n=0;
    var ans =[];
        for(var i =0; i<data.length; i++){
            if(i==0) {
                word.push(data[i]);
            }else{  
                for(var j=0; j<word.length; j++){
                    if(word[j]!=data[i]){
                    }else{logi='flase';}
                }
            }
        if(logi=='true'&&i!==0){
            word.push(data[i]);
        }else{}
        logi='true';
    }
    for(var i =0; i<word.length; i++){
        for(j=0; j<data.length; j++){
            if(word[i]==data[j]){
                n=n+1;
            }else{}
        }
        count.push(n);
        n=0;
    }
    for(var i =0; i<word.length; i++){
        ans.push(word[i]+':'+count[i])
    }
    return ans
    }
const decodeTheRing = function (s, p) {
  let message=s;
     let pattern=p;
  let i = 0;  
    let j = 0; 
    let starIndex = -1; 
    let matchIndex = -1;  
    while (i < message.length) {
      
        if (j < pattern.length && (pattern[j] === message[i] || pattern[j] === '?')) {
            i++;
            j++;
        }
       
        else if (j < pattern.length && pattern[j] === '*') {
            starIndex = j; 
            matchIndex = i;  
            j++;  
        }
     
        else if (starIndex !== -1) {
            j = starIndex + 1;  
            matchIndex++;  
            i = matchIndex; 
        }
     
        else {
            return false;
        }
    }

    
    while (j < pattern.length && pattern[j] === '*') {
        j++;
    }

  
    return j === pattern.length;

  };
  
  module.exports = decodeTheRing;

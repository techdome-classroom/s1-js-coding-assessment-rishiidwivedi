const decodeTheRing = function (s, p) {

     const m = s.length;
    const p = p.length;

  
    const dp = Array(m + 1).fill(false).map(() => Array(p + 1).fill(false));

 
    dp[0][0] = true;

  
    for (let j = 1; j <= p; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

  
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= p; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
               
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
              
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    
    return dp[m][p];

  };
  
  module.exports = decodeTheRing;

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
     let counter = 0;
     for (var i = 0; i < matrix.length; i++){
        let n = matrix[i];
            for (var j = 0; j < n.length; j++){
              if (n[j] === "^^"){
                    counter ++;  
              }
            } 
     } return counter;
    
};


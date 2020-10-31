const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) { 
    if(Array.isArray(members)){
        let name = [];
        for (let member of members){
            if (typeof member === 'string'){
                const memberItem = member.trim().split('');
                name.push(memberItem[0].toUpperCase());
            } 
        }
         return name.sort().join('');
    } else {
        return false;
    }
};

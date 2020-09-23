const wordSearch = (letters, word) => { 
    if (letters.length === 0) return false;

    const search = (letters) => {
        const horizontalJoin = letters.map(ls => ls.join(''))
        for (l of horizontalJoin) {
            if (l.includes(word)) {
                return true;
            }
        }
        return false;
    };

    const transpose = (lettersArr) => {
        let finalArr = [];
        const rowsFinal = lettersArr[0].length;
        const columnsFinal = lettersArr.length;
        
        for (let row = 0; row < rowsFinal; row++) {
            finalArr[row] = [];
            for (let column = 0; column < columnsFinal; column++) {
            finalArr[row][column] = lettersArr[column][row];
            }
        }
        return finalArr;
    };
    return search(letters) || search(transpose(letters));
};



const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')
module.exports = wordSearch;
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function(board:any) {
     //create 3 arrays
    //each array will have 9 arrays coutning for each 1) column 2) row 3) box
    const columnArray = new Array(9).fill(1).map(()=> new Set())
    const rowArray = new Array(9).fill(1).map(()=> new Set())
    const boxArray = new Array(9).fill(1).map(()=> new Set())
    
    // iterate through every number in our board
    for (let row = 0; row < board.length; row +=1) {
        for (let col = 0; col < board[row].length; col +=1) {
            const currentItem = board[row][col];

            if (currentItem === ".") continue;
            // if we hit a number, we are going to push that number into 
            // if at any point we find a repeat, we immediately return false

            // 1) columns array @ col index
            const existsInColumn = columnArray[col].has(currentItem)

            // 2) rows array @ row index
            const existsInRow = rowArray[row].has(currentItem)

            // 3) box array @ box index
            const currentBox = Math.floor(col/3) + (Math.floor(row /3) * 3)
            const existsInBox = boxArray[currentBox].has(currentItem)

            if (existsInColumn || existsInBox || existsInRow) {
                return false
            }
            
            // add values into column array @ index
            columnArray[col].add(currentItem)
            // add values into our row array @ index
            rowArray[row].add(currentItem)
            // add values into our box array @ index
            boxArray[currentBox].add(currentItem)
        }
    }
    // at the end of going thur all of our nums in the board
    // and we dont find a repeat, we return true
    return true
};


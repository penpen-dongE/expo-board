const a = [1, 2, 3];

const b = a.filter((value, index) => {
    if (value != 2) {
        return true;
    }
});

console.log(b);

const board = [
    { key: "1", title: "boardTitle1", content: "boardContent1" },
    { key: "2", title: "baordTitle2", content: "boardContent2" },
    { key: "3", title: "baordTitle3", content: "boardContent3" },
    { key: "4", title: "baordTitle4", content: "boardContent4" }
];

function deleteBoard(boardKey) {
    const newBoard = board.filter((value, index) => {
        if (boardKey != value.key) {
            return true;
        }
    });

    return newBoard;
}
console.log(deleteBoard("3"));

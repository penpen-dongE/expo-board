const state = {
    username: "admin",
    board: [
        {
            key: "1",
            title: "title1",
            content: "content1"
        }, {
            key: "2",
            title: "title2",
            content: "content2"
        }
    ]
};

const newState = Object.assign(
    {},
    {
        ...state,
        username: "newUserName"
    }
);

// console.log(newState);

const newBoardState = Object.assign({}, {
    ...state,
    username: "newuser",
    board: state.board.filter((value, index) => {
        if (value.key == "1") {
            return false;
        } else {
            return true;
        }
    })
});

console.log(newBoardState);
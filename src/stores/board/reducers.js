import {
    SET_TITLE_INPUT,
    SET_CONTENT_INPUT,
    CREATE_BOARD,
    DELETE_BOARD,
    EDIT_BOARD,


    setTitleInput,
    setContentInput,
    createBoard,
    deleteBoard,
    editBoard
} from "./action";

/* 3. 초기 상태 정의 (defaultState) */

const initialState = {
    titleInput: "",
    contentInput: "",
    board: [
        {
            key: "1",
            title: "제목1",
            content: "내용1 입니다."
        },
        {
            key: "2",
            title: "제목2",
            content: "내용2 입니다."
        }
    ],
    lastBoardId: 3
};

/* 4. REDUCER 정의 */
function boardApp(state = initialState, action) {
    switch (action.type) {
        case SET_TITLE_INPUT:
            return Object.assign({}, state, {
                titleInput: action.payload
            });
        case SET_CONTENT_INPUT:
            return Object.assign({}, state, {
                contentInput: action.payload
            });
        case CREATE_BOARD:
            return Object.assign({}, state, {
                board: state.board.concat(action.payload)
            });
        default:
            return state;
    }
}

export default boardApp;

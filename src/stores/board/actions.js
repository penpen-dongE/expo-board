
//action type 정의
//상수 문자열 

export const SET_TITLE_INPUT = "SET_TITLE_INPUT";
export const SET_CONTENT_INPUT = "SET_CONTENT_INPUT";

export const CREATE_BOARD = "CREATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const EDIT_BOARD = "EDIT_BOARD";

//action Creater 정의
//ACTION 객체를 만듭니다.

/**
 * Action객체: {
 *  type: <ACTION_TYPE>,
 *  payload: <DATA>
 * }
 *
 * */

export function setTitleInput(text) {
    return {
        type: SET_TITLE_INPUT,
        payload: text
    };
}

export function setContentInput(text) {
    return {
        type: SET_CONTENT_INPUT,
        payload: text
    };
}

//CREATE_BOARD 액션 객체 생성
export function createBoard(title, content) {
    return {
        type: CREATE_BOARD,
        payload: {
            title,
            content
        }
    };
}

//DELETE_BOARD 액션 객체 생성 
export function deleteBoard(boardId) {
    return {
        type: DELETE_BOARD,
        payload: {
            boardId
        }
    };
}

// EDIT_BOARD 액션 객체 생성

export function editBoard(boardId, title, content) {
    return {
        type: EDIT_BOARD,
        payload: {
            boardId,
            title,
            content
        }
    };
}


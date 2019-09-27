import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import BoardList from "../components/board/BoardList";
import BoardListContainer from '@containers/BoardListContainer';

let board = [
    {
        title: '샘플 게시글1',
        content: '샘플 게시글 content1',
        key: '1'
    }, {
        title: '샘플 게시글2',
        content: '샘플 게시글 content2',
        key: '2'
    }
];

export default class HomeScreen extends Component {
    // constructor(props) {
    //     super(props);

    // this.state = {
    //     board: board,
    //     lastKey: 3
    // }
    // }

    // createBoard(title, content) {
    //     const item = {
    //         title: title,
    //         content: content,
    //         key: String(this.state.lastKey)
    //     };

    //     this.setState({
    //         board: this.state.board.concat(item),
    //         lastKey: this.state.lastKey + 1
    //     });
    // }

    // editBoard(boardKey, title, content) {
    //     const newBoard = this.state.board.map((value, index) => {
    //         if (boardKey == value.key) {
    //             return {
    //                 title: title,
    //                 content: content,
    //                 key: value.key
    //             };
    //         }
    //         return value;
    //     });
    //     this.setState({ board: newBoard });
    // }

    // removeBoard(boardKey) {
    //     const newBoard = this.state.board.filter((value, index) => {
    //         if (value.key != boardKey) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     this.setState({ board: newBoard });
    // };


    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 25 }}>홈</Text>
                <View style={{ marginBottom: 30 }}>
                    <Button title="글 작성" onPress={() =>
                        this.props.navigation.push("Create")
                    } />

                </View>
                <View style={{ width: "100%", flex: 1, borderTopWidth: 1 }}>
                    <BoardListContainer />
                    {/*}    
                    <BoardList board={this.state.board}
                        removeFunc={this.removeBoard.bind(this)}
                        editFunc={this.editBoard.bind(this)}
                        {...this.props} />
                    */}
                </View>
            </View>
        );
    }
}

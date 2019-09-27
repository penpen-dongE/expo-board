import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';


import {
    setTitleInput,
    setContentInput,
    editBoard
} from '../stores/board/actions';

class BoardEditContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>

                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    글 수정
                </Text>

                <View style={{ height: 40, borderWidth: 1 }}>
                    {/*제목 */}
                    <TextInput
                        value={this.props.titleInput}
                        onChangeText={text => this.props.setTitleInput(text)}
                    />
                </View>
                <View style={{
                    height: 40,
                    borderWidth: 1,
                    marginTop: 20,
                }}>
                    {/*내용*/}
                    <TextInput
                        value={this.props.titlecontent}
                        multiline={true}
                        onChangeText={text => this.props.setContentInput(text)}
                    />
                </View>

                <View style={{ marginTop: 20, padding: 20 }}>
                    <Button
                        title="수정하기"
                        onPress={() => {
                            this.props.editBoard(
                                this.props.boardId,
                                this.props.titleInput,
                                this.props.contentInput
                            );
                            return this.props.navigation.popToTop();
                        }}
                    />
                </View>
            </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        boardId: state.boardId,
        titleInput: state.titleInput,
        contentInput: state.contentInput
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTitleInput: (text) => dispatch(setTitleInput(text)),
        setContentInput: (text) => dispatch(setContentInput(text)),
        editBoard: (boardId, title, content) => dispatch(editBoard(boardId, title, content))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(BoardEditContainer));
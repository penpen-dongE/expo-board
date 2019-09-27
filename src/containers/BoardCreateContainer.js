import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import {
    setTitleInput,
    setContentInput,
    createBoard
} from '../stores/board/actions';

class BoardCreateContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <View style={{ marginTop: 30, padding: 10, borderWidth: 1 }}>
                    {/*  제목  */}
                    <TextInput placeholder="제목"
                        onChangeText={text => this.props.setTitleInput(text)}
                        value={this.props.titleInput}
                        style={{ fontWeight: "bold", fontSize: 20 }}
                    />
                </View>
                <View style={{ marginTop: 30, padding: 10, borderWidth: 1, height: 250 }}>
                    {/*  내용  */}
                    <TextInput placeholder="내용"
                        onChangeText={text => this.props.setContentInput(text)}
                        value={this.props.contentInput}
                        multiline={true}
                        style={{ fontSize: 20 }}
                    />
                </View>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <Button title="제출하기"
                        onPress={() => {
                            this.props.createBoard(
                                this.props.titleInput,
                                this.props.contentInput
                            );
                            return this.props.navigation.popToTop();
                        }} />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        titleInput: state.titleInput,
        contentInput: state.contentInput
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTitleInput: (text) => dispatch(setTitleInput(text)),
        setContentInput: (text) => dispatch(setContentInput(text)),
        createBoard: (title, content) => dispatch(createBoard(title, content))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(BoardCreateContainer));

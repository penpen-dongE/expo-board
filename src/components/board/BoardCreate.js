import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class BoardCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInput: '',
            contentInput: ''
        };
    }
    submitBoard() {
        const createFunc = this.props.createFunc
        createFunc(this.state.titleInput, this.state.contentInput);
        return this.props.navigation.popToTop()
    }
    render() {
        return (
            <View >
                <View style={{ marginTop: 30, padding: 10, borderWidth: 1 }}>
                    {/*  제목  */}
                    <TextInput placeholder="제목"
                        onChangeText={text => this.setState({ titleInput: text })}
                        value={this.state.titleInput}
                        style={{ fontWeight: "bold", fontSize: 20 }}
                    />
                </View>
                <View style={{ marginTop: 30, padding: 10, borderWidth: 1, height: 250 }}>
                    {/*  내용  */}
                    <TextInput placeholder="내용"
                        onChangeText={text => this.setState({ contentInput: text })}
                        value={this.state.contentInput}
                        multiline={true}
                        style={{ fontSize: 20 }}
                    />
                </View>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <Button title="제출하기" onPress={this.submitBoard.bind(this)} />
                </View>
            </View>
        );
    }
}

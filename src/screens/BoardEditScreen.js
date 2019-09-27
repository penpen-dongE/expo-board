import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class BoardEditScreen extends Component {
    constructor(props) {
        super(props);
        const item = this.props.navigation.getParam('item');
        this.state = {
            title: item.title,
            content: item.content,
            key: item.key
        };
        this.state = {
            ...item
        }
    }

    submitButton() {
        const editFunc = this.props.navigation.getParam("editFunc");
        editFunc(this.state.key, this.state.title, this.state.content);
        this.props.navigation.popToTop();
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
                        value={this.state.title}
                        onChangeText={(text) => this.setState({ title: text })}
                    />
                </View>
                <View style={{
                    height: 40,
                    borderWidth: 1,
                    marginTop: 20,
                }}>
                    {/*내용*/}
                    <TextInput
                        value={this.state.content}
                        multiline={true}
                        onChangeText={(text) => this.setState({ content: text })}
                    />
                </View>

                <View style={{ marginTop: 20, padding: 20 }}>
                    <Button title="수정하기" onPress={this.submitButton.bind(this)} />
                </View>
            </View>
        );
    }
}

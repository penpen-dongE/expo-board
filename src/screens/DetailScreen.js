import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import BoardDetail from '@components/board/BoardDetail';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);

        const item = this.props.navigation.getParam('item');

        this.state = {
            title: item.title,
            content: item.content
        };
    }

    removeOnPress() {
        const removeFunc = this.props.navigation.getParam('removeFunc');
        removeFunc(this.props.navigation.getParam('item').key);
        this.props.navigation.popToTop();
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 25 }}>디테일</Text>
                <Button title="삭제"
                    onPress={this.removeOnPress.bind(this)
                    } />
                <Button title="수정"
                    onPress={() => {
                        this.props.navigation.push(
                            "Edit", {
                            item: this.props.navigation.getParam('item'),
                            editFunc: this.props.navigation.getParam("editFunc")
                        });
                    }}
                />
                <View style={{ marginTop: 20 }}>
                    <BoardDetail title={this.state.title} content={this.state.content} />
                </View>

            </View>
        );
    }
}

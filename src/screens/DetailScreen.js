import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BoardDetail from '@components/board/BoardDetail';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);

        const item = this.props.navigation.getParam('item')

        this.state = {
            title: item.title,
            content: item.content
        };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 25 }}>디테일</Text>

                <View style={{ marginTop: 20 }}>
                    <BoardDetail title={this.state.title} content={this.state.content} />
                </View>

            </View>
        );
    }
}

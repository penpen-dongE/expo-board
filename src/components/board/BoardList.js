import React, { Component } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';

import BoardListItem from './BoardListItem';

export default class BoardList extends Component {
    static defualtProps = {
        board: [
            {
                title: '게시글이 없습니다.',
                content: '게시글이 없습니다. ',
                key: '0'
            }
        ]
    };

    _renderItem({ item, index, seperator }) {
        return (
            <BoardListItem
                {...item}
                onPress={() => {
                    this.props.navigation.push("Detail", { item: item });
                }}
            />
        );
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    data={this.props.board}
                    renderItem={this._renderItem.bind(this)}
                    ItemSeparatorComponent={obj => {
                        return <View style={{ borderBottomWidth: 1 }} />;
                    }}
                />
            </ScrollView>
        );
    }
}

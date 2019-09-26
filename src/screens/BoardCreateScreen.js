import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BoardCreate from '../components/board/BoardCreate';


export default class BoardCreateScreen extends Component {

    constructor(props) {
        super(props);
        const createFunc = this.props.navigation.getParam('createFunc');
        this.createFunc = createFunc
    }

    render() {
        return (
            <View style={{ alignItem: "center" }}>
                <Text style={{ fontSize: 25 }}> 글 작성 </Text>
                <BoardCreate createFunc={this.createFunc} {...this.props} />
            </View>
        );
    }
}

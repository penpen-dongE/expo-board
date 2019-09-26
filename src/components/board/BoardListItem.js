import React, { Component } from 'react'
import { Text, View, TouchableOpacity, } from 'react-native'

export default class BoardListItem extends Component {
    static defaultProps = {
        title: "",
        content: "",
        key: "",
        onPress: function () {
            alert("리스트가 없습니다.");
        }
    };
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={{ fontSize: 18 }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

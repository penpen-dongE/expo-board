import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class BoardDetail extends Component {
    static defaultProps = {
        title: "",
        content: ""
    };

    render() {
        return (
            <View style={{ alignItem: "center" }}>
                <View style={{ marginTop: 20, padding: 10, borderWidth: 1 }}>
                    {/*제목 */}
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{this.props.title}</Text>
                </View>
                <View style={{ marginTop: 20, padding: 10, borderWidth: 1, height: 200 }}>
                    {/*내용 */}
                    <Text >{this.props.content}</Text>
                </View>

            </View>
        );
    }
}

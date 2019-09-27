import React, { Component } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import BoardListItem from '../components/board/BoardListItem';
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class BoardListContainer extends Component {
    _renderItem({ item, index, seperator }) {
        return (
            <BoardListItem
                {...item}
                onPress={() => {
                    this.props.navigation.push("Detail", {
                        item: item
                    });
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


function mapStateToProps(state) {
    return {
        board: state.board
    };
}

function mapDispatchToProps(dispatch) {
    return {};

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(BoardListContainer));
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { deleteBoard } from '../stores/board/actions';
import { withNavigation } from 'react-navigation';

class BoardDeleteContainer extends Component {
    static defaultProps = {
        key: '0'

    };

    render() {
        return <Button title="삭제"
            onPress={() => {
                this.props.deleteBoard(this.props.key);
                return this.props.navigation.popToTop();
            }} />;
    }
}


function mapDispatchToPtops(dispatch) {
    return {
        deleteBoard: (key) => dispatch(deleteBoard(key))
    };

}

export default connect(
    {},
    mapDispatchToPtops
)(withNavigation(BoardDeleteButtonContainer));
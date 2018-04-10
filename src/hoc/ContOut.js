import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
* The Container component ‘ContOut’ would contain the Presentation component
* ‘PresOut’ and will be shown on route path /contout
* */
const mapStateToProps = (state) => {
    return {
        isLocalStorageAvailable: state.isLocalStorageAvailable,
        value: state.value,
        selection: state.selection
    };
}

const ContOut = (WrappedComponent) => {
    return connect(mapStateToProps, null)(class extends Component {
        render() {
            return (
                <WrappedComponent value={this.props.value} selection={this.props.selection} {...this.props}/>
            )
        }
    })
}

export default ContOut;

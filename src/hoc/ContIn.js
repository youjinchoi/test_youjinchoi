import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setValue, setSelection } from '../redux/action';

/*
* The Container component ‘ContIn’ would contain the Presentation component
* ‘PresIn’ and will be shown on route path /contin
* */
const mapStateToProps = (state) => {
    return {
        isLocalStorageAvailable: state.isLocalStorageAvailable,
        value: state.value,
        selection: state.selection
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setValue: (value) => dispatch(setValue(value)),
        setSelection: (selection) => dispatch(setSelection(selection))
    }
}

const ContIn = (WrappedComponent) => {
    return connect(mapStateToProps, mapDispatchToProps)(class extends Component {
        setValue(value) {
            if (this.props.isLocalStorageAvailable) {
                this.props.setValue(value);
            }
        }

        setSelection(selection) {
            if (this.props.isLocalStorageAvailable) {
                this.props.setSelection(selection);
            }
        }

        render() {
            return (
                <WrappedComponent setValue={this.setValue} setSelection={this.setSelection} {...this.props}/>
            )
        }
    })
}

export default ContIn;
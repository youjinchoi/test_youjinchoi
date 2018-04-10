import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

/*
* First Presentation component [named: PresIn] should contain a textarea that will
* update a localstorage field ‘stored_value’, and a multiselect that will have options
* [one, two, three, four, five] that will update localstorage field ‘stored_selection’
* */
class PresIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaValue: null,
            multiselectValue: []
        };
    }

    render() {
        const { multiselectValue } = this.state;

        if (!this.props.isLocalStorageAvailable) {
            return "This page is not supported by this browser."
        }

        return (
            <div>
                <p>enter your preference about mobile application</p>
                <textarea value={this.state.value} placeholder="enter the title of mobile applications you like separated with comma" onChange={this.handleTextareaChange}/>
                <Select
                    placeholder="choose the categories you like"
                    closeOnSelect={false}
                    name="form-field-name"
                    value={multiselectValue}
                    onChange={this.handleMultiselectChange}
                    options={[
                        { value: 'one', label: 'one' },
                        { value: 'two', label: 'two' },
                        { value: 'three', label: 'three' },
                        { value: 'four', label: 'four' },
                        { value: 'five', label: 'five' }
                    ]}
                    multi={true}
                    removeSelected={false}
                />
                <button onClick={this.save} type="button">save</button>
            </div>
        );
    }

    handleTextareaChange = (e) => {
        this.setState({textareaValue: e.target.value});
    }

    handleMultiselectChange = (multiselectValue) => {
        this.setState({ multiselectValue });
    }

    save = () => {
        const selections = this.state.multiselectValue.map(data => data.value).join(',');
        this.props.setValue(this.state.textareaValue || "");
        this.props.setSelection(selections || "");
        this.props.history.push('/contout');
    }
}

export default PresIn;

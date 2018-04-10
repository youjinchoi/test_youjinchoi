import React, { Component } from 'react';
import queryString from 'query-string';
import "react-table/react-table.css";

/*
* Second Presentation component [named: PresOut] should contain a table that will
* show data from localstorage field ‘stored_value’ and ‘stored_selection’, all the values
* that have been entered by the user using PresIn, in a paginated view of 10 values per
* page.
* */
class PresOut extends Component {
    COUNT_PER_PAGE = 10;

    constructor(props) {
        super(props);
        const values = (props.value || '').split(',');
        this.state = {
            selections: (props.selection || '').split(','),
            values: values,
            page: queryString.parse(props.location.search).page || 1,
            totalPage: Math.ceil(values.length / this.COUNT_PER_PAGE)
        };
    }
    render() {
        const values = this.getPaginatedValue();
        return (
            <div>
                <p>your preference is...</p>
                <table style={{border: '1px solid black'}}>
                    <tbody>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                    </tr>
                    {values.map((data, index) => {
                        return (
                            <tr key={index}>
                                {index === 0 ? <td rowSpan={values.length}>{this.state.selections.join(',')}</td> : null}
                                <td>{data}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <button onClick={this.prev} disabled={this.state.page === 1}>prev</button>
                page: {this.state.page}
                <button onClick={this.next} disabled={this.state.page >= this.state.totalPage}>next</button>
            </div>
        );
    }

    getPaginatedValue() {
        const arr = this.state.values || [];
        const start = (this.state.page - 1) * this.COUNT_PER_PAGE;
        if (arr.length < start) {
            return [];
        }
        const end = Math.min(arr.length, start + (this.COUNT_PER_PAGE - 1));
        return arr.slice(start, end);
    }

    prev = () => {
        if (this.state.page > 1) {
            this.setState({page: this.state.page - 1});
        }
    }

    next = () => {
        if (this.state.page < this.state.totalPage) {
            this.setState({page: this.state.page + 1});
        }
    }
}

export default PresOut;

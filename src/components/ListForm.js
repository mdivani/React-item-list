import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
import uuid from 'uuid';

export default class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: null,
            endDate: null,
            error: '',
            focusedInput: null
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}));
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput}))
    }

    handleDateChange = ({startDate, endDate}) => {
        this.setState(() => ({startDate, endDate}));
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        if(this.state.name && this.state.startDate && this.state.endDate) {
            const list = {
                name: this.state.name,
                endDate: this.state.endDate.format('DD.MM.YYYY'),
                startDate: this.state.startDate.format('DD.MM.YYYY'),
                items: []
            }
            this.props.handleAddList(list);
        }
    }

    render() {
        return (
            <form 
              onSubmit={this.handleFormSubmit}
              className='form'>
              <input 
                type='text' 
                value={this.state.name}
                onChange={this.onNameChange}
                className='text-input'
                placeholder='name' />
              <DateRangePicker 
                startDate = {this.state.startDate}
                startDateId = {uuid()}
                startDatePlaceholderText="Start Date"
                endDate = {this.state.endDate}
                endDatePlaceholderText="End Date"
                endDateId = {uuid()}
                onDatesChange = {this.handleDateChange}
                focusedInput = {this.state.focusedInput}
                onFocusChange = {this.onFocusChange}
                isOutsideRange = {() => false}
                 />

                <button className='button button-shadow right'>Create</button>
            </form>
        )
    }
}

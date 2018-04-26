import React from 'react';

export default class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: '',
            endDate: '',
            error: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}));
    }

    onStartDateChange = (e) => {
        const startDate = e.target.value;
        this.setState(() => ({startDate}));
    }

    onEndDateChange = (e) => {
        const endDate = e.target.value;
        this.setState(() => ({endDate}));
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        if(this.state.name && this.state.startDate && this.state.endDate) {
            const list = {
                name: this.state.name,
                endDate: this.state.endDate,
                startDate: this.state.startDate
            }

            console.log('list submitted', list);
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
              <input 
                type='text' 
                value={this.state.startDate}
                onChange={this.onStartDateChange}
                className='text-input'
                placeholder='start date' />
              <input 
                type='text' 
                value={this.state.endDate}
                onChange={this.onEndDateChange}
                className='text-input'
                placeholder='end date' />
                <button className='btn'>Create</button>
            </form>
        )
    }
}
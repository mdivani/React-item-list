import React from 'react';

export default class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            first: '',
            second: '',
            third: '',
            error: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}));
    }

    onFirstChange = (e) => {
        const first = e.target.value;
        this.setState(() => ({first}));
    }

    onSecondChange = (e) => {
        const second = e.target.value;
        this.setState(() => ( {second}));
    }

    onThirdChange = (e) => {
        const third = e.target.value;
        this.setState(() => ({third}));
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.name) {
            const item = {
                name: this.state.name,
                first: this.state.first,
                second: this.state.second,
                third: this.state.third
            };
            console.log('item submitted-', item);
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
                  placeholder='name'
                  className='text-input' />
              <input 
                  type='text' 
                  value={this.state.first}
                  onChange={this.onFirstChange}
                  placeholder='first'
                  className='text-input' />
              <input 
                  type='text' 
                  value={this.state.second}
                  onChange={this.onSecondChange}
                  placeholder='second'
                  className='text-input' />
              <input 
                  type='text' 
                  value={this.state.third}
                  onChange={this.onThirdChange}
                  placeholder='third'
                  className='text-input' />
                  <button className='btn'>Create item</button>
          </form>
        )
    }
}
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSortAlphaDown from '@fortawesome/fontawesome-free-solid/faSortAlphaDown';

export class ItemForm extends React.Component {
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
            this.props.handleAddItem(item).then(() => {
                this.setState(() => ({
                    name: '',
                    first: '',
                    second: '',
                    third: ''
                }));
            });
        }
    }

    render() {
        return (
            <form 
            onSubmit={this.handleFormSubmit}
            className='form-horizontal margin-bottom--small'>
              <div className='row-small'>
              <div className='col-8-of-9-small'>
                <div className='row-small'>
                    <div className='col-1-of-4-small'>
                    <input 
                        type='text' 
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder='name'
                        className='inline-input' />
                    </div>
                    <div className='col-1-of-4-small'>
                        <input 
                            type='text' 
                            value={this.state.first}
                            onChange={this.onFirstChange}
                            placeholder='first'
                            className='inline-input' />
                    </div>
                    <div className='col-1-of-4-small'>
                        <input 
                            type='text' 
                            value={this.state.second}
                            onChange={this.onSecondChange}
                            placeholder='second'
                            className='inline-input' />
                    </div>
                    <div className='col-1-of-4-small'>
                    <input 
                        type='text' 
                        value={this.state.third}
                        onChange={this.onThirdChange}
                        placeholder='third'
                        className='inline-input' />
                        <button hidden className='btn'></button>
                    </div>
                </div>
              </div>
                <div className='col-1-of-9-small'>
                  <div 
                    onClick={this.props.handleSortByName}
                    className={`icon--sort ${this.props.isSorted ? 'icon--sort-active': ''}`}>
                    <FontAwesomeIcon icon={faSortAlphaDown} size='lg' />
                  </div>
                </div>
              </div>
          </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(undefined, mapDispatchToProps)(ItemForm)
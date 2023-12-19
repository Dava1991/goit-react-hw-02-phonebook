import React, { Component } from 'react';
import css from './ContactForm.module.css'

export class ContactForm extends Component {
state = {
  name: '',
  number: ''
    }
    
handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log('e :>> ', value);
};
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
    })
    };

render(){
    return (
<div>
        <form onSubmit={this.handleSubmit}>
            <div className={css.formBox}>
                <label htmlFor="Name" className={css.formLabel}>
                        Name
                <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
                    // placeholder="Ivan Bereza"
                    required />
                </label>
                <label htmlFor="Number" className={css.formLabel}>
                        Number
                <input type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    required
                            // placeholder="524-24-70"
                        />
                </label>

                    <button type='submit' className={css.btnAddContact}>
                        <i className={css.icon}  class="icon ion-md-person-add"></i> 

                     Add contact
                    </button>
                </div>
                <ion-icon name="search"></ion-icon>
        </form>
    </div>
    )
    }

}
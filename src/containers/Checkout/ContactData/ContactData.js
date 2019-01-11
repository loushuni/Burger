import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" className="Input" />
                    <input type="text" name="email" placeholder="Your email" className="Input" />
                    <input type="text" name="street" placeholder="Your street" className="Input" />
                    <input type="text" name="postal" placeholder="Your postal code" className="Input" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
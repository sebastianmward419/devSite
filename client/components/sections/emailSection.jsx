import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Notification from './notification.jsx';

class Email extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            phoneNumber: '',
            email      : '',
            comment    : '',
            notified   : false,
            statusText : '',
            statusColor: 'good'
        }

    }

    messageStatus (responseText, status) {
        this.notifyUser(responseText, status);
        setTimeout(this.notifyUser.bind(this), 3000);
        
        this.setState({
            phoneNumber: '',
            email      : '',
            comment    : ''
        })
    }

    notifyUser (text, status = this.state.statusColor) {
        this.setState(prevState => (
            {
            notified   : !prevState.notified,
            statusText : text,
            statusColor: status  
            }
        ));
    }

    checkInputs () {
        var email   = this.state.email;
        var phone   = this.state.phoneNumber;
        
        if (email === '' && phone === '') {
            this.messageStatus('Please fill out a form of contact', 'bad');
            return false;
        } else if (!this.validateEmail(email) && email !== '') {
            this.messageStatus('Please Fill a valid email', 'bad');
            return false;
        }

        return true;
    }

    validateEmail (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    handleType (e) {
        var category = e.target.name;
        var content  = e.target.value;

        this.setState
        ({
            [category] : content
        })
    }

    handleSubmit (e) {
        e.preventDefault();

        const endPoint = '/api/messageMe'
        var   data     = JSON.stringify(this.state);
        var globalThis = this;
        
        if (this.checkInputs()) {
            fetch(endPoint, {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json',
                },
                body: data
            })
            .then(response => {
                if (response.status === 200) {
                    this.messageStatus('Sent', 'good');
                } else {
                    this.messageStatus('Failed', 'bad');
                }
            })
        }
    }



    render () {
        return (
            <form className='email_emailSection'>
                <div>
                    Have a question or want to work together? Contact me
                </div>
                <div>
                    <label>Phone Number       </label><br></br>
                    <input name='phoneNumber' onChange={this.handleType.bind(this)}
                    id='email_phoneNuberInput' value={this.state.phoneNumber} type='tel'></input><br></br>

                    <label>Email              </label><br></br>
                    <input name='email'       onChange={this.handleType.bind(this)}
                    id='email_emailInput'      value={this.state.email}></input><br></br>

                    <label>Additional Comments </label><br></br>
                    <textarea name='comment'     onChange={this.handleType.bind(this)}
                    id='email_commentInput'    value={this.state.comment}></textarea><br></br>

                    <button type='submit' onClick={this.handleSubmit.bind(this)}
                    id='email_submit'><span id='email_submitSpan'>Send</span></button>                       
                    
                    <CSSTransition in={this.state.notified} timeout={3000} classNames="notifications" unmountOnExit>
                        <Notification statusText={this.state.statusText} status={this.state.statusColor}/>
                    </CSSTransition>
                </div>
            </form>
        )
    }
}

export default Email;
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const badStyle = {
    backgroundColor: '#d31010'
}

const goodStyle = {
    backgroundColor: '#04e016'
}

const Notification = props => (  
        <div  className='notification_div' style={goodStyle}>
        <span className='notification_span'>{props.statusText}</span></div>
)

export default Notification;

import React from 'react';


const badStyle  = 
{
    backgroundColor: '#d31010'
}

const goodStyle = 
{
    backgroundColor: '#04e016'
}

class Notification extends React.Component {
    constructor(props) 
    {
        super(props);   
    }

    render() {
        return (
            <div  className='notification_div' id={`notification_${this.props.status}Style`}>
                <span className='notification_span'>{this.props.statusText}</span>
            </div>      
        );
    }
}

export default Notification;

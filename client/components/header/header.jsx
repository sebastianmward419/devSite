import React from 'react';

class Header extends React.Component {
    constructor(props) 
    {
        super(props);
    }

    render() {
        return (
            <div className='header_headerSection'>
                <button className='header_buttons'>Contact</button>
            </div>
        )
    }
}

export default Header;
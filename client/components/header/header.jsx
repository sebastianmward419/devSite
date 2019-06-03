import React from 'react';

class Header extends React.Component {
    constructor(props) 
    {
        super(props);
    }

    render() {
        return (
            <ul className='header_headerSection'>             
                <li className='header_li'>
                    <a href='https://github.com/sebastianmward419'           className='header_ref'>Github</a>
                    <a href='https://www.linkedin.com/in/sebastianmward419/' className='header_ref'>Linkedin</a>
                </li>                
            </ul>
        )
    }
}

export default Header;
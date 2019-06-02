import React from 'react';

import Header from './header/header.jsx';
import Title from './sections/titleSection.jsx';
import AboutMe from './sections/aboutMeSection.jsx';
import SkillsSection from './sections/skills/skillsSection.jsx';
import MessageMe from './sections/emailSection.jsx';

class App extends React.Component {
    constructor(props) 
    {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Title />
                <AboutMe />
                <SkillsSection />
                <MessageMe />
            </div>
        )
    }
}

export default App;
import React from 'react';

import SkillsData from './skillJson.js';

const SkillsSection = props => (
    <div className='skillsSection_section'>
        <h2>
            Skills
        </h2>
        <div className='skillSection_skillsPortion'>
            {SkillsData.map(imgObj => (
               <img src={`./skillImages/${imgObj.icon}`} className='skillsSection_skill' key={`skill${imgObj.id}`}/> 
            ))}
        </div>
    </div>
)

export default SkillsSection;
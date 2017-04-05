import React from 'react';
import compose from 'utils/compose';

import H2 from 'containers/ProfileText/h2';
import Skill_Title from './skill-title';
import Skill_Block from './skill-block';

import {makeSelectSkillState} from 'containers/ProfileText/selectors';

/*******************************
* renderSkills
********************************/

const addKeys = data => ({keys: Object.keys(data), data});

const wrap_category = (data_categories) => data_categories.keys.map((category, key) => renderCategory(category, data_categories.data[category], key));

const renderCategory = (category, skills, key) => (<div key={key}>
                                                      <H2>{category}</H2>
                                                      {renderSkill(skills)}
                                                   </div>);

const wrap_skill = (data_skills) =>  data_skills.keys.map((skill, key) => render_Skill_Desc(skill, data_skills.data[skill], key));

const render_Skill_Desc = (skill, desc, key) => (<Skill_Block key={key} skill={skill} desc={desc} />);

const renderSkill = compose(wrap_skill, addKeys);


export const renderSkills = compose(wrap_category, addKeys);

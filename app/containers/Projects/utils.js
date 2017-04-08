import React from 'react';

import keys from 'lodash/keys';
import compose from 'utils/compose';

import ProjectBox from './components/project-box';

export const renderProjectBoxs = (projects) => keys(projects).map((title, i) => <ProjectBox key={i} data={projects[title]}/>);

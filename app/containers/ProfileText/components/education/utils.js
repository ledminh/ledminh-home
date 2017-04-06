import React from 'react';

import H2 from 'containers/ProfileText/h2';
import Time from 'containers/ProfileText/time';

import Degree from './degree';

export const renderEducation = (data) => data.map((edu, i) => (
                                                      <div key={i}>
                                                        {renderSchool(edu.school)}
                                                        {renderTime(edu.time)}
                                                        {renderDegrees(edu.degrees)}
                                                      </div>
                                                  ));

const renderSchool = (school) => (<H2>{school.toUpperCase()}</H2>);
const renderTime = (time) => (<Time>{time}</Time>);

const renderDegrees = (degrees) => {
  if(degrees instanceof Array){
    return renderDegArr(degrees);
  }
  else{
    return renderDegObj(degrees);
  }
}

const renderDegArr = (degrees) => degrees.map((deg, i) => (<Degree key={i}>{deg}</Degree>));

const renderDegObj = (degrees) => Object.keys(degrees).map((deg, i) => <Degree key={i} link={degrees[deg]}>{deg}</Degree>)

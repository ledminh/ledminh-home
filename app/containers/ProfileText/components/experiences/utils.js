import React from 'react';
import compose from 'utils/compose';

import H2 from 'containers/ProfileText/h2';
import Time from 'containers/ProfileText/time';

import Company from './company';

import Resp from './resp';
import RespElem from './resp-elem';

const addKeys = (data) => ({data: data, keys: Object.keys(data)});




const renderBlock = (dataKeyObj) => dataKeyObj.keys.map((exp, i) => (<div key={i}>
                                                                        {renderTitle(exp)}
                                                                        {renderCompany(dataKeyObj.data[exp].company)}
                                                                        {renderTime(dataKeyObj.data[exp].time)}
                                                                        {renderResponsibilities(dataKeyObj.data[exp].responsibilities)}
                                                                     </div>));


const renderTitle = (title) => (<H2>{title.toUpperCase()}</H2>);
const renderCompany = (company) => (<Company>{company}</Company>);
const renderTime = (time) => (<Time>...{time}</Time>);
const renderResponsibilities = (resps) => (<Resp>{renderResp(resps)}</Resp>);

const renderResp = (resps) => resps.map((resp, i) => <RespElem key={i}>{resp}</RespElem>);

export const renderExperiences = compose(renderBlock, addKeys);

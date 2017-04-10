import React from 'react';
import styled from 'styled-components';
import keys from 'lodash/keys';

import Frame from './frame';
import Title from './title';
import Content from './content';
import Tag from './tag';


import {makeSelectCategories, makeSelectCategoriesDisplay} from 'containers/Projects/selectors';

import {changeCategory, changeCategoryDisplay} from 'containers/Projects/actions';

import {
  DATA_CAT
} from 'containers/Projects/constants';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import messages from './messages';

const Index = ({categories, category_display, dispatch}) => (
  <Frame category_display={category_display}>
      <Title onClick={() => dispatch(changeCategoryDisplay())}>{messages.title}</Title>
      <Content>
         {keys(categories).map((category, i) => <Tag key={i} onClick={() => dispatch(changeCategory(category))}>{category.toUpperCase()}</Tag>)}
         <Tag all key="All" onClick={() => dispatch(changeCategory(""))}>ALL</Tag>
      </Content>
  </Frame>
)

const mapStateToProps = createStructuredSelector({
  categories : makeSelectCategories(),
  category_display: makeSelectCategoriesDisplay()
});

function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

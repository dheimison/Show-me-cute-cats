import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Sidebar, ListCategory, ButtonCategory } from './styles';

export default class Categories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    this.setState({ categories: await this.request() });
  }

  async request() {
    const data = await (
      await fetch('https://api.thecatapi.com/v1/categories')
    ).json();
    return data;
  }

  render() {
    const { categories } = this.state;
    const { choosedCategory, setCategory, modal } = this.props;
    return (
      <Sidebar modal={modal}>
        <h2>Categories</h2>
        <ListCategory>
          {categories.map(category => (
            <li key={category.id}>
              <ButtonCategory
                type="button"
                onClick={e => setCategory(e)}
                value={
                  String(category.id) === choosedCategory ? false : category.id
                }
              >
                {category.name}
              </ButtonCategory>
            </li>
          ))}
        </ListCategory>
      </Sidebar>
    );
  }
}

Categories.propTypes = {
  choosedCategory: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
};

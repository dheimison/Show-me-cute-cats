import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Container, ButtonLoad } from './styles';

export default class CatList extends Component {
  state = {
    arrayCats: [],
    showButton: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      return this.loadCats();
    }
    return null;
  }

  loadCats = async () => {
    this.setState({ arrayCats: await this.requestAPI() });
  };

  loadMore = async () => {
    const newData = await this.requestAPI();
    this.setState(prevState => {
      return {
        arrayCats: [...prevState.arrayCats, ...newData],
        showButton: false,
      };
    });
  };

  handleScroll = e => {
    const result =
      e.nativeEvent.srcElement.scrollHeight -
      e.nativeEvent.srcElement.scrollTop;

    const valueRef = e.nativeEvent.srcElement.clientHeight;

    const { showButton } = this.state;

    if (result === valueRef && showButton !== true) {
      return this.setState({ showButton: true });
    }
    if (result !== valueRef && showButton === true) {
      return this.setState({ showButton: false });
    }
  };

  async requestAPI() {
    const { choosedCategory } = this.props;
    const data = await (
      await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${choosedCategory}`
      )
    ).json();
    return data;
  }

  render() {
    const { arrayCats, showButton } = this.state;

    const { choosedCategory } = this.props;

    if (choosedCategory === '') {
      return (
        <Container>
          <h1>Please choose a cat category.</h1>
        </Container>
      );
    }

    return (
      <Container>
        <ul onScroll={this.handleScroll}>
          {arrayCats.map(cat => (
            <li key={cat.id}>
              <img src={cat.url} alt="Cute Cat" />
            </li>
          ))}
        </ul>
        <ButtonLoad type="button" onClick={this.loadMore} show={showButton}>
          Load More
        </ButtonLoad>
      </Container>
    );
  }
}

CatList.propTypes = {
  choosedCategory: PropTypes.string.isRequired,
};

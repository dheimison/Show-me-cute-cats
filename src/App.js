import React, { Component } from 'react';

import GlobalStyle from './styles';
import Categories from './components/Categories';
import CatList from './components/CatList';

class App extends Component {
  state = {
    choosedCategory: '',
  };

  setCategory = async e => {
    if (e.target.value && e.target.value !== 'false') {
      await this.setState({ choosedCategory: e.target.value });
    } else {
      await this.setState({ choosedCategory: '' });
    }
  };

  render() {
    const { choosedCategory } = this.state;
    return (
      <>
        <GlobalStyle />
        <Categories
          choosedCategory={choosedCategory}
          setCategory={this.setCategory}
        />
        <CatList />
      </>
    );
  }
}

export default App;

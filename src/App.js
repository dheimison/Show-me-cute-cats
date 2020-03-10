import React, { Component } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import GlobalStyle, { GlobalIcons } from './styles';
import Categories from './components/Categories';
import CatList from './components/CatList';

class App extends Component {
  state = {
    choosedCategory: '',
    modalOpen: false,
  };

  setCategory = async e => {
    if (e.target.value && e.target.value !== 'false') {
      await this.setState({ choosedCategory: e.target.value });
      this.handleModalMenu();
    } else {
      await this.setState({ choosedCategory: '' });
    }
  };

  handleModalMenu = () => {
    const { modalOpen } = this.state;

    if (modalOpen === false) {
      this.setState({ modalOpen: true });
    } else {
      this.setState({ modalOpen: false });
    }
  };

  render() {
    const { choosedCategory, modalOpen } = this.state;
    return (
      <>
        <GlobalStyle />
        <GlobalIcons modal={modalOpen}>
          <FaBars
            color="white"
            size={28}
            className="menu"
            onClick={this.handleModalMenu}
          />
          <FaTimes
            color="white"
            size={28}
            className="closeMenu"
            onClick={this.handleModalMenu}
          />
        </GlobalIcons>
        <Categories
          choosedCategory={choosedCategory}
          setCategory={this.setCategory}
          modal={modalOpen}
        />
        <CatList choosedCategory={choosedCategory} />
      </>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import style from './search-bar.scss';

class SearchBar extends React.Component {
  static propTypes = {
    onHandleSubmit: PropTypes.func,
  };

  handleSubmit = event => {
    event.preventDefault();
    const text = event.target['search-text'].value;
    const { onHandleSubmit } = this.props;
    onHandleSubmit(text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style['search-bar']}>
        <input name="search-text" type="hidden" value="react" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchBar;

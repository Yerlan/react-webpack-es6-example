//This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

//Validation of proptype children
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
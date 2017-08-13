import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

// Import Components
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Center from './components/Center/Center';
import Footer from './components/Footer/Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="5S Twitter"
            titleTemplate="%s - 5S Twitter"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header />
          <Center />
          <Footer />
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
export const mapStateToProps = store => ({ intl: store.intl });

export default connect(mapStateToProps)(App);

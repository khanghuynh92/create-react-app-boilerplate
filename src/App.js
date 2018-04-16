import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { routes } from './routes';
import store from './state';


const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <div className="app">
        <Header  />

        <Container>
          <div className="row justify-content-md-center">
            <div className="col col-md-6">
              {routes.map((route) => (
                <Route {...route} />
              ))}
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    </Router>
  </ReduxProvider>
);

export default App;

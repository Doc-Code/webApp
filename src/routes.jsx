import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import CounterPage from 'components/CounterPage';
import HelloWorldPage from 'components/HelloWorldPage';
import TimePage from 'components/TimePage';
import LoginPage from 'components/LoginPage';

// import { isUserSignedIn } from 'redux/models/user';

// function requireAuth(nextState, transition, cb) {
//   setTimeout(() => {
//     if (!isUserSignedIn(store.getState())) {
//       transition('/');
//     }
//     cb();
//   }, 0);
// }

export  default (
  <Route component={App} path='/'>
    <IndexRoute component={HelloWorldPage} />
    <Route component={CounterPage} path='counters' />
    <Route component={TimePage} path='time' />
    <Route component={LoginPage} path='login' />

  </Route>
  );

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../../Home/Home';
import CleanBots from '../../../CleanBots/CleanBots';
import ManageLists from '../../../ManageLists/ManageLists';
import NoMatch from '../../../NoMatch/NoMatch';

// Import Style
import styles from './Center.css';

const Center = () => {
  return (
    <div className="container">
      <div className={styles.centerPane}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clean-bots" component={CleanBots} />
          <Route exact path="/manage-lists" component={ManageLists} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default Center;

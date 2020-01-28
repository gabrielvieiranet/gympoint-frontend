import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students';
import StudentsAdd from '../pages/StudentsAdd';
import Plans from '../pages/Plans';
import Registrations from '../pages/Registrations';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} exact isPrivate />
      <Route path="/students/:id" component={StudentsAdd} isPrivate />
      <Route path="/studentsAdd" component={StudentsAdd} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/helporders" component={HelpOrders} isPrivate />
    </Switch>
  );
}

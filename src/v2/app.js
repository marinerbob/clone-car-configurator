import React from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import ReduxLayout from "./layouts/reduxLayout";
import MarkupLayout from "./layouts/markupLayout";
import RouterLayout from "./layouts/routerLayout";

import { Switch, Route, Redirect } from 'react-router-dom'; 

import Car from './steps/car.jsx'
import Exterior from './steps/exterior.jsx';
import Summary from './steps/summary.jsx';

export default function App() {
  return (
    <ReduxLayout>
      <RouterLayout>
        <MarkupLayout>
            <Switch>
                <Route path="/car" component={Car} />
                <Route path="/exterior" component={Exterior}/>
                <Route path="/summary" component={Summary} />
                <Route path="/">
                    <Redirect to="/car" />
                </Route>
            </Switch>
        </MarkupLayout>
      </RouterLayout>
    </ReduxLayout>
  );
}

import React from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import ReduxLayout from "./layouts/reduxLayout";
import MarkupLayout from "./layouts/markupLayout";
import RouterLayout from "./layouts/routerLayout";

import StepsContainer from './steps/stepsContainer.jsx';

export default function App() {
  return (
    <ReduxLayout>
      <RouterLayout>
        <MarkupLayout>
            <StepsContainer />
        </MarkupLayout>
      </RouterLayout>
    </ReduxLayout>
  );
}

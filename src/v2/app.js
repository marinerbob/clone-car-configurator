import React from "react";

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ReduxLayout from './layouts/reduxLayout';
import MarkupLayout from './layouts/markupLayout';
import Carousel from './components/carousel';

export default function App() {
    return (
        <ReduxLayout>
            <MarkupLayout>
                <Carousel />
            </MarkupLayout>
        </ReduxLayout>
    );
}
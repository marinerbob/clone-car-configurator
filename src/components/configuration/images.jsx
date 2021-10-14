import React from 'react';

import { Form, Image } from 'react-bootstrap';

export default () => (<div className="d-flex flex-wrap justify-content-center">
    <Form.Check type="radio">
        <Form.Check.Input type="radio" className="d-none" />
        <Form.Check.Label className="mr-xs-1">
            <Image thumbnail
                src={`${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_1.png`}
                alt="test"
            /></Form.Check.Label>
    </Form.Check>
    <Form.Check  type="radio">
        <Form.Check.Input name="0" type="radio" className="d-none" />
        <Form.Check.Label>
            <Image thumbnail
                src={`${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_2.png`}
                alt="test"
            /></Form.Check.Label>
    </Form.Check>
    <Form.Check type="radio">
        <Form.Check.Input name="1" type="radio" className="d-none" />
        <Form.Check.Label>
            <Image thumbnail
                src={`${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_2.png`}
                alt="test"
            /></Form.Check.Label>
    </Form.Check>
</div>
);
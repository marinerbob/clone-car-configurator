import React from 'react';

import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Option = ({ label, key, value, isActive }) => (
<ListGroup.Item active={isActive} eventKey={value}>
    {label}
</ListGroup.Item>);

const List = ({ options }) => (<ListGroup>
    {options.map(o => (
        <Option key={o.value} label={o.label} value={o.value} />
    ))}
</ListGroup>);

const ListContainer = props => {
    const dispatch = useDispatch();
    //const activeOption = useSelector();

    return (
        <List {...props} />
    );
}

const SettingsContainer = ({ label, settings }) => {
    return (<>
        { label && <h1 className="p-3">{label}</h1> }
        {settings.map(s => (
            <div key={s.prop} className="p-3">
                {s.label && <h2>{s.label}</h2>}
                {s.upperDescription && <p className="p-2 fw-light">{s.upperDescription}</p>}
                <ListContainer prop={s.prop} options={s.options} />
                {s.lowerDescription && <p className="p-2 fw-light">{s.lowerDescription}</p>}
            </div>
        ))}
    </>);
};

export default SettingsContainer;
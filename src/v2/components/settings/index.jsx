import React from 'react';

import { ListGroup } from 'react-bootstrap';

const Option = ({ label, key, value, isActive }) => (
<ListGroup.Item active={isActive} eventKey={value}>
    {label}
</ListGroup.Item>);

const List = ({ options }) => (<ListGroup>
    {options.map(o => (
        <Option label={o.label} value={o.value} />
    ))}
</ListGroup>);

const SettingsContainer = ({ settings }) => {
    return (<>
        {settings.map(s => (
            <div key={s.prop} className="p-3">
                {s.label && <h2>{s.label}</h2>}
                <List options={s.options} />
            </div>
        ))}
    </>);
};

export default SettingsContainer;
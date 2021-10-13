import React from 'react';

import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentProp } from '../../reduxSetup/currentConfigSlice/selectors';
import { updateConfig } from '../../reduxSetup/currentConfigSlice';

const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
  
const formatPrice = (value, zero = "included") => {
    if (isNaN(value)) return null;
    return value === 0 ? zero : `$${formatNumber(value)}`;
};
  

const OptionContainer = props => {
    const dispatch = useDispatch();
    const activeOption = useSelector(getCurrentProp(props.prop));
    const isActive = props.value === activeOption;

    const onClick = () => {
        if (!isActive) {
            dispatch(updateConfig({
                value: props.value,
                prop: props.prop
            }))
        }
    }

    return (<Option onClick={onClick} isActive={isActive} {...props}/>);
}

const Option = ({ onClick, label, showPrice, price, value, isActive }) => (
<ListGroup.Item onClick={onClick} className="p-2 d-flex justify-content-between" active={isActive} eventKey={value}>
    <span>{label}</span>
    { showPrice && <span>{formatPrice(price)}</span>}
</ListGroup.Item>);

const List = ({ prop, options, showPrice }) => (<ListGroup>
    {options.map(o => (
        <OptionContainer prop={prop} showPrice={showPrice} key={o.label} {...o} />
    ))}
</ListGroup>);


const SettingsContainer = ({ label, settings }) => {
    return (<>
        { label && <h1 className="p-3">{label}</h1> }
        {settings.map(s => (
            <div key={s.prop} className="p-3">
                {s.label && <h2>{s.label}</h2>}
                {s.upperDescription && <p className="p-2 fw-light">{s.upperDescription}</p>}
                <List showPrice={s.showPrice} prop={s.prop} options={s.options} />
                {s.lowerDescription && <p className="p-2 fw-light">{s.lowerDescription}</p>}
            </div>
        ))}
    </>);
};

export default SettingsContainer;
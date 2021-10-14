import React from "react";

import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  getCurrentProp,
  getCurrentPropValue,
} from "../../reduxSetup/currentConfigSlice/selectors";
import { updateConfig } from "../../reduxSetup/currentConfigSlice";

import { formatPrice } from "../../utils/generalUtils.js";

const OptionContainer = (props) => {
  const dispatch = useDispatch();
  const activeOption = useSelector(getCurrentProp(props.prop));
  console.log(activeOption, props.prop);

  const isActive = props.value === activeOption;

  const onClick = () => {
    if (!isActive) {
      dispatch(
        updateConfig({
          value: props.value,
          prop: props.prop,
        })
      );
    }
  };

  return <Option onClick={onClick} isActive={isActive} {...props} />;
};

const Option = ({ onClick, label, showPrice, price, value, isActive }) => (
  <ListGroup.Item
    onClick={onClick}
    className="p-2 d-flex justify-content-between"
    active={isActive}
    eventKey={value}
  >
    <span>{label}</span>
    {showPrice && <span>{formatPrice(price)}</span>}
  </ListGroup.Item>
);

const List = ({ prop, options, showPrice }) => (
  <ListGroup>
    {options.map((o) => (
      <OptionContainer prop={prop} showPrice={showPrice} key={o.label} {...o} />
    ))}
  </ListGroup>
);

const SettingsContainer = ({ label, settings }) => {
  const typesInfo = useSelector(getCurrentPropValue("car_type"));
  return (
    <>
      {label && <h1 className="p-3">{label}</h1>}
      {settings.map((s) => (
        <div key={s.prop} className="p-3">
          {s.label && <h2>{s.label}</h2>}
          {s.upperDescription && (
            <p className="p-2 fw-light">{s.upperDescription}</p>
          )}
          <List showPrice={s.showPrice} prop={s.prop} options={s.options} />
          {typesInfo && typesInfo.benefits && (
            <div className="p-3">
              <h3 className="p-2">Benefits:</h3>
                {typesInfo.benefits.map((b, ind) => (
                    <li key={ind}>{b}</li>
                ))}
            </div>
          )}
          {s.lowerDescription && (
            <p className="p-2 fw-light">{s.lowerDescription}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default SettingsContainer;

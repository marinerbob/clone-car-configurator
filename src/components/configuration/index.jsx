import React from "react";

import { ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  getCurrentProp,
  getCurrentPropValue,
} from "../../reduxSetup/currentConfigSlice/selectors";
import { updateConfig } from "../../reduxSetup/currentConfigSlice";

import { formatPrice } from "../../utils/generalUtils.js";

import "./settings.css";

const OptionContainer = (props) => {
  const dispatch = useDispatch();
  const activeOption = useSelector(getCurrentProp(props.prop));
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

const Option = ({
  type,
  onClick,
  label,
  src,
  showPrice,
  price,
  value,
  isActive,
}) => (
  <ListGroup.Item
    onClick={onClick}
    className="p-2 d-flex justify-content-between"
    active={isActive}
    eventKey={value}
  >
    {type === 'text' && (
      <>
        <span>{label}</span>
        {showPrice && <span>{formatPrice(price)}</span>}
      </>
    )}
    {type === 'color' && (
      <>
        <span className="d-flex align-items-center">{label}<div style={{ border: '1px solid #333', display: 'inline-block', width: '25px', height: '25px', opacity: '0.4', borderRadius: '50%', marginLeft: '15px', backgroundColor: value }}></div></span>
        {showPrice && <span>{formatPrice(price)}</span>}
      </>
    )}
    {type === 'image' && (
      <Image
        className="option-image"
        src={src}
        alt={label}
      />
    )}
  </ListGroup.Item>
);

const List = ({ type, prop, options, showPrice }) => (
  <ListGroup horizontal={type === "image"}>
    {options.map((o) => (
      <OptionContainer type={type} prop={prop} showPrice={showPrice} key={o.label} {...o} />
    ))}
  </ListGroup>
);

const SettingsBlock = ({ setting }) => {
  const currentSettingInfo = useSelector(getCurrentPropValue(setting.prop));

  return (
    <div key={setting.prop} className="p-3">
      {setting.label && <h2>{setting.label}</h2>}
      {setting.upperDescription && (
        <p className="p-2 fw-light">{setting.upperDescription}</p>
      )}
      <List
        type={setting.type}
        showPrice={setting.showPrice}
        prop={setting.prop}
        options={setting.options}
      />
      {currentSettingInfo && currentSettingInfo.benefits && (
        <div className="p-3">
          <h3>Benefits:</h3>
          {currentSettingInfo.benefits.map((b, ind) => (
            <li key={ind}>{b}</li>
          ))}
        </div>
      )}
      {setting.type === "image" && (
        <div className="d-flex justify-content-between">
          <span>{currentSettingInfo.label}</span>
          <span>{formatPrice(currentSettingInfo.price)}</span>
        </div>
      )}
      {setting.lowerDescription && (
        <p className="p-2 fw-light">{setting.lowerDescription}</p>
      )}
    </div>
  );
};

const SettingsContainer = ({ label, settings }) => {
  return (
    <>
      {label && <h1 className="p-3">{label}</h1>}
      {settings.map((s) => (
        <SettingsBlock key={s.prop} setting={s} />
      ))}
    </>
  );
};

export default SettingsContainer;

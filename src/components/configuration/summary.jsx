import React from "react";
import { ListGroup } from "react-bootstrap";

import { useSelector } from "react-redux";

import {
  getSummaryInfo,
  getCurrentPrice,
  getCurrentCarModel
} from "../../reduxSetup/currentConfigSlice/selectors";
import { formatPrice } from "../../utils/generalUtils";

const SummaryItem = ({ label, price }) => (
  <ListGroup.Item className="d-flex justify-content-between">
    <span>{label}</span>
    <span>{formatPrice(price)}</span>
  </ListGroup.Item>
);

const Summary = ({ label }) => {
  const summaryInfo = useSelector(getSummaryInfo);
  const price = useSelector(getCurrentPrice);
  const model = useSelector(getCurrentCarModel);

  return (
    <div className="p-3">
      {label && <h1>{label}</h1>}
      <h3 className="p-3">{model.label}</h3>
      <ListGroup variant="flush">
        {summaryInfo.map((summaryItem, ind) => (
          <SummaryItem
            key={ind}
            label={summaryItem.label}
            price={summaryItem.price}
          />
        ))}
      </ListGroup>
      <h3 className="p-3 d-flex justify-content-between">
        <span>Overall:</span>
        <span>{formatPrice(price)}</span>
      </h3>
    </div>
  );
};

export default Summary;

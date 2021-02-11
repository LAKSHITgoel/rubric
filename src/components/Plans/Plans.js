import React from "react";
import PropTypes from "prop-types";

import Card from "./components/Card";

import {Row, Col} from "antd";

const propTypes = {
  data: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
};

const Plans = ({
  data,
  selected,
  handleModal
}) => {
  if (!data) return null;
  const plansList = Object.values(data[selected].plans);
  return (
    <Row>
      {
        plansList.map((plan) => {
          return (
            <Col span={6}>
              <Card
                data={plan}
                selected={selected}
                handleModal={handleModal}
              />
            </Col>
          );
        })
      }
    </Row>
  );
};

Plans.propTypes = propTypes;

export default Plans;

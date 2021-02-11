import React from "react";
import PropTypes from "prop-types";

import {Radio} from "antd";

const propTypes = {
  data: PropTypes.object.isRequired,
  handleTabPosition: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

const TabBar = ({
  data,
  handleTabPosition,
  selected
}) => {
  const plansList = Object.values(data);
  return (
    <Radio.Group value={selected} onChange={handleTabPosition}>
        {plansList && plansList.map((obj) => {
            return (
            <Radio.Button
              key={obj.id}
              value={obj.id}
            >
                {obj.id}
            </Radio.Button>
            );
        })}
    </Radio.Group>
  );
}

TabBar.propTypes = propTypes;

export default TabBar;

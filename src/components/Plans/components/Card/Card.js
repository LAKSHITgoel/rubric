import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

import {Divider} from "antd";

const propTypes = {
    data: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    handleModal: PropTypes.func.isRequired
};

const Card = ({
        data,
        selected,
        handleModal
    }) => {
    return (
        <div className="plan-card">
            {
            data.banner ? (
                <div className="card-banner">
                    <h4 className="banner"> {data.banner} </h4>
                </div>
            ) : (<div className="banner-placeholder" />)
            }
            <div className="card-header">
                <h4 className="plan-name"> {data.planName} </h4>
            </div>
            <div className="card-body" style={{backgroundColor: data.default ? "floralwhite": "white"}}>
                <div className="plan-details">
                    <h1 className="plan-details-value"> {data.pricePerLiveTransfer} </h1>
                    <h4 className="plan-details-key"> Per Qualified Leads </h4>
                </div>
                <Divider dashed/>
                <div className="plan-details">
                    <h4 className="plan-details-key"> Qualified Leads Per Month </h4>
                    <h3 className="plan-details-value">

                        {data.qualifiedLeadsPerMonth}
                    </h3>
                </div>
                <Divider dashed/>
                <div className="plan-details">
                    <h4 className="plan-details-key"> Platform Fee Per Month </h4>
                    <h3 className="plan-details-value"> {data.totalPlatformPrice} </h3>
                </div>
            </div>
            <div className="card-footer">
                <h3 className="final-price"> {`${data.finalPackagePrice}/mo`} </h3>
            </div>
            <div className="card-button" style={{backgroundColor: data.default ? "tomato": null}} onClick={() => handleModal(data.planName)}>
                <h4 className="btn-text" style={{color: data.default ? "white": null}}>Start Your Trail</h4>
            </div>
        </div>
    );
};

Card.propTypes = propTypes;

export default Card;

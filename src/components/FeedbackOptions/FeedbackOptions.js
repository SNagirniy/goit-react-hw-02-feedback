import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import propTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback}) => { 
    return (
        <Fragment>
           {Object.keys(options).map(option => <button className={s.button} key={option} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>)}
        </Fragment>

    )

};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: propTypes.object.isRequired,
    onLeaveFeedback: propTypes.func.isRequired
};
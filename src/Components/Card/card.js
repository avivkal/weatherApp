import React from 'react';
import { DAYS } from '../../Constants/const';
import { Card, NavLink } from 'react-bootstrap';
import './card.scss';
import { ICON_PATH_1, ICON_PATH_2 } from '../../Constants/const'
import { convertIconPath } from '../../UtilityFunctions/functions'
import propTypes from 'prop-types';

const card = (props) => {
    return (
        <Card className="col-xl-2 cards-style">
            <Card.Body >
                <Card.Title className="cards-title">{DAYS[(props.today + props.index) % 7]}</Card.Title>
                <div className="cards-text card-margin">
                    {props.currentDay.Temperature.Minimum.Value}  - {props.currentDay.Temperature.Maximum.Value} °{props.unit}
                    <div className="row icons-day-night justify-content-center">
                        <span className="d-flex justify-content-start span-width">Day:</span>
                        <img className="icons-images" src={ICON_PATH_1 + convertIconPath(props.currentDay.Day.Icon) + ICON_PATH_2} alt="weather icon day"></img>
                    </div>
                    <div className="row icons-day-night justify-content-center">
                    <span className="d-flex justify-content-start span-width">Night:</span>
                        <img className="icons-images" src={ICON_PATH_1 + convertIconPath(props.currentDay.Night.Icon) + ICON_PATH_2} alt="weather icon night"></img>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

card.propTypes = {
    currentDay: propTypes.object,
    unit: propTypes.string,
    index: propTypes.number,
    today: propTypes.number 
}

export default card;
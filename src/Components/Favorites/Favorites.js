import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.scss'
import { CSSTransitionGroup } from 'react-transition-group';
import * as generalActions from '../../Store/Actions/actions'
import * as favoritesActions from '../../Store/Actions/favoritesActions'
import axios from 'axios'
import { API_PATH } from '../../Constants/const'
import { forLoopconvertFahrenheitToCelsius } from '../../UtilityFunctions/functions'
import CardsList from '../CardsList/cardsList'
import { HOME_PATH } from '../../Constants/const'
import {getFavorites} from '../../UtilityFunctions/localStorageFunctions'


class Favorites extends Component {

    componentDidMount() {
        const oldFavorites = getFavorites();
        let requests = [];
        if (this.props.firstTimeFavorites) {
            for (const favorite of oldFavorites) {
                requests.push(
                    axios.all([axios.get('forecasts/v1/daily/5day/' + favorite.key + API_PATH),
                    axios.get('currentconditions/v1/' + favorite.key + API_PATH)])
                )
            }
            Promise.all(requests).then((response) => {
                for (let i = 0; i < response.length; i++) {
                    oldFavorites[i].fiveDaysForecast = this.props.unit === 'C' ? forLoopconvertFahrenheitToCelsius(response[i][0].data.DailyForecasts) : response[i][0].data.DailyForecasts;
                    oldFavorites[i].currentStateOfWeather = response[i][1].data[0].WeatherText;
                    oldFavorites[i].currentTemp = this.props.unit === 'C' ? Math.floor(response[i][1].data[0].Temperature.Metric.Value) : Math.floor(response[i][1].data[0].Temperature.Imperial.Value);
                    oldFavorites[i].icon = response[i][1].data[0].WeatherIcon < 10 ? '0' + response[i][1].data[0].WeatherIcon : response[i][1].data[0].WeatherIcon;
                }
                //at the end
                this.props.updateFavorites(oldFavorites);
                this.props.firstTimeFinishedFavorites();
            })
        }
    }

    handleClickOnCard = (clickedFavorite) => {
        this.props.history.push(HOME_PATH);
        this.props.clearText();
        this.props.setFavoriteCityDetails(clickedFavorite);

    }

    render() {
        return (
            <div className={this.props.darkMode ? 'dark' : 'light'}>
                <CSSTransitionGroup transitionName="cards"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>

                    <CardsList
                        click={(currentFavorite) => this.handleClickOnCard(currentFavorite)}
                        unit={this.props.unit}
                        favorites={this.props.favorites}
                        darkMode={this.props.darkMode}
                        isFav={true}
                    />
                </CSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        current: state.current,
        darkMode: state.darkmode,
        unit: state.unit,
        firstTimeFavorites: state.firstTimeFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFavoriteCityDetails: (clickedFavorite) => dispatch(favoritesActions.setFavoriteCityDetails(clickedFavorite)),
        clearText: () => dispatch(generalActions.clear()),
        firstTimeFinishedFavorites: () => dispatch(favoritesActions.firstTimeFinishedFavorites()),
        updateFavorites: (favorites) => dispatch(generalActions.updateFavorites(favorites)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
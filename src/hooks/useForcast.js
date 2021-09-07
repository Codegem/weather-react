import { useState } from 'react';
import axios from 'axios';
import getCurrentdayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForcast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        if (!data || data.length === 0) {
            setError('There is no such location');
            setLoading(false);
            return;
        }

        return data;
    };

    const getForecastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);

        if (!data || data.length === 0) {
            setError('Something went wrong.');
            setLoading(false);
            return;
        }

        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentdayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);
        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };

    // call api
    const submitRequest = async location => {
        setLoading(true);
        setError(false);

        const response = await getWoeid(location);
        const data = await getForecastData(response[0].woeid);
        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};
export default useForcast;

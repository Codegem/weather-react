import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import styles from './Page.module.css';
import useForcast from '../../hooks/useForcast';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForcast();

    const onSubmit = value => {
        submitRequest(value);
    };
    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;

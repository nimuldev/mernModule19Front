import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center py-lg-5">


             <Spinner animation="grow" />

        </div>
    );
};

export default Loader;
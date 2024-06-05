import React from 'react';
import './index.css'

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-container">
                        <div className="error-code">404</div>
                        <div className="error-message">Oops! The page you're looking for doesn't exist.</div>
                        <a href="/" className="btn btn-primary home-button">Go Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

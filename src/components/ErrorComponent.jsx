import React from 'react';
import { useParams } from 'react-router-dom';

const ErrorComponent = () => {
    const { code } = useParams();

    const getErrorDescription = (code) => {
        switch (code) {
            case '404':
                return {
                    title: 'Page Not Found',
                    description: 'The page you are looking for might have been removed or is temporarily unavailable.',
                };
            case '500':
                return {
                    title: 'Internal Server Error',
                    description: 'Something went wrong on our end. Please try again later.',
                };
            case '403':
                return {
                    title: 'Forbidden',
                    description: 'You do not have permission to access this page.',
                };
            case '400':
                return {
                    title: 'Bad Request',
                    description: 'The server could not understand the request due to invalid syntax.',
                };
            default:
                return {
                    title: 'Unknown Error',
                    description: 'An unknown error occurred. Please try again later.',
                };
        }
    };

    const { title, description } = getErrorDescription(code);

    return (
        <div className="container">
            <div className="row" style={{ margin: '15px 0' }}>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">{title}</h3>
                    <div className="card-body">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorComponent;

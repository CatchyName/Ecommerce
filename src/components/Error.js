import React from 'react';
import propTypes from 'prop-types';

const Error = ({ code, message }) => {
	return (
		<div className="error">
			<h1>Error {code}.</h1>
			<h3>{message}</h3>
		</div>
	);
};

Error.propTypes = {
	code: propTypes.number.isRequired,
	message: propTypes.string.isRequired
};

export default Error;
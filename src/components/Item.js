import React from 'react';
import propTypes from 'prop-types';

const Item = ({ data }) => {
	return (
		<div className='item'>
			<img className='itemImage' src={data.imageURL} />
			<h3 className='itemTitle'>{data.title}</h3>

		</div>
	);
};

Item.propTypes = {
	data: propTypes.object.isRequired
};

export default Item;
import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		const getApi = async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				setProduct(response.data);
			} catch {
				console.log('error');
			}
		};
		getApi();
	}, []);
	
	return (

		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (id, product) => {
		const newItem = { ...product, amount: 1 };

		const itemCart = cart.find((item) => {
			return item.id === id;
		});

		if (itemCart) {
			const newCartItem = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: item.amount + 1 };
				} else {
					return item;
				}
			});

			setCart(newCartItem);
		} else {
			setCart([...cart, newItem]);
		}
	};

	return (
		<CartContext.Provider value={{ addToCart, cart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

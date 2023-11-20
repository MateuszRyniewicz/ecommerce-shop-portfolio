import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [itemAmount, setItemAmount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const total = cart.reduce((acc, currentItem) => {
			return acc + currentItem.price * currentItem.amount;
		}, 0);

		setTotal(total);
	}, [cart]);

	useEffect(() => {
		if (cart) {
			const amount = cart.reduce((acc, item) => {
				return acc + item.amount;
			}, 0);
			setItemAmount(amount);
		}
	}, [cart]);

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

	const removeToCart = (id) => {
		const item = cart.filter((item) => {
			return item.id !== id;
		});

		setCart(item);
	};

	const clearCart = () => {
		setCart([]);
	};

	const increaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);

		addToCart(id, cartItem);
	};

	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount - 1 };
				} else {
					return item;
				}
			});

			setCart(newCart);
		}
		if (cartItem.amount < 2) {
			removeToCart(id);
		}
	};

	return (
		
		<CartContext.Provider
			value={{
				decreaseAmount,
				increaseAmount,
				clearCart,
				removeToCart,
				addToCart,
				cart,
				itemAmount,
				total,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

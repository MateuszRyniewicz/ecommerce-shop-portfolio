import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItem';

import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
	const { isOpen, handleClose } = useContext(SidebarContext);
	const { total, cart, clearCart } = useContext(CartContext);

	return (
		<div
			className={`${
				isOpen ? 'right-0 ' : '-right-full '
			}w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
			<div className='flex justify-between items-center py-6 border-b'>
				<div className='uppercase text-sm font-semibold'>
					Shopping Bag ({cart.length})
				</div>
				<div
					onClick={() => handleClose()}
					className='cursor-pointer w-8 h-8 flex justify-center items-center'>
					<IoMdArrowForward className='text-2xl' />
				</div>
			</div>
			<div className='flex flex-col gap-y-2 h-[520px] lg:h-[600px] overflow-y-auto overflow-x-hidden border-b'>
				{cart.map((item) => {
					return <CartItem item={item} key={item.id}></CartItem>;
				})}
			</div>
			<div className='flex flex-col gap-y-2 py-1 mt-2'>
				<div className='flex items-center justify-between'>
					<div className='uppercase font-semibold text-sm'>
						<span className='mr-2'>Total</span>$ {Number(total)}
					</div>
					<div
						onClick={() => clearCart()}
						className='cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center'>
						<FiTrash2 />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

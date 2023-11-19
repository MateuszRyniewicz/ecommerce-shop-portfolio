import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
const CartItem = ({ item }) => {
	console.log(item);
	const { id, title, price, image, amount } = item;
	return (
		<div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
			<div className='w-full min-h-[150px] flex items-center gap-x-4'>
				<Link to={`/product/${id}`}>
					<img className='max-w-[60px]' src={image} alt={title} />
				</Link>
				<div className='w-full flex flex-col'>
					<div className='flex justify-between mb-2'>
						<Link
							to={`product/${id}`}
							className='text-[13px] uppercase font-semibold max-w-[200px] text-primary hover:underline'>
							{title}
						</Link>
						<div className='text-xl cursor-pointer'>
							<IoMdClose className='text-gray-500 hover:text-red-500 transition' />
						</div>
					</div>
					<div className='flex gap-x-2 h-[26px] text-[12px]'>
						<div className='flex flex-1 max-w-[80px] items-center h-full border text-primary font-medium'>
							<div className='flex-1 flex justify-center items-center cursor-pointer'>
								<IoMdRemove />
							</div>
							<div className='h-full flex justify-center items-center px-2'>
								{amount}
							</div>
							<div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
								<IoMdAdd />
							</div>
						</div>

						<div className='flex-1 flex items-center justify-around'>
							${price}
						</div>
						<div className='flex-1 flex justify-end items-center text-primary font-medium'>
							$ {`${Number(price * amount).toFixed(2)}`}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

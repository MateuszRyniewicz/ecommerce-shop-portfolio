import React, { useContext } from 'react';

import Hero from '../components/Hero';
import Product from '../components/Product';

import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
	const { products } = useContext(ProductContext);

	const filteredList = products.filter((product) => {
		return (
			product.category === "men's clothing" ||
			product.category === "women's clothing"
		);
	});

	return (
		<div>
			 <Hero />
			<section className='py-16'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid:cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:md:max-w-none md:mx-0'>
						{filteredList.map((product) => {
							return <Product key={product.id} product={product} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;

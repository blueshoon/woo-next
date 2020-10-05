import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import clientConfig from '../client-config';
import { isEmpty } from 'lodash';
import React from 'react';

const Product = ( props ) => {

	const { product } = props;

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="col-sm-12">
				<h3 className="text-center">
					{ product.name ? product.name : '' }
				</h3>

				<Link
					as={ `/product/${ product.slug }`}
					href={`/product/[slug]`}
				>
					<a>
						{ !isEmpty( product.image ) ? (
							<img src={ product.image.sourceUrl } width="200" alt="Product image"/>
						) : !isEmpty( clientConfig.productImagePlaceholder ) ? (
							<img
								src={ clientConfig.productImagePlaceholder }
								alt="Placeholder product image"
							/>
						) : null }
					</a>
				</Link>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">{ product.price }</h6>
					<AddToCartButton product={ product }/>
				</div>
			</div>
		) : (
			''
		)
	);
};

export default Product;

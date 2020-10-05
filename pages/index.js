import Layout from "../components/Layout";
import Product from "../components/Product";
import client from '../components/ApolloClient';
import PRODUCTS_QUERY from '../queries/products-only';

const Index = ( props ) => {

	const { products } = props;

	return (
			<Layout>
				{/*Products*/ }
				<h2 className="mt-5 text-center">Products</h2>
				<div className="product-container row">
					{ products.length ? (
						products.map( product => <Product key={ product.id } product={ product }/> )
					) : '' }
				</div>
			</Layout>
	)
};

Index.getInitialProps = async () => {

	const result = await client.query( {
		query: PRODUCTS_QUERY,
	} );

	return {
		products: result.data.products.nodes,
	}

};

export default Index;

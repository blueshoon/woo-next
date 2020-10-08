import Layout from "../components/Layout";
import Product from "../components/Product";
import SalesAgent from "../components/SalesAgent";
import client from '../components/ApolloClient';
import PRODUCTS_AND_AGENTS_QUERY from '../queries/products-and-agents';
import Login from "../pages/login";
import { AppContext } from '../components/context/AppContext';
import { useContext } from "react";

const Index = ( props ) => {

	const { products, agents, isLoggedIn } = props;
	const [hasToken] = useContext(AppContext);
	return (
			<Layout>
				{
					hasToken ? (
						<div>
							{/*Products*/ }
							<h2 className="mt-5 text-center">Products</h2>
							<div className="product-container row">
								{ products.length ? (
									products.map( product => <Product key={ product.id } product={ product }/> )
									) : '' }
							</div>
							<div>
								<SalesAgent agents={agents} />
							</div>
						</div>
					) : <Login />
				}
			</Layout>
	)
};

Index.getInitialProps = async () => {

	const result = await client.query( {
		query: PRODUCTS_AND_AGENTS_QUERY,
	} );

	return {
		products: result.data.products.nodes,
		agents: result.data.users.nodes,
	};
};

export default Index;

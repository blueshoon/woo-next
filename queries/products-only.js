import gql from "graphql-tag";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_QUERY = gql`query {

	  products(first: 1, where: { include: 5296 }) {
	    nodes {
	      id
	      productId
	      averageRating
	      slug
	      description
	      image {
	        id
          	uri
	        title
	        srcSet
	        sourceUrl
	      }
	      name
	      ... on SimpleProduct {
	        price
	        id
	      }
	      ... on VariableProduct {
	        price
	        id
	      }
	      ... on ExternalProduct {
	        price
	        id
	        externalUrl
	      }
	      ... on GroupProduct {
          	id
	        products {
	          nodes {
	            ... on SimpleProduct {
				  id
	              price
	            }
	          }
	        }
	        id
	      }
	    }
	  }
						
}`;

export default PRODUCTS_QUERY;

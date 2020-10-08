import React, { useState, useEffect } from 'react';
export const AppContext = React.createContext([
	{},
	() => {}
]);

export const AppProvider = ( props ) => {

	const [ cart, setCart ] = useState( null );
	const [hasToken, setHasToken] = useState( false );
	const [token, setToken] = useState( "" );

	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let cartData = localStorage.getItem( 'woo-next-cart' );
			cartData = null !== cartData ? JSON.parse( cartData ) : '';
			setCart( cartData );

		}

	}, [] );

	return (
		<AppContext.Provider value={ [ cart, setCart, hasToken, setHasToken, token, setToken ] }>
			{ props.children }
		</AppContext.Provider>
	);
};

import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useState } from 'react';

const Nav = () => {

	const [ show, setDisplay ] = useState( false );

	return (
		<nav className="woo-next-menu-container navbar-dark bg-primary">
			{/*Branding*/}
			<div className="woo-next-branding">
				<Link href="/">
					<a className="">Tonal</a>
				</Link>
			</div>

			{/*Navigation menu*/}
			<div className={ `woo-next-sub-menu-wrap ${ show ? 'show' : '' }` } id="">
			</div>

		{/*	Cart and Menu button*/}
		<div className="woo-next-cart-and-menu-btn">
			{/*Cart Icon*/}
			<div>
				<CartIcon />
			</div>
			{/*Menu toggle button for mobile*/}
			<button
				onClick={ () => setDisplay( ! show ) }
				className="woo-next-menu-btn" type="button" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
		</div>
		</nav>
	)
};

export default Nav;

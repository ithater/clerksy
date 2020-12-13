const header = () => {
	const $burger = document.querySelector('.header-burger');
	const $menu = document.querySelector('.header__menu');

	const toggleMenu = evt => {
		$burger.classList.toggle('header-burger--active');
		$menu.classList.toggle('header__menu--active');

	};

	$burger.addEventListener('click', toggleMenu)
};

export default header;

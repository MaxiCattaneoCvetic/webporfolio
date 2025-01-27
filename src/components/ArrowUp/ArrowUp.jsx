import { FaArrowUp } from 'react-icons/fa';
import style from './arr.module.css';

function ArrowUp() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={style.arrContainer}>
			<FaArrowUp className={style.arr} onClick={scrollToTop} />
		</div>
	);
}

export default ArrowUp;

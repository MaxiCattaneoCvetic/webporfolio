import Form from '../../components/form/Form.jsx';
import NavBar from '../../components/navBar/NavBar';
import Presentation from '../../components/presentation/Presentation.jsx';
import Projects from '../../components/projects/Projects.jsx';
import Technologies from '../../components/technologies/Technologies.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ArrowUp from '../../components/ArrowUp/ArrowUp.jsx';
import './home.css';
export default function Home() {
	return (
		<>
			<NavBar />
			<main className='mainContainer'>
				<ArrowUp />
				<Presentation />
				<Projects />
				<Technologies />
				<Form />
			</main>
			<Footer />
		</>
	);
}

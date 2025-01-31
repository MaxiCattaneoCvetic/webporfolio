/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import styles from './card.module.css';
import projectsData from '../../utils/projects';
import { FcNext, FcPrevious } from 'react-icons/fc';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Card() {
	const [open, setOpen] = useState(false);
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

	const onOpenModal = (index) => {
		setSelectedProjectIndex(index);
		setOpen(true);
	};

	const onCloseModal = () => setOpen(false);

	const [currentImageIndexes, setCurrentImageIndexes] = useState(
		Array(projectsData.length).fill(0),
	);

	const handlePrevButtonClick = (index) => {
		setCurrentImageIndexes((prevIndexes) => {
			const updatedIndexes = [...prevIndexes];
			updatedIndexes[index] =
				updatedIndexes[index] === 0
					? projectsData[index].image.length - 1
					: updatedIndexes[index] - 1;
			return updatedIndexes;
		});
	};

	const handleNextButtonClick = (index) => {
		setCurrentImageIndexes((prevIndexes) => {
			const updatedIndexes = [...prevIndexes];
			updatedIndexes[index] =
				updatedIndexes[index] === projectsData[index].image.length - 1
					? 0
					: updatedIndexes[index] + 1;
			return updatedIndexes;
		});
	};

	return (
		<section className={styles.cardContainer}>
			{projectsData.map((project, index) => (
				<article className={styles.card} key={project.id}>
					<figure className={styles.imageContainer}>
						<img
							src={project.image[currentImageIndexes[index]]}
							alt={project.title}
							style={{ width: '600px', height: 'auto' }}
							className={styles.projectImage}
						/>
						<div className={styles.imageButtons}>
							<button
								className={styles.prevButton}
								onClick={() => handlePrevButtonClick(index)}
								aria-label='Previous Image'
							>
								<FcPrevious
									style={{ fontWeight: 'bolder', fontSize: '2rem' }}
								/>
							</button>
							<button
								className={styles.nextButton}
								onClick={() => handleNextButtonClick(index)}
								aria-label='Next Image'
							>
								<FcNext style={{ fontWeight: 'bolder', fontSize: '2rem' }} />
							</button>
						</div>
					</figure>
					<h3 className={styles.projectTitle}>{project.title}</h3>
					<div className={styles.projectDetails}>
						<p
							style={{ maxHeight: '300px', overflowY: 'auto', padding: '12px' }}
						>
							{project.details}
						</p>
						<p
							className={styles.getMoreInfo}
							onClick={() => onOpenModal(index)}
						>
							Me gustaria saber mas sobre este proyecto...
						</p>
						<Modal
							center
							styles={{
								modal: {
									borderRadius: '10px',
									padding: '20px',
									fontFamily: "'Arial', sans-serif",
								},
							}}
							open={open && selectedProjectIndex === index}
							onClose={onCloseModal}
						>
							<div>
								<h2
									style={{
										textAlign: 'center',
										color: '#333',
										fontSize: '24px',
										marginBottom: '20px',
									}}
								>
									{project.title}
								</h2>
								<div
									style={{ lineHeight: '1.6', color: '#555', fontSize: '16px' }}
								>
									<ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
										{project.moredetails.split('\n').map((line, idx) => {
											const isEmojiLine = /^[\p{Emoji}]/u.test(line.trim());

											return isEmojiLine ? (
												<li key={idx} style={{ marginBottom: '10px' }}>
													{line.trim()}
												</li>
											) : (
												<p key={idx} style={{ marginBottom: '15px' }}>
													{line.trim()}
												</p>
											);
										})}
									</ul>
								</div>
							</div>
						</Modal>
					</div>
					<div className={styles.technologies}>
						<hr />
						<p style={{ padding: '10px' }}>Tecnologias:</p>
						<ul className={styles.technologyList}>
							{project.technologies.map((technology, index) => (
								<li style={{ color: technology.color }} key={index}>
									{technology.name}
								</li>
							))}
						</ul>
					</div>
					{project.url[0].isReady ? (
						<>
							<div className={styles.buttons}>
								<button className={styles.viewButton} aria-label='View Project'>
									<a
										target='_blank'
										style={{ textDecoration: 'none', color: '#fcfcfc' }}
										href={project.url[0].deploy}
									>
										Ver
									</a>{' '}
								</button>
								<button className={styles.codeButton} aria-label='View Code'>
									{project.url[0].codigo ? (
										<a
											target='_blank'
											style={{ textDecoration: 'none', color: '#fcfcfc' }}
											href={project.url[0].codigo}
										>
											Código
										</a>
									) : (
										<span
											style={{
												color: '#fcfcfc',
												textAlign: 'center',
												display: 'block',
											}}
										>
											El código de este proyecto es privado, si deseas verlo no
											dudes en contactarme.
										</span>
									)}
								</button>
							</div>
							<div>
								{project.url[0].isVideo ? (
									<button
										className={styles.viewButton}
										style={{ padding: '10px', background: 'red' }}
										aria-label='View Video'
									>
										<a
											target='_blank'
											style={{ textDecoration: 'none', color: '#fcfcfc' }}
											href={project.url[0].video}
										>
											Ver video de yotube
										</a>{' '}
									</button>
								) : (
									''
								)}
							</div>
						</>
					) : (
						<button disabled={true} className={styles.viewButton} aria-label='View Project'>
							<a
								target='_blank'
								style={{
									textDecoration: 'none',
									color: '#fcfcfc',
									cursor: 'no-drop',
								}}
							>
								Proyecto en desarrollo
							</a>{' '}
						</button>
					)}
				</article>
			))}
		</section>
	);
}

import profile from '../../../data/profile';

function Proceso() {
	return (
		<section id='proceso' className='process container'>
			<div className='about-grid'>
				<h2 className='label about-sticky' data-reveal>
					Proceso
				</h2>
				<div>
					<p className='about-lede' data-reveal>
						Así es trabajar conmigo: un camino claro, de la idea al proyecto
						funcionando.
					</p>
					<ol className='process-list'>
						{profile.proceso.map((paso, index) => (
							<li
								className='process-step'
								key={paso.titulo}
								data-reveal
								style={{ '--d': `${index * 0.05}s` }}
							>
								<span className='process-index' aria-hidden='true'>
									{String(index + 1).padStart(2, '0')}
								</span>
								<div>
									<h3 className='process-title'>{paso.titulo}</h3>
									<p className='process-desc'>{paso.descripcion}</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}

export default Proceso;

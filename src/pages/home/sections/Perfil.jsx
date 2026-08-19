import profile from '../../../data/profile';

function Perfil() {
	return (
		<section id='perfil' className='about container'>
			<div className='about-grid'>
				<h2 className='label about-sticky' data-reveal>
					Perfil
				</h2>
				<div>
					<p className='about-lede' data-reveal>
						{profile.lede}
					</p>
					{profile.bio.map((parrafo) => (
						<p className='about-body' data-reveal key={parrafo.slice(0, 24)}>
							{parrafo}
						</p>
					))}

					<h3 className='label xp-head' data-reveal>
						Experiencia
					</h3>
					<ul className='xp-list'>
						{profile.experiencia.map((xp) => (
							<li className='xp-item' key={xp.empresa} data-reveal>
								<span className='xp-periodo'>{xp.periodo}</span>
								<div>
									<h4 className='xp-puesto'>{xp.puesto}</h4>
									<span className='xp-empresa label'>{xp.empresa}</span>
									<p className='xp-desc'>{xp.descripcion}</p>
								</div>
							</li>
						))}
					</ul>

					<h3 className='label about-notes-head' data-reveal>
						Stack
					</h3>
					<ul className='about-capabilities' data-reveal>
						{profile.stack.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>

					<h3 className='label about-notes-head' data-reveal>
						Formación
					</h3>
					<ul className='about-notes' data-reveal>
						{profile.formacion.map((item) => (
							<li key={item.titulo}>
								{item.titulo} — {item.institucion} · {item.periodo} ·{' '}
								{item.estado}
							</li>
						))}
						{profile.extra.map((nota) => (
							<li key={nota}>{nota}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Perfil;

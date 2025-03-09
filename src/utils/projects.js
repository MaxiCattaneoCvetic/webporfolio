let colors = ["red", "blue", "green", "yellow", "purple", "orange", "grey"];

let projects = [
	{
		id: 0,
		image: [
			"/publicite/publicite1.png",
		],
		title: "Publicite 📚",
		details: `Desarollo de todo el backend para un proyecto llamado publicite.`,
		moredetails: `El proyecto aun esta en desarollo`,
		technologies: [
			{ name: "Nest.js", color: colors[0] },
			{ name: "MongoDB", color: colors[2] },
			{ name: "Firebase", color: colors[5] },
			{ name: "Google Cloud", color: colors[2] },
		],
		url: [
			{
				codigo: "https://github.com/renatobicego/publicite",
				deploy: "https://soonpublicite.vercel.app/",
				video: undefined,
				isReady: true,
				isVideo: false,
			},
		],
	},
	{
		id: 1,
		image: [
			"/mahatu/mahatu3.png",
			"/mahatu/mahatu4.png",
			"/mahatu/mahatu1.png",
			"/mahatu/mahatu2.png",
		],
		title: "Mahatu Consultorios 🦷",
		details: `Sistema de gestión de turnos online para la clínica odontológica Mahatu Consultorios.`,
		moredetails: `Junto con Mahatu Consultorios, desarrollé el backend de un sistema que les permitió evolucionar y agilizar procesos, mejorando la organización, la calidad de atención y la comodidad. 
      👨‍💻 Gestión de turnos online: Los pacientes pueden registrar turnos según disponibilidad del doctor, y el doctor asignar turnos a sus pacientes.
      📊 Análisis y control de facturación: Registro de pagos y métodos de pago con visualización en interfaz para mejor control de ingresos.
      📆 Gestión del calendario profesional: Asignación, programación o eliminación de turnos.
      🗒️ Gestión de pacientes: Fichas informativas con historial clínico detallado.
      ✔ Registro de anotaciones: Posibilidad de incluir notas específicas por turno.`,
		technologies: [
			{ name: "Node.js", color: colors[3] },
			{ name: "MongoDB", color: colors[2] },
		],
		url: [
			{
				codigo: undefined,
				deploy: "https://mahatu.vercel.app/",
				video: undefined,
				isReady: true,
				isVideo: false,
			},
		],
	},
	{
		id: 2,
		image: [
			"/safewallet/safewallet1.jpg",
			"/safewallet/safewallet2.jpg",
			"/safewallet/safewallet3.jpg",
			"/safewallet/safewallet4.png",
			"/safewallet/safewallet5.png",
		],
		title: "Safe Wallet 💸",
		details: `Safe Wallet es una billetera virtual desarrollada como mi proyecto final de la especialización en Backend.`,
		moredetails: `Es una billetera virtual que permite gestionar finanzas de forma sencilla y segura mediante una arquitectura de microservicios protegida con Keycloak.
      🔑 Protección con Keycloak: Manejo de autenticación y autorización seguro.
      🗂️ Historial personalizado: Cada transacción genera un registro que puede descargarse en formato PDF.
      🚀 Microservicios escalables: Diseño modular y flexible para manejar cargas altas.`,
		technologies: [
			{ name: "Java", color: colors[5] },
			{ name: "React.js", color: colors[3] },
			{ name: "MongoDB", color: colors[2] },
			{ name: "AWS", color: colors[5] },
			{ name: "Keycloak", color: colors[5] },
			{ name: "Docker", color: colors[3] },
		],
		url: [
			{
				codigo: "https://github.com/MaxiCattaneoCvetic/safeWallet",
				deploy: "https://safewallet-sooty.vercel.app/",
				video: "https://www.youtube.com/watch?v=LOh_LhYaQrc&ab_channel=Maxi",
				isReady: true,
				isVideo: true,
			},
		],
	},
	{
		id: 3,
		image: [
			"/wonder/wonder1.webp",
			"/wonder/wonder2.webp",
			"/wonder/wonder3.webp",
			"/wonder/wonder4.webp",
			"/wonder/wonder5.webp",
		],
		title: "Wonder Ventures 🛫",
		details: `Wonder Ventures es mi proyecto integrador final en Digital House, una plataforma de reservas de experiencias turísticas.`,
		moredetails: `La plataforma incluye:
      🌍 Gestión de contenido: Actualización de información sobre destinos, actividades y disponibilidad.
      👥 Roles de administrador y cliente: Acceso y permisos personalizados.
      🔄 Actualizaciones en tiempo real: Experiencia fluida para los usuarios.`,
		technologies: [
			{ name: "Java", color: colors[5] },
			{ name: "React.js", color: colors[3] },
			{ name: "MySQL", color: colors[1] },
			{ name: "AWS", color: colors[5] },
		],
		url: [
			{
				codigo: "https://github.com/MaxiCattaneoCvetic/WonderVentures",
				deploy: "http://wonderventures3.s3-website-us-east-1.amazonaws.com/",
				isReady: true,
				isVideo: false,
			},
		],
	},
	{
		id: 4,
		image: ["/odontomax/odontoMax.gif"],
		title: "Odonto Max 🦷",
		details: `Odonto Max, mi proyecto final de Backend I, diseñado para cubrir las necesidades de una clínica odontológica.`,
		moredetails: `El sistema incluye:
      🌐 API REST: Comunicación segura entre frontend y backend.
      🔒 Autenticación: Implementada con Spring Security.
      📈 Pruebas automatizadas: Uso de JUnit y MockMvc para validación del sistema.
      📋 Loggers: Integración con Log4j para monitoreo.`,
		technologies: [
			{ name: "Java", color: colors[5] },
			{ name: "React.js", color: colors[3] },
			{ name: "H2", color: colors[6] },
			{ name: "JUnit", color: colors[5] },
			{ name: "HTML", color: colors[0] },
			{ name: "CSS", color: colors[1] },
		],
		url: [
			{
				codigo: "https://github.com/MaxiCattaneoCvetic/ClinicaDentalS",
				deploy:
					"https://www.linkedin.com/feed/update/urn:li:activity:7051660449469054976/",
				isReady: true,
				isVideo: false,
			},
		],
	},
]
export default projects

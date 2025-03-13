
const colorMap = new Map([
	["java", "#007396"],
	["mongo", "#47A248"],
	["redis", "#DC382D"],
	["aws", "#FF9900"],
	["nest", "#E0234E"],
	["firebase", "#F5A623"],
	["google", "#669DF6"],
	["react", "#61DAFB"],
	["docker", "#2496ED"],
	["keycloak", "#D44638"],
	["h2", "#0096D6"],
	["sql", "#336791"],
	["junit", "#25A162"],
	["html", "#E34F26"],
	["css", "#1572B6"],
	["jest", "#99425B"],
	["supertest", "#6E40AA"]

]);


let projects = [
	{
		id: 0,
		image: [
			"/publicite/publicite1.png",
		],
		title: "Publicite 📚",
		details: `Red social para comprar, vender y publicar necesidades (En desarollo)`,
		moredetails: `Cree el backend de Publicité una red social en donde los usuarios tienen relaciones de amistad, grupos, revistas en donde guardan sus publicaciones junto con otros usuarios.
		 El sistema esta protegido con Clerk Auth, el cual utilizo para la autenticación de los usuarios.
		El backend esta construido en Nest Js bajo una arquitectura hexagonal y MongoDb para el almacenamiento.
		Tambien cree un socket en donde los usuarios pueden enviarse notificaciones en tiempo real, el socket no esta en este codigo ya que es un servicio aparte. Es un proyecto realmente desafiante y que pone a prueba mis conocimientos, estoy feliz de poder compartirlo♥️
		`,
		technologies: [
			{ name: "Nest.js", color: colorMap.get("nest") },
			{ name: "MongoDB", color: colorMap.get("mongo") },
			{ name: "Firebase", color: colorMap.get("firebase") },
			{ name: "Google Cloud", color: colorMap.get("google") },
			{ name: "Jest", color: colorMap.get("jest") },
			{ name: "Super Test", color: colorMap.get("supertest") },
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
			"/urlShorter/urlshorter_1.jpg",
			"/urlShorter/urlshorter_2.jpg",
		],
		title: "Url Shortener 🛜",
		details: `Esta aplicación convierte una URL larga proporcionada por el usuario y la convierte en una URL corta accesible.`,
		moredetails: `La estructura del backend esta hecha con Java springboot y para el almacenamiento de los datos y la utilización del cache Redis.
			Para hacer el deploy se utilizo AWS. un bucket s3 para el almacenamiento del front y una t2.micro para el almacenamiento del backend. (Ec2). Proyecto para entrevistas en Mercadolibre`,
		technologies: [
			{ name: "Java - Springboot", color: colorMap.get("java") },
			{ name: "Redis", color: colorMap.get("redis") },
			{ name: "AWS", color: colorMap.get("aws") },
		],
		url: [
			{
				codigo: "https://github.com/MaxiCattaneoCvetic/UrlShorterMeliBackend",
				deploy: undefined,
				video: undefined,
				isReady: true,
				isVideo: false,
			},
		],
	},
	{
		id: 2,
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
			{ name: "Node.js", color: colorMap.get("nest") },
			{ name: "MongoDB", color: colorMap.get("mongo") },
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
		id: 3,
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
			{ name: "Java", color: colorMap.get("java") },
			{ name: "React.js", color: colorMap.get("react") },
			{ name: "MongoDB", color: colorMap.get("mongo") },
			{ name: "AWS", color: colorMap.get("aws") },
			{ name: "Keycloak", color: colorMap.get("keycloak") },
			{ name: "Docker", color: colorMap.get("docker") },
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
		id: 4,
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
			{ name: "Java", color: colorMap.get("java") },
			{ name: "React.js", color: colorMap.get("react") },
			{ name: "MySQL", color: colorMap.get("sql") },
			{ name: "AWS", color: colorMap.get("aws") },
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
		id: 5,
		image: ["/odontomax/odontoMax.gif"],
		title: "Odonto Max 🦷",
		details: `Odonto Max, mi proyecto final de Backend I, diseñado para cubrir las necesidades de una clínica odontológica.`,
		moredetails: `El sistema incluye:
      🌐 API REST: Comunicación segura entre frontend y backend.
      🔒 Autenticación: Implementada con Spring Security.
      📈 Pruebas automatizadas: Uso de JUnit y MockMvc para validación del sistema.
      📋 Loggers: Integración con Log4j para monitoreo.`,
		technologies: [
			{ name: "Java", color: colorMap.get("java") },
			{ name: "React.js", color: colorMap.get("react") },
			{ name: "H2", color: colorMap.get("h2") },
			{ name: "JUnit", color: colorMap.get("junit") },
			{ name: "HTML", color: colorMap.get("html") },
			{ name: "CSS", color: colorMap.get("css") },
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

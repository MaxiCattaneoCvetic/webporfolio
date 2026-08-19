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
	["supertest", "#6E40AA"],
	["next", "#e8e8e8"],
	["typescript", "#3178C6"],
	["langgraph", "#7BD4C2"],
	["fastapi", "#009688"],
	["mcp", "#D97757"],
	["langchain", "#65C89B"],
	["whatsapp", "#25D366"],
]);

const projects = [
	{
		id: 6,
		slug: "clinicasup",
		nombre: "ClinicasUp",
		emoji: "🏥",
		categoria: "SaaS · Clínicas estéticas",
		stackCorto: "Next.js · PostgreSQL · IA",
		rol: "Product & Technology Lead",
		contexto: "Plataforma SaaS multi-tenant para clínicas y centros de estética",
		image: [
			"/clinicasup/clinicasup-1.png",
			"/clinicasup/clinicasup-2.png",
			"/clinicasup/clinicasup-3.png",
			"/clinicasup/clinicasup-4.png",
			"/clinicasup/clinicasup-5.png",
		],
		videos: [
			{ src: "/clinicasup/demo-desktop.mp4", formato: "horizontal" },
			{ src: "/clinicasup/demo-celular.mp4", formato: "vertical" },
		],
		details: `Plataforma de gestión para clínicas estéticas: agenda, pacientes, consentimientos, finanzas y un agente de IA que atiende las conversaciones de la clínica.`,
		moredetails: `Lideré el desarrollo end-to-end de ClinicasUp, una plataforma SaaS multi-tenant para operar clínicas estéticas: cada clínica administra sus sedes, roles y datos de forma aislada, con toda la operación en un solo lugar.
		📅 Agenda y turnos: el pulso de la jornada en un tablero con confirmaciones, próximos turnos y novedades en tiempo real.
		🧑‍⚕️ Pacientes y consentimientos: fichas de pacientes con historial y consentimientos digitales.
		🤖 Agente de IA: atiende WhatsApp e Instagram, responde precios y disponibilidad, agenda turnos solo y envía recordatorios; el equipo puede tomar control de la conversación cuando quiere. Construido con LangGraph, multi-LLM (Anthropic + OpenAI), conectado al CRM vía MCP.
		💼 Comercial y finanzas: módulos de gestión comercial y finanzas por sede.
		⚡ Tiempo real: los cambios se reflejan al instante en toda la plataforma (PostgreSQL LISTEN/NOTIFY + SSE).
		🔒 Seguridad: autenticación robusta, API keys cifradas, webhooks firmados y registro de auditoría.`,
		technologies: [
			{ name: "Next.js", color: colorMap.get("next") },
			{ name: "TypeScript", color: colorMap.get("typescript") },
			{ name: "PostgreSQL", color: colorMap.get("sql") },
			{ name: "AWS S3", color: colorMap.get("aws") },
			{ name: "LangGraph", color: colorMap.get("langgraph") },
			{ name: "FastAPI", color: colorMap.get("fastapi") },
			{ name: "MCP", color: colorMap.get("mcp") },
		],
		url: [
			{
				codigo: undefined,
				deploy: undefined,
				video: undefined,
				isReady: false,
				isVideo: false,
			},
		],
	},
	{
		id: 7,
		slug: "personal-assistant",
		nombre: "Personal Assistant",
		emoji: "🤖",
		categoria: "SaaS · CRM con IA",
		stackCorto: "Next.js · LangChain · WhatsApp",
		rol: "Product & Technology Lead",
		contexto: "Producto SaaS multi-tenant con asistente de IA por WhatsApp",
		image: [
			"/personal-assistant/personal-assistant-1.png",
			"/personal-assistant/personal-assistant-2.png",
			"/personal-assistant/personal-assistant-3.png",
			"/personal-assistant/personal-assistant-4.png",
		],
		details: `CRM multi-tenant con un asistente de IA por WhatsApp: clientes, proyectos, calendario, archivos y correo gestionados desde un solo lugar — o conversando con tu asistente.`,
		moredetails: `Personal Assistant es un CRM multi-tenant pensado para que cada profesional gestione su negocio desde un solo lugar, con un diferencial: un asistente de IA que atiende por WhatsApp y opera la plataforma por vos.
		🤖 Asistente por WhatsApp: consultás clientes, creás tareas o agendás reuniones conversando, sin abrir la app.
		👥 Contactos y clientes: la cartera organizada, con seguimiento y etiquetas por rubro.
		📋 Temas en Kanban: proyectos y tareas con prioridades y vencimientos.
		📅 Calendario integrado: sincronización con Google Calendar y Outlook, y links de disponibilidad para agendar reuniones.
		📁 Archivos y backups: documentos en AWS S3 asociados a clientes y espacios compartidos.
		🔒 Multi-tenant y seguro: datos aislados por cuenta y autenticación con JWT.`,
		technologies: [
			{ name: "Next.js", color: colorMap.get("next") },
			{ name: "TypeScript", color: colorMap.get("typescript") },
			{ name: "MongoDB", color: colorMap.get("mongo") },
			{ name: "LangChain", color: colorMap.get("langchain") },
			{ name: "WhatsApp", color: colorMap.get("whatsapp") },
			{ name: "AWS S3", color: colorMap.get("aws") },
		],
		url: [
			{
				codigo: undefined,
				deploy: undefined,
				video: undefined,
				isReady: false,
				isVideo: false,
			},
		],
	},
	{
		id: 8,
		slug: "isabella-ferdinand",
		nombre: "Isabella & Ferdinand",
		emoji: "🎓",
		categoria: "Cliente real · Educación",
		stackCorto: "React · NestJS · PostgreSQL",
		rol: "Product & Technology Lead",
		contexto: "Plataforma de gestión para una academia de español en Washington DC",
		image: [
			"/isabella-ferdinand/isabella-ferdinand-1.png",
			"/isabella-ferdinand/isabella-ferdinand-2.png",
			"/isabella-ferdinand/isabella-ferdinand-3.png",
			"/isabella-ferdinand/isabella-ferdinand-4.png",
			"/isabella-ferdinand/isabella-ferdinand-5.png",
		],
		details: `Plataforma de gestión educativa para Isabella & Ferdinand, una academia de español en Washington DC: calendario, clases, alumnos, docentes y finanzas en un solo sistema.`,
		moredetails: `Con mi equipo en My Upgrade desarrollamos la plataforma que centraliza la operación diaria de la academia, en una interfaz bilingüe (inglés/español).
		📅 Calendario estilo Outlook: vistas de semana, día y mes, con filtros por docente, sede y programa.
		🏫 Clases y tomas de clase: programación de cursos y summer camps con su registro de clases.
		🧑‍🎓 Gestión de alumnos y docentes: fichas, autorizaciones y avisos generales.
		🏢 Multi-sede: cada locación con su propia agenda.
		💰 Finanzas y reportes: control de ingresos y reportes de la operación.
		🔐 Roles y permisos: acceso por rol, con portal de administración para la dirección.`,
		technologies: [
			{ name: "React", color: colorMap.get("react") },
			{ name: "NestJS", color: colorMap.get("nest") },
			{ name: "PostgreSQL", color: colorMap.get("sql") },
			{ name: "TypeScript", color: colorMap.get("typescript") },
			{ name: "Docker", color: colorMap.get("docker") },
		],
		url: [
			{
				codigo: undefined,
				deploy: undefined,
				video: undefined,
				isReady: false,
				isVideo: false,
			},
		],
	},
	{
		id: 0,
		slug: "publicite",
		nombre: "Publicité",
		emoji: "📚",
		categoria: "Red social · En desarrollo",
		stackCorto: "NestJS · MongoDB",
		rol: "Backend Developer",
		contexto: "Proyecto colaborativo, actualmente en desarrollo",
		image: ["/publicite/publicite1.png"],
		details: `Red social para comprar, vender y publicar necesidades (En desarollo)`,
		moredetails: `Cree el backend de Publicité una red social en donde los usuarios tienen relaciones de amistad, grupos, revistas en donde guardan sus publicaciones junto con otros usuarios.
		Cada usuario puede disponier de un tipo de suscripción y un plan de pago el cual le da determinados beneficios. Para este integración implemente un sistema de pagos con Mercado Pago.
		El sistema esta protegido con Clerk Auth, el cual utilizo para la autenticación de los usuarios.
		El backend esta construido en Nest Js bajo una arquitectura hexagonal y MongoDb para el almacenamiento.
		Tambien cree un socket en donde los usuarios pueden enviarse notificaciones en tiempo real, el socket no esta en este codigo ya que es un servicio aparte. Es un proyecto realmente desafiante y que pone a prueba mis conocimientos, estoy feliz de poder compartirlo♥️`,
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
		slug: "url-shortener",
		nombre: "URL Shortener",
		emoji: "🛜",
		categoria: "Challenge técnico · Cloud",
		stackCorto: "Java · Redis · AWS",
		rol: "Fullstack Developer",
		contexto: "Proyecto para entrevistas en Mercado Libre",
		image: ["/urlShorter/urlshorter_1.jpg", "/urlShorter/urlshorter_2.jpg"],
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
		slug: "mahatu-consultorios",
		nombre: "Mahatu Consultorios",
		emoji: "🦷",
		categoria: "Cliente real · Salud",
		stackCorto: "Node.js · MongoDB",
		rol: "Backend Developer",
		contexto: "Sistema en producción para una clínica odontológica",
		image: [
			"/mahatu/mahatu3.png",
			"/mahatu/mahatu4.png",
			"/mahatu/mahatu1.png",
			"/mahatu/mahatu2.png",
		],
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
		slug: "safe-wallet",
		nombre: "Safe Wallet",
		emoji: "💸",
		categoria: "Fintech · Microservicios",
		stackCorto: "Java · Keycloak",
		rol: "Fullstack Developer",
		contexto: "Proyecto final de la especialización Backend, Digital House",
		image: [
			"/safewallet/safewallet1.jpg",
			"/safewallet/safewallet2.jpg",
			"/safewallet/safewallet3.jpg",
			"/safewallet/safewallet4.png",
			"/safewallet/safewallet5.png",
		],
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
		slug: "wonder-ventures",
		nombre: "Wonder Ventures",
		emoji: "🛫",
		categoria: "Turismo · Plataforma de reservas",
		stackCorto: "Java · React",
		rol: "Fullstack Developer",
		contexto: "Proyecto integrador final, Digital House",
		image: [
			"/wonder/wonder1.webp",
			"/wonder/wonder2.webp",
			"/wonder/wonder3.webp",
			"/wonder/wonder4.webp",
			"/wonder/wonder5.webp",
		],
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
				video: undefined,
				isReady: true,
				isVideo: false,
			},
		],
	},
];

export default projects;

let colors = ["red", "blue", "green", "yellow", "purple", "orange", "grey"];
let projects = [
  {
    id: 1,
    image: [
      "/wonder1.webp",
      "/wonder2.webp",
      "/wonder3.webp",
      "/wonder4.webp",
      "/wonder5.webp",
    ],
    title: "Wonder Ventures 🛫",
    details: `Wonder Ventures es mi proyecto integrador final de la carrera Certified Tech Developer de Digital House. 
      Es una plataforma de reservas de experiencias turísticas, donde nos centramos en proporcionar una interfaz intuitiva
      y fácil de usar.`,
    moredetails: `En Wonder Ventures se implemento un sistema  
    de gestión de contenido que permita la fácil actualización
    de información sobre destinos, actividades y disponibilidad. Posee dos tipos de usuarios, un usuario Administrador, encargado
    de administrar la web y un usuario cliente, encargado de realizar reservas. Los clientes pueden seleccionar la fecha de reserva que mas
    se ajuste a sus necesidaes y segun la disponibilidad de la plataforma. La información de los destinos, actividades y disponibilidad se actualizan en tiempo real.`,
    technologies: [
      { name: "Java", color: colors[5] },
      { name: "React js", color: colors[3] },
      { name: "Mysql", color: colors[1] },
      { name: "AWS", color: colors[5] },
    ],
    url: [
      {
        codigo: "https://github.com/MaxiCattaneoCvetic/WonderVentures",
        deploy: "http://wonderventures3.s3-website-us-east-1.amazonaws.com/",
        isReady: true,
      },
    ],
  },

  {
    id: 2,
    image: [
      "/wonder1.webp",
      "/wonder2.webp",
      "/wonder3.webp",
      "/wonder4.webp",
      "/wonder5.webp",
    ],
    title: "Safe Wallet 💸 ",
    details: `Safe Wallet es una billetera virtual y es mi proyecto final de la especializacion en Backend,
      crea una cuenta y transferi dinero a tus amigos mediante un alias o un Cbu proporcionado por 
      la app.`,
    moredetails: `Es una billetera virtual que te permite gestionar tus finanzas de una forma sencilla 
    y segura. Para el desarollo de esta aplicacion se utilizo una arquitectura de microservicios, 
    protegidos con keycloack. Con esta arquitectura, se puede gestionar la seguridad de la información
    de la billetera virtual. Cada transacción genera un historial personalizado por cada usuario, el cual se puede consultar para
    tener control de las transferencias realizadsa y recibidas, estas tambien pueden descargarse en formato PDF para poder compartirlas
    con tus amigos.`,
    technologies: [
      { name: "Java", color: colors[5] },
      { name: "React js", color: colors[3] },
      { name: "MongoDB", color: colors[2] },
      { name: "AWS", color: colors[5] },
      { name: "Keycloak", color: colors[5] },
    ],
    url: [
      {
        codigo: "https://github.com/MaxiCattaneoCvetic/WonderVentures",
        deploy: "https://wonderventures.vercel.app/",
        isReady: false,
      },
    ],
  },
  {
    id: 3,
    image: ["/odontoMax.gif"],
    title: "Odonto Max 🦷",
    details: `Odonto Max, mi proyecto final de Backend I, el cual tiene como objetivo atender 
    las necesidades de una clínica odontológica mediante el registro de odontólogos y pacientes y la gestión de turnos`,
    moredetails: `El proyecto se desarrolló con Spring Boot y se utilizó Spring Starter Web, 
    también la creación de API REST que permitiera la comunicación eficiente y segura entre diferentes
     aplicaciones y sistemas. Los verbos HTTP, como GET, POST, PUT y DELETE, se utilizaron para realizar
      operaciones estándar en los recursos (datos) y se accedía a ellos mediante URLs específicas.
    Además, para garantizar la seguridad de la API, se implementó la autenticación y autorización mediante
     Spring Security. También se utilizó Log4j para la integración de loggers y H2 como base de datos en memoria.
    Se realizaron pruebas unitarias y de integración utilizando JUnit y MockMvc para garantizar el correcto funcionamiento 
    del proyecto.`,
    technologies: [
      { name: "Java", color: colors[5] },
      { name: "React js", color: colors[3] },
      { name: "H2", color: colors[6] },
      { name: "JUnit", color: colors[5] },
      { name: "HTML", color: colors[0] },
      { name: "CSS", color: colors[1] },
    ],
    url: [
      {
        codigo:
          "https://www.linkedin.com/feed/update/urn:li:activity:7051660449469054976/",
        deploy:
          "https://www.linkedin.com/feed/update/urn:li:activity:7051660449469054976/",
        isReady: true,
      },
    ],
  },

  {
    id: 4,
    image: ["/odonto1.png", "/odonto2.png", "/odonto3.jpg"],
    title: "OdontoSolutions 🦷",
    details: `Odonto Solutions surgió como examen final de frontend de mi carrera de Certified Tech Developer.
        Es una plataforma diseñada para la gestión integral de consultorios odontológicos. Además, 
        me brindó la oportunidad de mejorar mis habilidades de trabajo en equipo y comunicación.`,
    moredetails: `Fue uno de los primeros proyectos que realice, busca entender el funcionamiento de LocalStorage y 
    sesionStorage y la utilización de variables de estado para almacenar información.`,
    technologies: [{ name: "React js", color: colors[5] }],
    url: [
      {
        codigo:
          "https://github.com/MaxiCattaneoCvetic/OdontoSolutions/tree/93e61b0772ff2413e8ceedfd6c1206cbb6729777",
        deploy: "https://odonto-mu.vercel.app/",
        isReady:true
      },
    ],
  },
  {
    id: 5,
    image: ["/tiro1.jpg", "/tiro2.jpg"],
    title: "Tiro al blanco 🔫",
    details: `Tiro al blanco es un emocionante proyecto creado como parte del curso de Alura.
    En donde el objetivo es darle al blanco para sumar puntos.`,
    moredetails: ` 
    Te invito a sumergirte en esta experiencia única. Simplemente ingresa con tu nombre y adéntrate
     en la diversión de apuntar y disparar para acertar en el blanco. Con cada acierto, podrás incrementar tu
      puntuación y desafiar tus habilidades de puntería. ¡Prepárate para una experiencia llena de emoción y competencia
       mientras trabajas para mejorar tu precisión y alcanzar la máxima puntuación! En este proyecto vimos como manejar un Canvas
       en un entorno web y variables que van actualizandose para la puntuacion y la movilidad del blanco. Sin dudas un proyecto divertido
       y desafiante ya que no es lo que acostumbro hacer.`,
    technologies: [
      { name: "JavaScript", color: colors[5] },
      { name: "HTML", color: colors[0] },
      { name: "CSS", color: colors[1] },
    ],
    url: [
      {
        codigo: "https://github.com/MaxiCattaneoCvetic/TiroAlBlanco",
        deploy: "https://maxicattaneocvetic.github.io/TiroAlBlanco/",
        isReady: true,
      },
    ],
  },
  {
    id: 6,
    image: ["/porfolio1.jpg", "/porfolio2.jpg", "/porfolio3.jpg"],
    title: "Portafolio 🚀",
    details: `En mi portafolio encontrarás una muestra de mis proyectos, 
    los cuales representan el resultado de mi esfuerzo y dedicación 
    en el estudio. `,
    moredetails: `Aquí es donde muestro una selección de mis trabajos y es la manera que puedo mostrar mis habilidades.
    Te invito a visitar mi perfil 
    de GitHub para explorar más de mis trabajos y habilidades. ¡Gracias por tomarte el tiempo de revisar mi portafolio!
    `,
    technologies: [
      { name: "React js", color: colors[3] },
      { name: "HTML", color: colors[0] },
      { name: "CSS", color: colors[1] },
      { name: "Love 😁", color: colors[0] },
    ],
    url: [
      {
        codigo: "https://github.com/MaxiCattaneoCvetic/webporfolio",
        deploy: "https://webporfolio-gray.vercel.app/ ",
        isReady: true,
      },
    ],
  },
];

export default projects;

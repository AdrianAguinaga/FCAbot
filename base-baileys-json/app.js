const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

//Excepcion
// flujo para manejar respuestas inválidas
const flowSecundario8 = addKeyword(["8"])    
    .addAnswer(["La opción que elegiste no es válida, pero puedes usar *hola* o *inicio* para regresar al menú principal o revisa tu redacción y vuelve a intentarlo",
    ])
    .addAnswer(["Para volver al menú principal, escribe *hola* o *inicio*."]);

//Creditos

// Respuesta para el flujo de "Actividades"
const flowSecundarioActividades = addKeyword(["actividades"])
    .addAnswer(["Para volver escribe *creditos*"])
    .addAnswer([
        "¡Hola! 👋 Aquí tienes todas las páginas que puedes visitar relacionadas a actividades optativas:\n" +
        "📚 Optativas: [FCA Optativas](https://fca.tij.uabc.mx/optativas)\n" +
        "🖥️ MOOC: [Oferta MOOC](https://ciad.mxl.uabc.mx/oferta-mooc-2024-1/)\n" +
        "🧮 CUAL: [Información CUAL](https://ciad.mxl.uabc.mx/cual/)\n" +
        "📱 Facebook: [Facebook FCA](https://www.facebook.com/fcatijuana/)\n\n" +
        "Para detalles sobre ayudantías y más, consulta con tu tutor o coordinador.\n\n" +
        "Para volver al menú escribe *creditos*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

// Respuesta para el flujo de "Materias"
const flowSecundarioMaterias = addKeyword(["materias"])
.addAnswer(["Para volver escribe *creditos*"])
    .addAnswer([
        "¡Hola! Si necesitas información sobre materias optativas, puedes visitar estas páginas:\n" +
       
        "🏫 Reinscripciones: [Reinscripciones FCA](https://fca.tij.uabc.mx/reinscripciones)\n" +
        "📅 Intersemestrales: [Intersemestrales FCA](https://fca.tij.uabc.mx/intersemestrales)\n\n" +
        "🎒 *Recuerda que solo se puede tomar una materia por semestre.*\n\n" +
        "Para volver al menú escribe *creditos*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

// Y así sucesivamente para los demás flujos, asegurándote de que cada respuesta siga este formato estructurado y directo.


const flowSecundarioOcho = addKeyword(["Ocho"])
.addAnswer(["Para volver escribe *creditos*"])  
.addAnswer([
        "Para obtener un crédito optativo necesitas validar 8 actividades (es decir 8 actividades te dan 1 credito al semestre).\n"+
        "Aquí te dejo enlaces útiles:\n" +
        "🏓 Cultura y Deporte: [UABC Cultura y Deporte](https://sifpvu.uabc.mx/)\n" +
        "🧗 UABC 8 = 1: [UABC 8 = 1 Detalles](http://proyectosfcqi.tij.uabc.mx/eventos/login2.php)\n\n" +
        "Para más información, visita los enlaces o consulta con tu coordinador de carrera.\n\n"+
        "Para volver al menú escribe *creditos*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioCuantos = addKeyword(["cuantos"])
    .addAnswer(["Para volver escribe *creditos*"])
    .addAnswer([
        "Los créditos optativos varían según la carrera. Aquí tienes un resumen:\n" +
        "💡 Inteligencia de Negocios: 52 créditos optativos.\n" +
        "💻 Informática: 67 créditos optativos.\n" +
        "📈 Contaduría: 70 créditos optativos.\n" +
        "📊 Administración de Empresas: 79 créditos optativos.\n" +
        "💼 Negocios Internacionales: 62 créditos optativos.\n\n" +
        "Para más detalles sobre la oferta educativa, visita: [FCA Licenciaturas](https://fca.tij.uabc.mx/licenciatura)\n\n" +
        "Para volver al menú escribe *creditos*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


const flowSecundarioManeras = addKeyword(["maneras"])
.addAnswer(["Para volver escribe *creditos*"])
.addAnswer([
        "Existen múltiples maneras de obtener materias optativas:\n" +
        "📚 Acreditación de inglés (Inglés conversacional e inglés técnico para negocios).\n" +
        "📝 Cursos MOOC.\n" +
        "🎒 Actividades 8 = 1.\n" +
        "📝 Catálogo de Unidades de Aprendizaje en Línea (CUAL).\n" +
        "🧠 Ayudantías.\n" +
        "🎉 Eventos académicos en otro idioma.\n" +
        "🏀 Actividades deportivas.\n" +
        "💡 Actividades culturales.\n" +
        "🏹 Actividades complementarias de formación integral.\n\n" +
        "Puedes obtener más información sobre las ofertas de MOOC y CUAL visitando: [Oferta MOOC](https://ciad.mxl.uabc.mx/oferta-mooc-2024-1/), [CUAL](https://ciad.mxl.uabc.mx/cual/)\n" +
        "Para detalles sobre eventos y actividades, visita nuestra página de Facebook: [Facebook FCA](https://www.facebook.com/fcatijuana/)\n\n" +
        "Para volver al menú escribe *creditos*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

//Servicio
const flowSecundarioCuando = addKeyword(["cuando","cuándo"])
    .addAnswer([
        "🌟 Puedes comenzar tu servicio social comunitario desde tu ingreso a UABC. Es necesario que hayas completado el taller de inducción al Servicio Social Comunitario. Para más detalles o iniciar el proceso, visita el portal oficial: [Servicio Social UABC](http://serviciosocial.uabc.mx).\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioRequiero = addKeyword(["requiero"])
    .addAnswer([
        "👨‍💻 Para inscribirte en un taller de servicio social, accede al sistema con tu correo institucional aquí: [Sistema de Servicio Social](http://serviciosocial.uabc.mx). En el apartado de calendario de talleres, selecciona el taller deseado y registra tu nombre y matrícula.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


    const flowSecundarioDiferencia = addKeyword(["sorteo"])
    .addAnswer([
        "🎟️ Puedes liberar las 300 horas necesarias para el servicio social mediante la venta de boletos de sorteos organizados por la UABC. Aquí te detallo cómo:\n" +
        "- 50 horas por 5 boletos\n" +
        "- 100 horas por 10 boletos\n" +
        "- 150 horas por 15 boletos\n" +
        "- 200 horas por 20 boletos\n" +
        "- 250 horas por 25 boletos\n" +
        "- 300 horas por 30 boletos\n\n" +
        "Para más información, consulta en el portal de servicio social.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


    const flowSecundarioCampañas = addKeyword(["horas"])
    .addAnswer([
        "⏱️ Debes cumplir un mínimo de 300 horas de servicio, equivalentes a al menos 3 meses de actividades, antes de completar el 40% de los créditos de tu carrera.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioEtapas = addKeyword(["seguro"])
    .addAnswer([
        "🔒 Sí. Es necesario que tengas un seguro facultativo activo o alguna variante de seguro (IMSS por padres, por trabajo) para realizar el Servicio Social Comunitario.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioLimite = addKeyword(["restringe"])
    .addAnswer([
        "🚫 Debes completar tu servicio social antes de alcanzar el 40% de los créditos de tu carrera. Si no cumples con este requisito, se limitará tu carga académica a tres materias según el reglamento.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioCarta = addKeyword(["modalidades"])
    .addAnswer([
        "📄 Los estudiantes pueden cumplir con el Servicio Social Comunitario a través de varias modalidades:\n" +
        "- *Programas hora x hora*: Cuentan horas hasta completar el requisito.\n" +
        "- *Programas por Objetivo*: Liberan horas al terminar la actividad.\n" +
        "- *Programas Masivos*: Actividades como Cruz Roja y Teletón, asignadas por la unidad académica.\n" +
        "- *Programas Curriculares*: Relacionados con la materia de Desarrollo Humano, permiten liberar hasta 150 horas.\n" +
        "Para más información sobre cada modalidad, consulta en el portal de servicio social.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioPresentacion = addKeyword(["informe"])
    .addAnswer([
        "📝 Al concluir tu servicio social, debes elaborar un informe final siguiendo estos pasos:\n" +
        "- Elabora el informe al finalizar el servicio.\n" +
        "- Completa el informe dentro de los 20 días naturales posteriores al término de tu servicio.\n" +
        "- Usa el portal de servicio social para llenar y enviar tu informe: [Portal de Servicio Social](http://serviciosocial.uabc.mx).\n" +
        "- Espera la aprobación de la unidad receptora y la revisión de la unidad académica.\n\n" +
        "Para volver al menú escribe *servicio*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
//ayudantias
const flowSecundarioDisponibles = addKeyword(["disponible"])
    .addAnswer([
        "Ayudantía docente 👨‍🏫\n" +
        "Ayudantía investigativa 🕵️‍♀️\n" +
        "Ayudantía de laboratorio 🧪\n" +
        "Apoyo a Actividades de Extensión y Vinculación 🌐\n" +
        "Estudios independientes 📖\n" +
        "Proyectos de Vinculación con Valor en Créditos 💼\n" +
        "Programas de Formación Profesional por Proyecto 🏢\n\n"+
        "Para volver al menú escribe *ayudante*\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioPuedo = addKeyword(["puedo"])
    .addAnswer([
        "Hasta dos modalidades en toda su carrera. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioTiempo = addKeyword(["tiempo"])
    .addAnswer([
        "Tiene una duración de 50 semanas de acuerdo al calendario laboral de la ley federal del trabajo; NO se rigen por el calendario de UABC. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioPago = addKeyword(["pago"])
    .addAnswer([
        "Sí, se paga aproximadamente $7,200.00 pesos mensuales. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioDura = addKeyword(["dura"])
    .addAnswer([
        "Lo que un ciclo escolar. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioPagoVC = addKeyword(["pagovc"])
    .addAnswer([
        "No. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioEmpresa = addKeyword(["empresa"])
    .addAnswer([
        "Estar vigente y estar bajo el régimen de persona moral. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioParticipar = addKeyword(["participar"])
    .addAnswer([
        "El alumno debe haber cursado un 60 % de sus créditos para poder registrarse en un PVVC al inicio del semestre. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioAsigno = addKeyword(["asigno","asignó"])
    .addAnswer([
        "Ingresa y regístrate en SIFPVU.UABC.MX en acceso usuarios UABC. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioSubir = addKeyword(["subir"])
    .addAnswer([
        "Sí, deberán registrarse y subir su constancia del seguro facultativo con fecha del primer día de clases en adelante del semestre en donde realizarán su PVVC. \n\n"+
        "Para volver al menú escribe *ayudante* \n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
const flowSecundarioLiberan = addKeyword(["liberan"])
    .addAnswer([
        "Ayudantía docente: 6 créditos optativos 👨‍🏫\n" +
        "Ayudantía investigativa: 6 créditos optativos 🕵️‍♀️\n" +
        "Ayudantía de laboratorio: 6 créditos optativos 🧪\n" +
        "Apoyo a Actividades de Extensión y Vinculación: 6 créditos optativos 🌐\n" +
        "Estudios independientes: 6 créditos optativos 📖\n" +
        "Proyectos de Vinculación con Valor en Créditos: 2 créditos por el PVVC, 6 créditos optativos y PPP 💼\n" +
        "Programas de Formación Profesional por Proyecto (PFPP): No asistes a la escuela, todas las materias las liberas en la empresa. 🏢\n\n"+
        "Para volver al menú escribe *ayudante*\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


//practicas
const flowSecundarioDonde = addKeyword(["donde","dónde"])
    .addAnswer([
        "🏢 Puedes realizar tus prácticas profesionales en empresas o instituciones que figuren en el Catálogo de Unidades Receptoras (UR), accesible a través del Sistema de Modalidades de Aprendizaje. Para más detalles y ver el catálogo, visita: [Prácticas Profesionales FCA](https://fca.tij.uabc.mx/en/practicasprofesionales).\n\n" +
        "Para volver al menú escribe *practicas*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


    const flowSecundarioPais = addKeyword(["pais", "país"])
    .addAnswer([
        "✈️ Sí, es posible realizar el 'Servicio Social Profesional en el Exterior'. Para ver los requisitos y la convocatoria actual, visita: [Servicio Social Profesional en el Exterior](https://fca.tij.uabc.mx/document/share/445/b9ed83d6-9f5a-4e85-a44f-89fba20d79b7).\n" +
        "Además, puedes encontrar más información sobre oportunidades de movilidad estudiantil aquí: [Movilidad e Intercambio FCA](https://fca.tij.uabc.mx/movilidadeintercambio).\n\n" +
        "Para volver al menú escribe *practicas*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioSirven = addKeyword(["sirven"])
    .addAnswer([
        "🎯 Las prácticas profesionales sirven para integrar y aplicar los conocimientos teóricos aprendidos en el aula con la práctica real en el entorno profesional, contribuyendo así a tu formación integral como alumno.\n\n" +
        "Para volver al menú escribe *practicas*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


    const flowSecundarioSimultaneo = addKeyword(["simultaneo","simultáneo"])
    .addAnswer([
        "🔄 Para iniciar tus prácticas profesionales, debes cumplir con ciertos requisitos previos:\n" +
        "1) Tener al menos el 70% de los créditos de tu carrera concluidos.\n" +
        "2) Haber concluido y acreditado tanto el Servicio Social Comunitario como el Profesional.\n" +
        "3) Poseer la constancia del Taller de Prácticas Profesionales FCA, con validez máxima de un año al momento de iniciar el trámite.\n" +
        "🚫 Importante: No puedes realizar las prácticas profesionales simultáneamente con el servicio social.\n" +
        "Para más detalles, visita: [Prácticas Profesionales FCA](https://fca.tij.uabc.mx/practicasprofesionales).\n\n" +
        "Para volver al menú escribe *practicas*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

//Titulacion
const flowSecundarioTaller = addKeyword(["taller"])
    .addAnswer([
        "🎓 El taller de titulación para alumnos potenciales a egresar se ofrece durante las primeras dos semanas de cada periodo académico. Es requisito tomarlo durante tu último semestre en la universidad.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioEgresar = addKeyword(["egresar"])
    .addAnswer([
        "🎓 Para egresar, debes haber completado todos tus créditos, incluidos los obligatorios, optativos y las prácticas profesionales.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioDeuda = addKeyword(["deuda"])
    .addAnswer([
        "💳 Antes de continuar con cualquier trámite de titulación, es necesario saldar todas tus deudas pendientes. Puedes realizar tus pagos a través de este enlace: [Pagos UABC](https://pagos.uabc.mx/principal).\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioRequisitos = addKeyword(["requisitos"])
    .addAnswer([
        "📋 Aquí tienes una lista de requisitos necesarios antes de egresar para iniciar tu proceso de titulación:\n" +
        "- Kardex liberado (todos los créditos cubiertos y ninguna asignatura reprobada).\n" +
        "- Constancia de liberación del idioma extranjero.\n" +
        "- Constancia de CENEVAL.\n" +
        "- Constancia de liberación del servicio social profesional.\n" +
        "- Acta de nacimiento, CURP y certificado de preparatoria.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioProceso = addKeyword(["proceso"])
    .addAnswer([
        "🎓 El proceso de titulación incluye los siguientes pasos:\n" +
        "- Trámite de Certificado de Estudios Profesionales y Certificado de Pasante.\n" +
        "- Obtención de la Constancia de Verificación de Documentos para Titulación.\n" +
        "- Trámite de Título y participación en la Ceremonia de Toma de Protesta.\n" +
        "- Trámite de la cédula profesional electrónica.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


    const flowSecundarioFalta = addKeyword(["falta"])
    .addAnswer([
        "✅ Si, puedes iniciar con el trámite de carta pasante y certificado de estudios profesionales incluso si te falta obtener la Constancia de Liberación de SSP para el trámite de Título.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioPasante = addKeyword(["pasante"])
    .addAnswer([
        "📑 Si ya cuentas con la carta pasante y el certificado de estudios profesionales, el siguiente paso es solicitar la Constancia de Verificación de Documentos para Titulación.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioPresolicitud = addKeyword(["pre"])
    .addAnswer([
        "📝 Si ya generaste una pre-solicitud para el trámite de carta pasante y necesitas modificar algún dato, puedes actualizar la pre-solicitud existente. Si no necesitas cambios, simplemente imprime la pre-solicitud ya generada.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioConstancia = addKeyword(["constancia"])
    .addAnswer([
        "📄 Una vez autorizada tu constancia por el DSEGE, será enviada a la Facultad. Recibirás un aviso por correo electrónico para continuar con el proceso de titulación.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowSecundarioProtesta = addKeyword(["protesta"])
    .addAnswer([
        "🎓 La participación en la toma de protesta es obligatoria según el artículo 109 del Estatuto Escolar de la UABC para recibir tu título o grado académico.\n\n" +
        "Para volver al menú escribe *titulacion*\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

//Config
const flowCreditosOptativos = addKeyword(["creditos","créditos"])
    .addAnswer("Para volver al menú principal, escribe *hola* o *inicio*.")
    .addAnswer([
        "Explora las opciones sobre créditos optativos:\n\n" +
        "Elige una opción (escribe la palabra que esta dentro del parentesis):\n\n" +
        "👉 *(actividades)* ¿Dónde puedo ver las actividades para conseguir créditos optativos?\n" +
        "👉 *(materias)* Información sobre alta de materias optativas.\n" +
        "👉 *(ocho)* Explicación del sistema 8 = 1 para créditos.\n" +
        "👉 *(cuantos)* Total de créditos optativos necesarios.\n" +
        "👉 *(maneras)* Métodos para liberar créditos optativos.'\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);


    const flowServicioSocial = addKeyword(["servicio"])
    .addAnswer("Para volver al menú principal, escribe *hola* o *inicio*.")
    .addAnswer([
        "Opciones disponibles para el Servicio Social Comunitario:\n\n" +
        "Elige una opción (escribe la palabra que esta dentro del parentesis):\n\n" +
        "👉 *(cuando)* Inicio del Servicio Social Comunitario.\n" +
        "👉 *(horas)* Requisitos de horas y periodos.\n" +
        "👉 *(seguro)* Requisitos de seguro médico/facultativo.\n" +
        "👉 *(cuantas)* Consulta de horas acumuladas.\n" +
        "👉 *(restringe)* Restricciones basadas en avance crediticio.\n" +
        "👉 *(modalidades)* Modalidades del Servicio Social.\n" +
        "👉 *(informe)* Detalles sobre la realización externa.\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);



    const flowPracticasProfesionales = addKeyword(["practicas","prácticas"])
    .addAnswer("Para volver al menú principal, escribe *hola* o *inicio*.")
    .addAnswer([
        "Consulta las opciones sobre prácticas profesionales:\n\n" +
        "Elige una opción (escribe la palabra que esta dentro del parentesis):\n\n" +
        "👉 *(donde)* Guía sobre cómo y dónde liberar prácticas profesionales.\n" +
        "👉 *(pais)* Realización de prácticas en el extranjero.\n" +
        "👉 *(sirven)* Beneficios y propósito de las prácticas.\n" +
        "👉 *(simultaneo)* Compatibilidad con el servicio social.\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

    const flowTitulacionYSeguimiento = addKeyword(["titulacion", "titulación"])
    .addAnswer("Para volver al menú principal, escribe *hola* o *inicio*.")
    .addAnswer([
        "Información sobre el proceso de titulación:\n\n" +
        "Elige una opción (escribe la palabra que esta dentro del parentesis):\n\n" +
        "👉 *(taller)* Momento adecuado para el taller de titulación.\n" +
        "👉 *(egresar)* Criterios para ser considerado como potencial a egresar.\n" +
        "👉 *(requisitos)* Requisitos para iniciar el proceso de titulación.\n" +
        "👉 *(deuda)* Impacto de deudas en el trámite de titulación.\n" +
        "👉 *(proceso)* Pasos del proceso de titulación.\n" +
        "👉 *(falta)* Trámites posibles sin liberación del Servicio Social.\n" +
        "👉 *(pasante)* Pasos siguientes con carta pasante.\n" +
        "👉 *(pre)* Gestión de pre-solicitudes.\n" +
        "👉 *(constancia)* Procedimiento tras autorización de constancia.\n" +
        "👉 *(protesta)* Obligatoriedad de la toma de protesta.\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);
    const flowAyudantias = addKeyword(["ayudante"])
    .addAnswer("Para volver al menú principal, escribe *hola* o *inicio*.")
    .addAnswer([
        "Información sobre el proceso de ayudantias:\n\n" +
        "Elige una opción (escribe la palabra que esta dentro del parentesis):\n\n" +
        "👉 *(disponibles)* ¿Cuáles son las Otras Modalidades en las que puedo participar? 🤔\n" +
        "👉 *(puedo)* ¿Cuántas modalidades puedo cursar? 🤔\n" +
        "👉 *(liberan)* ¿Cuántos créditos me liberan? 📚\n" +
        "👉 *(tiempo)* ¿Cuánto tiempo dura un Programas de Formación Profesional por Proyecto (PFPP)? ⏳\n" +
        "👉 *(pago)* ¿Me pagan en el PFPP? 💵\n" +
        "👉 *(dura)* ¿Cuánto tiempo dura un PVVC? ⏳ 💵\n" +
        "👉 *(pagoVC)* ¿Me pagan durante la realización del PVVC? ❌💵\n" +
        "👉 *(empresa)* ¿Qué requisitos debe tener la empresa para hacer un PVVC? 🏢📋\n" +
        "👉 *(participar)* ¿A partir de cuándo puedo participar en un PVVC y PFPP? 📆\n" +
        "👉 *(asigno)* ¿Cómo me asigno a un PVVC? 🖥️\n" + 
        "👉 *(subir)* ¿Debo subir algún documento durante mi asignación al PVVC? 📄\n\n"+
        "Para volver al menú principal, escribe *hola*\n"
    ]);

//-----------------------------------------------------------------------------------------
//PRINCIPAL
// flowPrincipal integrando todos los flujos específicos con instrucciones para volver
const flowGracias = addKeyword(["gracias", "thanks"])
  .addAnswer([
    "¡De nada! 😊",
    "¡Con gusto! 😉",
    "Para eso estamos. 👍",
]);

const flowPrincipal = addKeyword(["hola", "inicio","bot","volver","hey"])
    .addAnswer("🙌 Hola, bienvenido al chat de FCA. Elige una opción:")
    .addAnswer([
        "Elige una opción (escribe la palabra que esta dentro del parentesis):\n\n" +
        "👉 *(creditos)* para información sobre Créditos Optativos",
        "👉 *(servicio)* para información sobre Servicio Social Comunitario y Profesional",
        "👉 *(practicas)* para información sobre Prácticas Profesionales",
        "👉 *(titulacion)* para información sobre Titulación y Seguimiento",
        "👉 *(ayudande)* para información sobre Ayudantias",
    ]);

const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([
        flowPrincipal,
        flowCreditosOptativos,
        flowServicioSocial,
        flowPracticasProfesionales,
        flowTitulacionYSeguimiento,
        flowSecundarioActividades,
        flowSecundarioMaterias,
        flowSecundario8,
        flowSecundarioCuantos,
        flowSecundarioManeras,
        flowSecundarioDiferencia,
        flowSecundarioRequiero,
        flowSecundarioCuando,
        flowSecundarioCampañas,
        flowSecundarioEtapas,
        flowSecundarioDonde,
        flowSecundarioPais,
        flowSecundarioSirven,
        flowSecundarioSimultaneo,
        flowSecundarioTaller,
        flowSecundarioEgresar,
        flowSecundarioRequisitos,
        flowSecundarioDeuda,
        flowSecundarioProceso,
        flowSecundarioFalta,
        flowSecundarioParticipar,
        flowSecundarioAsigno,
        flowSecundarioPasante,
        flowSecundarioPresolicitud,
        flowSecundarioConstancia,
        flowSecundarioProtesta,
        flowSecundarioOcho,
        flowSecundarioLimite,
        flowSecundarioCarta,
        flowSecundarioPresentacion,
        flowGracias,
        flowAyudantias,
        flowSecundarioPuedo,
        flowSecundarioPago,
        flowSecundarioTiempo,
        flowSecundarioLiberan,
        flowSecundarioDura,
        flowSecundarioPagoVC,
        flowSecundarioEmpresa,
        flowSecundarioSubir,
        flowSecundarioDisponibles,
    ]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

main();

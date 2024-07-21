const questions = [
    {
        text: "Cuando te enfrentas a un conflicto personal, ¿qué te guía en la toma de decisiones?",
        options: [
            { text: "Intento encontrar una solución que sea justa para todas las partes involucradas, buscando armonía y equilibrio.", points: { Virtud: 7, Firmamento: 3, Destrucción: 1, Abismo: 5 } },
            { text: "Me enfoco en buscar nuevas perspectivas y soluciones creativas que puedan sorprender a todos.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Dominación: 1 } },
            { text: "Suelo seguir mi instinto y tomar decisiones rápidas para resolver el problema de manera eficiente.", points: { Liberación: 7, Firmamento: 5, Destrucción: 3, Abismo: 1 } },
            { text: "Prefiero tomar el control de la situación y dirigir a otros hacia la resolución.", points: { Dominación: 7, Virtud: 5, Liberación: 3, Firmamento: 1 } }
        ]
    },
    {
        text: "¿Qué te motiva a la hora de iniciar un nuevo proyecto?",
        options: [
            { text: "La oportunidad de aprender algo nuevo y expandir mis conocimientos.", points: { Creación: 7, Firmamento: 5, Virtud: 3, Destrucción: 1 } },
            { text: "El deseo de ayudar a otros y mejorar la comunidad.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "La posibilidad de desafiar el statu quo y crear algo innovador.", points: { Liberación: 7, Creación: 5, Abismo: 3, Dominación: 1 } },
            { text: "La necesidad de obtener resultados rápidos y efectivos.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } }
        ]
    },
    {
        text: "¿Cómo describes tu estilo de trabajo?",
        options: [
            { text: "Organizado y meticuloso, me gusta seguir un plan detallado.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Creación: 1 } },
            { text: "Flexible y adaptativo, prefiero improvisar según las circunstancias.", points: { Liberación: 7, Abismo: 5, Creación: 3, Destrucción: 1 } },
            { text: "Enérgico y proactivo, tomo la iniciativa rápidamente.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Creativo y visionario, me gusta explorar nuevas ideas.", points: { Creación: 7, Liberación: 5, Abismo: 3, Virtud: 1 } }
        ]
    },
    {
        text: "Cuando trabajas en equipo, ¿cuál es tu rol habitual?",
        options: [
            { text: "El líder, guiando y motivando a los demás.", points: { Dominación: 7, Firmamento: 5, Destrucción: 3, Virtud: 1 } },
            { text: "El mediador, asegurando que todos se lleven bien.", points: { Virtud: 7, Firmamento: 5, Creación: 3, Abismo: 1 } },
            { text: "El innovador, proponiendo nuevas ideas y enfoques.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "El ejecutor, llevando a cabo las tareas rápidamente.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Virtud: 1 } }
        ]
    },
    {
        text: "¿Qué valoras más en una amistad?",
        options: [
            { text: "Lealtad y confianza.", points: { Virtud: 7, Firmamento: 5, Dominación: 3, Abismo: 1 } },
            { text: "Aventuras y diversión.", points: { Liberación: 7, Creación: 5, Destrucción: 3, Firmamento: 1 } },
            { text: "Apoyo y comprensión.", points: { Firmamento: 7, Virtud: 5, Liberación: 3, Creación: 1 } },
            { text: "Estímulo y competencia.", points: { Destrucción: 7, Dominación: 5, Creación: 3, Virtud: 1 } }
        ]
    },
    {
        text: "Cuando enfrentas un problema inesperado, ¿cómo reaccionas?",
        options: [
            { text: "Analizo la situación y busco una solución lógica.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Confío en mi intuición y actúo rápidamente.", points: { Liberación: 7, Destrucción: 5, Abismo: 3, Dominación: 1 } },
            { text: "Busco ayuda y consejo de otros.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Creación: 1 } },
            { text: "Pienso fuera de la caja para encontrar una solución innovadora.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } }
        ]
    },
    {
        text: "¿Qué actividad prefieres en tu tiempo libre?",
        options: [
            { text: "Leer un buen libro o aprender algo nuevo.", points: { Creación: 7, Firmamento: 5, Virtud: 3, Destrucción: 1 } },
            { text: "Salir con amigos y socializar.", points: { Liberación: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Hacer deporte o alguna actividad física.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Firmamento: 1 } },
            { text: "Reflexionar y meditar en un lugar tranquilo.", points: { Firmamento: 7, Abismo: 5, Creación: 3, Virtud: 1 } }
        ]
    },
    {
        text: "¿Cómo manejas el estrés?",
        options: [
            { text: "Busco actividades que me relajen y me ayuden a desconectar.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Libero mi energía a través del ejercicio o una actividad física intensa.", points: { Destrucción: 7, Liberación: 5, Dominación: 3, Firmamento: 1 } },
            { text: "Hablo con alguien de confianza sobre mis preocupaciones.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Encuentro soluciones creativas para los problemas que me estresan.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } }
        ]
    },
    {
        text: "¿Qué tipo de películas prefieres?",
        options: [
            { text: "Documentales o biográficas.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Acción y aventura.", points: { Destrucción: 7, Liberación: 5, Dominación: 3, Creación: 1 } },
            { text: "Comedias o películas ligeras.", points: { Liberación: 7, Virtud: 5, Firmamento: 3, Abismo: 1 } },
            { text: "Ciencia ficción o fantasía.", points: { Creación: 7, Firmamento: 5, Abismo: 3, Dominación: 1 } }
        ]
    },
    {
        text: "¿Cuál es tu mayor fortaleza?",
        options: [
            { text: "Mi capacidad para mantener la calma en situaciones difíciles.", points: { Firmamento: 7, Virtud: 5, Destrucción: 3, Abismo: 1 } },
            { text: "Mi creatividad y originalidad.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Mi energía y determinación.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Creación: 1 } },
            { text: "Mi empatía y capacidad para entender a los demás.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Cómo enfrentas los desafíos?",
        options: [
            { text: "Con una planificación cuidadosa y detallada.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Creación: 1 } },
            { text: "Con energía y determinación, dispuesto a superar cualquier obstáculo.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Con creatividad, buscando soluciones innovadoras.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Con paciencia y empatía, considerando todas las perspectivas.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Qué tipo de entorno prefieres para trabajar?",
        options: [
            { text: "Un entorno estructurado y organizado.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Creación: 1 } },
            { text: "Un entorno dinámico y cambiante.", points: { Liberación: 7, Destrucción: 5, Creación: 3, Firmamento: 1 } },
            { text: "Un entorno colaborativo y social.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Un entorno flexible y creativo.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } }
        ]
    },
    {
        text: "¿Qué te inspira más?",
        options: [
            { text: "La belleza y el arte en el mundo que me rodea.", points: { Creación: 7, Firmamento: 5, Abismo: 3, Virtud: 1 } },
            { text: "Las historias de personas que han superado grandes desafíos.", points: { Virtud: 7, Firmamento: 5, Destrucción: 3, Liberación: 1 } },
            { text: "Los logros científicos y tecnológicos.", points: { Firmamento: 7, Creación: 5, Dominación: 3, Destrucción: 1 } },
            { text: "Las experiencias emocionantes y aventureras.", points: { Liberación: 7, Destrucción: 5, Abismo: 3, Virtud: 1 } }
        ]
    },
    {
        text: "¿Cómo prefieres aprender?",
        options: [
            { text: "A través de la práctica y la experiencia directa.", points: { Liberación: 7, Destrucción: 5, Creación: 3, Firmamento: 1 } },
            { text: "Leyendo y estudiando información detallada.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Dominación: 1 } },
            { text: "Participando en discusiones y trabajos en grupo.", points: { Virtud: 7, Liberación: 5, Firmamento: 3, Creación: 1 } },
            { text: "Experimentando y probando nuevas ideas.", points: { Creación: 7, Liberación: 5, Abismo: 3, Destrucción: 1 } }
        ]
    },
    {
        text: "¿Cuál es tu enfoque hacia los cambios?",
        options: [
            { text: "Los acepto y me adapto rápidamente.", points: { Liberación: 7, Creación: 5, Destrucción: 3, Firmamento: 1 } },
            { text: "Los analizo cuidadosamente antes de aceptarlos.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Trato de controlarlos para que me beneficien.", points: { Dominación: 7, Destrucción: 5, Firmamento: 3, Virtud: 1 } },
            { text: "Busco cómo pueden beneficiar a todos.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Creación: 1 } }
        ]
    },
    {
        text: "¿Cómo te describirían tus amigos?",
        options: [
            { text: "Empático y comprensivo.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Creativo y soñador.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Determinado y valiente.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Organizado y meticuloso.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Creación: 1 } }
        ]
    },
    {
        text: "¿Qué tipo de libros prefieres?",
        options: [
            { text: "Ficción fantástica o de ciencia ficción.", points: { Creación: 7, Firmamento: 5, Abismo: 3, Liberación: 1 } },
            { text: "Novelas históricas o biografías.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Libros de autoayuda y desarrollo personal.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Thrillers o novelas de acción.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Creación: 1 } }
        ]
    },
    {
        text: "¿Cómo manejas los fracasos?",
        options: [
            { text: "Aprendo de ellos y busco mejorar.", points: { Creación: 7, Virtud: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Me esfuerzo más y trato de superarlos.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Busco apoyo en mis amigos y familiares.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Reflexiono sobre lo que salió mal y busco nuevas estrategias.", points: { Firmamento: 7, Creación: 5, Abismo: 3, Virtud: 1 } }
        ]
    },
    {
        text: "¿Qué te hace sentir más realizado?",
        options: [
            { text: "Crear algo nuevo y original.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Ayudar a otros a alcanzar sus metas.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Superar desafíos difíciles.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Creación: 1 } },
            { text: "Organizar y completar un proyecto exitosamente.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Creación: 1 } }
        ]
    },
    {
        text: "¿Cómo describes tu estilo de comunicación?",
        options: [
            { text: "Directo y claro.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Empático y comprensivo.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Creativo y expresivo.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Organizado y meticuloso.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Creación: 1 } }
        ]
    },
    {
        text: "¿Qué es lo más importante para ti en el trabajo?",
        options: [
            { text: "La innovación y la creatividad.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "La estabilidad y la seguridad.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Abismo: 1 } },
            { text: "El desafío y la competencia.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Firmamento: 1 } },
            { text: "La colaboración y el trabajo en equipo.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Creación: 1 } }
        ]
    },
    {
        text: "¿Cómo manejas las críticas?",
        options: [
            { text: "Las acepto y trato de mejorar.", points: { Virtud: 7, Firmamento: 5, Creación: 3, Destrucción: 1 } },
            { text: "Las uso como motivación para demostrar mi valía.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Firmamento: 1 } },
            { text: "Las analizo y tomo lo que considero útil.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Abismo: 1 } },
            { text: "Las ignoro si no son constructivas.", points: { Liberación: 7, Abismo: 5, Creación: 3, Firmamento: 1 } }
        ]
    },
    {
        text: "¿Qué te impulsa a levantarte cada día?",
        options: [
            { text: "La posibilidad de crear algo nuevo.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "El deseo de ayudar a los demás.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Los desafíos y metas que me propongo.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Creación: 1 } },
            { text: "La búsqueda de estabilidad y orden.", points: { Firmamento: 7, Virtud: 5, Dominación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Qué prefieres en una situación difícil?",
        options: [
            { text: "Buscar soluciones creativas y alternativas.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Mantener la calma y analizar la situación.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Abismo: 1 } },
            { text: "Actuar rápidamente para resolver el problema.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Buscar apoyo y consejo de otros.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Qué te hace sentir exitoso?",
        options: [
            { text: "Crear algo de valor.", points: { Creación: 7, Firmamento: 5, Virtud: 3, Destrucción: 1 } },
            { text: "Superar obstáculos y desafíos.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Firmamento: 1 } },
            { text: "Ayudar a otros a tener éxito.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Mantener el orden y la estabilidad en mi vida.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Cómo prefieres resolver los problemas?",
        options: [
            { text: "Con creatividad e innovación.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Con lógica y análisis.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "Con energía y acción.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Firmamento: 1 } },
            { text: "Con paciencia y empatía.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Qué te gusta más de tu entorno laboral?",
        options: [
            { text: "Las oportunidades para innovar y crear.", points: { Creación: 7, Firmamento: 5, Liberación: 3, Destrucción: 1 } },
            { text: "El ambiente de estabilidad y orden.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Dominación: 1 } },
            { text: "Los desafíos constantes y la competencia.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Creación: 1 } },
            { text: "La colaboración y el trabajo en equipo.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Cómo prefieres gestionar tu tiempo?",
        options: [
            { text: "Con una planificación meticulosa y detallada.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 } },
            { text: "De manera flexible, adaptándome a las circunstancias.", points: { Liberación: 7, Creación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Con enfoque en completar tareas rápidamente.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Liberación: 1 } },
            { text: "Dedicando tiempo a reflexionar y planificar mis acciones.", points: { Virtud: 7, Firmamento: 5, Creación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Qué te hace sentir más satisfecho?",
        options: [
            { text: "Ver los resultados de mi trabajo reflejados en algo tangible.", points: { Creación: 7, Firmamento: 5, Virtud: 3, Destrucción: 1 } },
            { text: "Superar un desafío o competencia.", points: { Destrucción: 7, Dominación: 5, Firmamento: 3, Creación: 1 } },
            { text: "Ayudar a otros a alcanzar sus objetivos.", points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 } },
            { text: "Mantener un equilibrio y orden en mis actividades diarias.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Abismo: 1 } }
        ]
    },
    {
        text: "¿Cómo prefieres abordar una nueva tarea?",
        options: [
            { text: "Con creatividad e innovación, buscando nuevas formas de hacer las cosas.", points: { Creación: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 } },
            { text: "Con un enfoque estructurado y planificado.", points: { Firmamento: 7, Virtud: 5, Creación: 3, Dominación: 1 } },
            { text: "Con energía y determinación para completarla rápidamente.", points: { Destrucción: 7, Dominación: 5, Liberación: 3, Firmamento: 1 } },
            { text: "Con paciencia y atención a los detalles.", points: { Virtud: 7, Firmamento: 5, Creación: 3, Abismo: 1 } }
        ]
    }
];


const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const welcomeForm = document.getElementById('welcome-form');
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const submitBtn = document.getElementById('submit-btn');
const quizTitle = document.getElementById('quiz-title');
const restartBtn = document.getElementById('restart-btn');

function createQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.innerText = `Pregunta ${index + 1}: ${question.text}`;
        questionDiv.appendChild(questionTitle);

        question.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = JSON.stringify(option.points);
            input.dataset.questionIndex = index;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
            questionDiv.appendChild(label);
        });

        quizForm.appendChild(questionDiv);
    });

    quizForm.addEventListener('change', checkIfAllAnswered);
}

function checkIfAllAnswered() {
    const totalQuestions = questions.length;
    const answeredQuestions = new Set();

    document.querySelectorAll('input[type=radio]').forEach((input) => {
        if (input.checked) {
            answeredQuestions.add(input.dataset.questionIndex);
        }
    });

    submitBtn.disabled = answeredQuestions.size !== totalQuestions;
}

function calculateResults() {
    const formData = new FormData(quizForm);
    const scores = {
        Virtud: 0,
        Pecado: 0,
        Creación: 0,
        Destrucción: 0,
        Liberación: 0,
        Dominación: 0,
        Firmamento: 0,
        Abismo: 0
    };

    formData.forEach((value) => {
        const points = JSON.parse(value);
        for (let type in points) {
            scores[type] += points[type];
        }
    });

    let maxScore = 0;
    let minScore = Infinity;
    let mago = '';
    let maxScoreCount = 0;

    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            mago = type;
        }
        if (scores[type] < minScore) {
            minScore = scores[type];
        }
    }

    // Determine if scores are balanced within a threshold
    const threshold = 5;  // Define an appropriate threshold for balance
    const balanced = Object.values(scores).every(score => (maxScore - score) <= threshold);

    // Check specific conditions for each type
    const highScores = ['Virtud', 'Creación', 'Liberación', 'Firmamento'];
    const isHighScore = (type) => highScores.every(highScore => (scores[type] - scores[highScore]) <= 10);

    if (mago === 'Pecado' && isHighScore('Pecado')) {
        mago = 'Virtud';
    } else if (mago === 'Destrucción' && isHighScore('Destrucción')) {
        mago = 'Creación';
    } else if (mago === 'Dominación' && isHighScore('Dominación')) {
        mago = 'Liberación';
    } else if (mago === 'Abismo' && isHighScore('Abismo')) {
        mago = 'Firmamento';
    }

    // Handle the neutral case if all scores are relatively balanced
    if (balanced) {
        mago = 'Neutral';
    }

    resultDiv.innerText = `¡Eres un mago de tipo: ${mago}!`;
    displayResult(mago);
}


function displayResult(resultType) {
    // Limpia las clases anteriores
    resultContainer.className = 'container';

    // Agrega la clase específica para el resultado
    switch (resultType) {
        case 'Virtud':
            resultContainer.classList.add('virtue');
            resultContainer.querySelector('#result').innerHTML = `
                <h2>¡Eres Arúspice de la Virtud!</h2>
                <p>Las respuestas que diste en tu test revelan que posees un fuerte sentido de caridad y empatía. Tu naturaleza altruista te lleva a mejorar la vida de quienes te rodean sin esperar nada a cambio. Conectas emocionalmente con los demás, comprendiendo y compartiendo tanto sus alegrías como sus sufrimientos. Encuentras satisfacción en aliviar el dolor ajeno y en fomentar el bienestar de tu comunidad, viendo en estos actos desinteresados tu propósito vital. No obstante, tu constante impulso por ayudar puede hacerte parecer moralista y santurrón, lo cual podría generar tensiones con quienes prefieren manejar sus problemas de manera diferente.</p>
        
                <p>Los Arúspices, como tú, poseen una profunda comprensión del sufrimiento y la alegría humana. Este entendimiento se refleja en su deseo genuino de hacer el bien y proteger a los demás. Sin embargo, su constante caridad y tendencia a ser santurrones pueden llegar a molestar a quienes los rodean. A menudo, su moral elevada y su insistencia en hacer el bien los hacen parecer irritantes y moralistas, lo que puede generar tensiones. Este comportamiento elevado puede ser percibido como condescendiente por aquellos que prefieren resolver sus propios problemas.</p>
        
                <p>Con la Radiancia, los Arúspices pueden curar heridas, aliviar el dolor y acelerar el crecimiento de las plantas. También tienen la habilidad de transformarse en animales o espíritus del bosque, y en momentos de necesidad, defenderse con fuego sagrado y rayos de luz. Además, pueden bendecir objetos y personas, protegiéndolos del mal y potenciando sus habilidades. El uso de la Radiancia requiere equilibrio y prudencia, ya que su inmenso poder conlleva el riesgo de quemarte con tu propio fuego interior. Recuerda que el camino al infierno está construido de buenas intenciones.</p>
            `;
            break;                
            case 'Pecado':
            resultContainer.classList.add('sin');
            resultContainer.querySelector('#result').innerHTML = `
                <h2>¡Eres Arúspice del Pecado!</h2>
                <p>Las respuestas que diste en tu test sugieren que tienes una personalidad intensa y apasionada. Tu naturaleza volátil y rencorosa puede llevarte a buscar venganza y te resulta difícil perdonar. Sin embargo, esta misma intensidad te da una gran determinación y un fuerte sentido de justicia, aunque a veces te cuesta encontrar un equilibrio.</p>

                <p>Los Arúspices del Pecado utilizan la Radiancia de manera oscura, transformando su entorno con abominaciones y desatando demonios. Este poder proviene de tu rencor y de la necesidad de afirmar tu propia existencia en un mundo que percibes como injusto. Aunque su enfoque puede ser sombrío, también refleja una profunda resolución y un rechazo a aceptar las injusticias sin luchar.</p>

                <p>Con la Radiancia corrupta, puedes causar dolor y destrucción, transformando el entorno y desatando caos. Sin embargo, cada acto malicioso intensifica un dolor interno que, paradójicamente, fortalece tu resolución. Es importante recordar la diferencia entre buscar justicia y caer en la simple venganza. Usar tu poder con equilibrio puede ayudarte a encontrar un propósito más constructivo.</p>
            `;
            break;
            case 'Creación':
                resultContainer.classList.add('creation');
                resultContainer.querySelector('#result').innerHTML = `
                    <h2>¡Eres Conjurador de la Creación!</h2>
                    <p>Las respuestas que diste en tu test sugieren que eres una persona creativa y trabajadora, con una curiosidad insaciable. Te encanta descubrir y experimentar, viendo el mundo como un vasto laboratorio lleno de misterios por explorar. Sin embargo, a veces puedes sentirte inferior y buscas llamar la atención para demostrar tu valía. Tu entusiasmo por la vida puede inspirar a los demás, aunque tu necesidad de validación puede resultar agotadora.</p>

                    <p>Los Conjuradores de la Creación utilizan el Barion, la energía primigenia, para manipular los elementos. Pueden desatar bolas de fuego, ráfagas de hielo, oleadas de agua y vendavales de aire. Su magia se basa en la creatividad y el estudio de las leyes de la naturaleza, permitiéndoles simular elementos con gran precisión. Aunque esta habilidad es impresionante, puede llevar a un agotamiento físico y mental significativo.</p>

                    <p>Además de la magia elemental, puedes crear objetos inanimados como comida y herramientas temporales para situaciones de emergencia. Algunos Conjuradores, conocidos como chamanes, prefieren un enfoque más espiritual, comunicándose con la naturaleza en lugar de manipularla. Manipular el Barion puede causar dolor de cabeza, fatiga y, con el tiempo, síntomas más graves como náuseas y desmayos, recordándote la necesidad de equilibrio y resistencia.</p>
                `;
                break;

            case 'Destrucción':
                resultContainer.classList.add('destruction');
                resultContainer.querySelector('#result').innerHTML = `
                    <h2>¡Eres Conjurador de la Destrucción!</h2>
                    <p>Tu perfil revela una fascinación por lo inusual y lo no convencional. Eres alguien que tiende a desafiar las normas establecidas y prefieres explorar caminos menos transitados. Tu curiosidad te lleva a disfrutar de series, videojuegos y temas que otros podrían considerar tabú o fuera de lo común. Aunque a veces puedas parecer solitario y con gustos incomprendidos, tu enfoque pragmático y tu capacidad para desafiar las expectativas reflejan una profunda independencia y originalidad.</p>

                    <p>Como Conjurador de la Destrucción, utilizas el Barion de una manera única. En lugar de crear, te especializas en la manipulación de los elementos para desatar su energía más caótica. El fuego que conjuras no solo arde, sino que emite una energía que contamina y distorsiona. El agua que manejas se vuelve tóxica y radiactiva, mientras que el viento que controlas arrastra partículas que afectan el entorno. Aunque este poder es formidable, también requiere un gran control y puede llevar a un desgaste significativo.</p>

                    <p>Esta habilidad para manipular el caos revela una personalidad que encuentra su propio camino en la oscuridad y la complejidad. Tu conexión con la Destrucción es una forma de expresar tu autonomía y rebelión contra lo establecido. Si bien tu camino puede ser solitario, es también una afirmación de tu individualidad y una búsqueda de una verdad que va más allá de las convenciones. Usar tu poder de manera responsable puede ayudarte a encontrar un equilibrio entre la destrucción y la creación.</p>
                `;
                break;
                        case 'Liberación':
                            resultContainer.classList.add('liberacion');
                            resultContainer.querySelector('#result').innerHTML = `
                                <h2>¡Eres Evocador de la Liberación!</h2>
                                <p>Como Evocador de la Liberación, tienes una fuerte inclinación hacia la justicia y el liderazgo. Eres alguien con mucho valor y que siempre toma la iniciativa, pero esta pasión puede hacerte parecer mandón, entrometido o desvergonzado. Tu deseo de imponer tus ideales de libertad y equidad puede llevarte a involucrarte en situaciones donde tu intervención no siempre es bienvenida.</p>
                                <p>Psicológicamente, los Evocadores son personas guiadas por un profundo amor por la libertad y una fuerte conexión con el Aquilón. Esta fuerza les otorga una gran capacidad para guiar y proteger a los demás, aunque el constante uso del Aquilón puede resultar en un frío penetrante y en la pérdida ocasional de la voz, recordándoles la importancia de equilibrio y reflexión.</p>
                                <p>En cuanto a tus habilidades, el Aquilón te permite canalizar poderosas evocaciones sonoras que pueden calmar o intimidar a tus adversarios. También puedes crear armas y armaduras de Veridian, las cuales reflejan tus ideales de justicia y proporcionan una protección formidable. La capacidad de conectar con espíritus ancestrales te da una ventaja adicional en combate, fortaleciendo tu vínculo con la libertad y la equidad.</p>
                            `;
                            break;                        
                        
                            case 'Dominación':
                                resultContainer.classList.add('dominacion');
                                resultContainer.querySelector('#result').innerHTML = `
                                    <h2>¡Eres Evocador de la Dominación!</h2>
                                    <p>Como Evocador de la Dominación, tu psicología se caracteriza por una fuerte intransigencia y un deseo absoluto de control. Eres exigente y tus prejuicios te llevan a imponer tu visión sin considerar otras perspectivas. Tu enfoque tiránico a menudo te hace percibir solo lo que tú consideras correcto, y esperas que los demás se sometan sin cuestionar.</p>
                                    <p>Psicológicamente, los Evocadores de la Dominación están consumidos por un deseo de poder absoluto y control. Esta senda oscura del Aquilón corrompe tanto su cuerpo como su mente, dándoles una flexibilidad y agilidad inhumanas, y permitiéndoles distorsionar su forma física de maneras grotescas. La corrupción interna se manifiesta en su capacidad para manipular y dominar a otros, reflejando su propio deterioro moral y emocional.</p>
                                    <p>En cuanto a tus habilidades, puedes transformar tu cuerpo en armas letales y herramientas de control, como cadenas, cuchillas y látigos, que infunden terror y dolor. Tu capacidad para infectar a las víctimas con cristales de Aquilón corrompe su energía vital y te permite manipularlas a tu voluntad. Además, puedes desatar una niebla siniestra que debilita y desorienta a tus enemigos, e incluso invocar espíritus esclavizados o animar cadáveres para que sirvan a tus designios, amplificando tu poder de dominación.</p>
                                `;
                                break;
                            
                                case 'Firmamento':
                                    resultContainer.classList.add('luz');
                                    resultContainer.querySelector('#result').innerHTML = `
                                        <h2>¡Eres Arcanista del Firmamento!</h2>
                                        <p>Como Arcanista del Firmamento, tu inteligencia y talento brillan con una claridad que a menudo parece casi mágica. Eres conocido por tu habilidad para planificar con precisión y ejecutar ideas innovadoras, siempre pareciendo tener un golpe de suerte. Tu confianza en ti mismo puede ser interpretada como arrogancia, y a veces puedes parecer manipulador, pero en realidad, tu carisma y capacidad para atraer a otros son innegables.</p>
                                        <p>Los Arcanistas del Firmamento se destacan por su habilidad para manipular la energía y la luz. Utilizan telequinesis para mover objetos a distancia y levitar, manifestando una fuerza que recuerda la gravedad de una estrella. Su poder también les permite manipular la luz, creando oscuridad o deslumbrantes rayos de luz, y abrir fisuras en el espacio-tiempo para teletransportarse o alterar el flujo temporal.</p>
                                        <p>Además, los Arcanistas pueden llamar a versiones de sí mismos de otros universos para obtener ayuda, aunque esto requiere gran concentración. Sin embargo, el uso constante de su poder puede llevar a una desconexión sensorial del mundo, empezando con la pérdida de los sentidos. A pesar de este riesgo, tu habilidad para navegar y manipular la energía arcana te permite ser una guía luminosa en la oscuridad.</p>
                                    `;
                                    break;
                                
                                    case 'Abismo':
                                        resultContainer.classList.add('void');
                                        resultContainer.querySelector('#result').innerHTML = `
                                            <h2>¡Eres Arcanista del Abismo!</h2>
                                            <p>Como Arcanista del Abismo, te encuentras en un estado de vacío y desesperación. Tu vida está marcada por una profunda tristeza y envidia, y a menudo te sientes como si el mundo te hubiera dado la espalda. Tu falta de esperanza y la sensación de vacío constante hacen que tus planes tiendan a fallar, reflejando tu propia desolación interna.</p>
                                            <p>Los Arcanistas del Abismo están atrapados en un ciclo de hambre insaciable por la luz y la felicidad. Tu poder se manifiesta en una telequinesis destructiva, capaz de desgarrar y deformar la materia. Liberas descargas de energía oscura que impactan con una fuerza devastadora, y tu necesidad vital de consumir la esperanza y alegría de otros es una constante fuente de tormento y desdicha.</p>
                                            <p>Como Arcanista del Abismo, no solo desearías consumir la luz y la alegría ajenas, sino que realmente las devoras para intentar aliviar tu propio vacío. Cada esperanza que aplastas y cada vida que consumes te proporciona solo un alivio momentáneo, manteniéndote en un ciclo interminable de desesperación y hambre.</p>
                                        `;
                                        break;
                                    
            case 'Neutral':
                resultContainer.classList.add('Neutral');
                resultContainer.querySelector('#result').innerHTML = `
                    <h2>¡Eres Vinculador de la Resonancia!</h2>
                    <p>Como Vinculador de la Resonancia, eres una persona profundamente equilibrada y adaptativa. Tienes la capacidad única de conectar con tu entorno y replicar las habilidades mágicas de quienes te rodean. Esta habilidad para imitar otras magias te permite adaptarte a diferentes situaciones, pero tu poder siempre será una reflexión del original, no una manifestación completa. A menudo, esto te lleva a ser percibido como alguien sin una identidad mágica propia, aunque tu equilibrio y versatilidad son valiosos en su propio derecho.</p>
                    <p>Los Vinculadores enfrentan la dificultad de ser marginados y subestimados debido a la percepción de su magia como débil. Sin embargo, tu habilidad para adaptarte y replicar otras magias te otorga una perspectiva única sobre el mundo mágico. Esta magia, aunque considerada inferior por algunos, requiere una habilidad excepcional para imitar con precisión y manejar los poderes de otros, demostrando tu capacidad para mantenerte equilibrado en medio de la adversidad.</p>
                    <p>Tu magia, la Resonancia, permite copiar y utilizar las habilidades de otros, aunque no al nivel del usuario original. Puedes replicar magia elemental, arcana u otras formas de poder, pero la calidad de tu imitación está directamente relacionada con tu habilidad y conocimiento. Aunque a menudo eres visto con desdén, tu capacidad para adaptarte y encontrar tu lugar en un mundo que tiende a marginar a los diferentes resalta la importancia de la diversidad y la habilidad de encontrar equilibrio en cualquier circunstancia.</p>
                `;
    break;

    }

    switchToResultScreen();
}

function switchToQuizScreen() {
    welcomeContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    quizTitle.innerText = `¿Qué clase de mago eres, ${localStorage.getItem('userName')}?`;
}

function switchToResultScreen() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

function switchToWelcomeScreen() {
    resultContainer.style.display = 'none';
    welcomeContainer.style.display = 'block';
    localStorage.removeItem('userName');
}

welcomeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    if (nameInput.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    localStorage.setItem('userName', nameInput);
    switchToQuizScreen();
});

submitBtn.addEventListener('click', () => {
    calculateResults();
});

restartBtn.addEventListener('click', () => {
    switchToWelcomeScreen();
});

document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        switchToQuizScreen();
    } else {
        welcomeContainer.style.display = 'block';
    }
});

createQuiz();

const questions = [
    {
        text: "Cuando tienes un desacuerdo con un amigo, ¿como intentas resolverlo?",
        options: [
          {
            text: "Intento resolverlo con calma, porque valoro nuestra amistad.",
            points: { Virtud: 7, Liberación: 5, Firmamento: 3, Creación: 1 }
          },
          {
            text: "No tengo problema en terminar amistades con quienes no puedo entenderme.",
            points: { Abismo: 7, Liberación: 5, Pecado: 3, Destrucción: 1 }
          },
          {
            text: "Prefiero dar tiempo para que ambos nos calmemos y podamos olvidar el problema antes de retomar la conversación.",
            points: { Creación: 7, Firmamento: 5, Virtud: 3, Abismo: 1 }
          },
          {
            text: "Busco llegar a un acuerdo dialogando. Hablando todos podemos entendernos.",
            points: { Liberación: 7, Virtud: 5, Dominación: 3, Pecado: 1 }
          },
          {
            text: "La forma de resolverlo depende de la gravedad del desacuerdo.",
            points: { Pecado: 7, Destrucción: 5, Abismo: 3, Firmamento: 1 }
          },
          {
            text: "Analizo la situación, me disculpo si es necesario o pido que se disculpen conmigo.",
            points: { Firmamento: 7, Creación: 5, Liberación: 3, Destrucción: 1 }
          }
        ]
    },
        {
            text: "¿Qué te motiva a iniciar un nuevo proyecto?",
            options: [
              {
                text: "Me gusta descubrir nuevas habilidades y una remuneración económica nunca viene mal.",
                points: { Creación: 7, Abismo: 5, Firmamento: 3, Liberación: 1 }
              },
              {
                text: "Innovar y hacer las cosas de manera diferente.",
                points: { Destrucción: 7, Liberación: 5, Creación: 3, Firmamento: 1 }
              },
              {
                text: "No me gusta sentirme estancado. Tengo aspiraciones que me gustaría alcanzar.",
                points: { Firmamento: 7, Destrucción: 5, Creación: 3, Liberación: 1 }
              },
              {
                text: "La posibilidad de contribuir económicamente al bienestar de mi familia.",
                points: { Virtud: 7, Creación: 5, Liberación: 3, Firmamento: 1 }
              },            
              {
                text: "El incentivo económico y los beneficios materiales.",
                points: { Pecado: 7, Abismo: 5, Creación: 3, Firmsmento: 1 }
              },
              {
                text: "Enfrentarme a mis inseguridades para salir de mi zona de confort y explorar nuevas oportunidades.",
                points: { Liberación: 7, Firmamento: 5, Creación: 3, Abismo: 1 }
            }
            ]
        },          
      {
        text: "¿Cómo describes tu estilo de trabajo?",
        options: [
          {
            text: "Siempre me esfuerzo e intento conseguir soluciones usando mis habilidades.",
            points: { Creación: 7, Liberación: 5, Virtud: 3, Pecado: 1 }
          },
          {
            text: "Hago solo lo necesario para cumplir con los objetivos y evito involucrarme más.",
            points: { Pecado: 7, Destrucción: 5, Liberación: 3, Creación: 1 }
          },
          {
            text: "Conozco lo que hago y suelo utilizar herramientas que me faciliten el trabajo y me ayuden.",
            points: { Firmamento: 7, Creación: 5, Virtud: 3, Abismo: 1 }
          },          
          {
            text: "Disfruto trabajando en equipo y valoro la colaboración.",
            points: { Liberación: 7, Virtud: 5, Firmamento: 3, Destrucción: 1 }
          },
          {
            text: "Actúo con honestidad y me esfuerzo por alcanzar la excelencia en todo lo que hago.",
            points: { Virtud: 7, Firmamento: 5, Creación: 3, Abismo: 1 }
          },
          {
            text: "Tomo la iniciativa y dirijo el proyecto según mi visión.",
            points: { Dominación: 7, Destrucción: 5, Abismo: 3, Pecado: 1 }
          }
        ]
      },      
      {
        text: "Cuando trabajas en equipo, ¿cuál es tu rol habitual?",
        options: [
          {
            text: "Lidero el equipo, establezco metas y dirijo el proyecto hacia el éxito.",
            points: { Dominación: 7, Abismo: 5, Firmamento: 3, Liberación: 1 }
          },
          {
            text: "Colaboro activamente y ofrezco apoyo para que el equipo funcione bien.",
            points: { Virtud: 7, Liberación: 5, Creación: 3, Abismo: 1 }
          },
          {
            text: "Soy eficiente y presto atención a los detalles. Se puede confiar en mi.",
            points: { Firmamento: 7, Virtud: 5, Creación: 3, Abismo: 1 }
          },
          {
            text: "Sigo las instrucciones y me encargo de tareas específicas que se me asignan.",
            points: { Creación: 7, Pecado: 5, Virtud: 3, Firmamento: 1 }
          },
          {
            text: "Suelo confiar más en mis propias habilidades, termino haciendo gran parte del trabajo en solitario.",
            points: { Abismo: 7, Dominación: 5, Firmamento: 3, Creación: 1 }
          },
          {
            text: "Sirvo de guía en los proyectos y al haber algun problema. A veces instruyo s los novatos.",
            points: { Liberación: 7, Firmamento: 5, Dominación: 3, Abismo: 1 }
          }
        ]
      },
    {
        text: "¿Qué valoras más en una amistad?",
        options: [
          {
            text: "Lealtad y apoyo constante.",
            points: { Firmamento: 7, Virtud: 5, Liberación: 3, Abismo: 1 }
          },
          {
            text: "Alguien con quien sea fluido hablar y facil de invitar a salir a un evento o a tomar algo.",
            points: { Liberación: 7, Creación: 5, Firmamento: 3, Destrucción: 1 }
          },
          {
            text: "Compartir ideas y empezar proyectos juntos. O jugar Videojuegos con ellos",
            points: { Creación: 7, Liberación: 5, Firmamento: 3, Abismo: 1 }
          },
          {
            text: "Compartir gustos en común.",
            points: { Destrucción: 7, Firmamento: 5, Pecado: 3, Virtud: 1 }
          },
          {
            text: "Tener compañía y con quién poder desahogarme.",
            points: { Firmamento: 7, Creación: 5, Destrucción: 3, Virtud: 1 }
          },
          {
            text: "Tener a alguien a quién pueda pedirle ayuda o favores.",
            points: { Dominación: 7, Pecado: 5, Firmamento: 3, Liberación: 1 }
          }
        ]
    },
    {
        text: "¿Qué actividad prefieres en tu tiempo libre?",
        options: [
          {
            text: "Me gusta compartir momentos con mi familia y mis amigos.",
            points: { Virtud: 7, Liberación: 5, Firmamento: 3, Creación: 1 }
          },
          {
            text: "Disfruto de pasar tiempo solo, ya sea leyendo un buen libro o inmiscuyéndome en videojuegos. O jugar videojuegos en linea",
            points: { Creación: 7, Firmamento: 5, Abismo: 3, Destrucción: 1 }
          },
          {
            text: "Disfruto de actividades sencillas como ir al cine y también de grandes eventos como fiestas.",
            points: { Firmamento: 7, Virtud: 5, Liberación: 3, Dominación: 1 }
          },
          {
            text: "Buscar formas de mejorar mis habilidades y competir en desafíos.",
            points: { Abismo: 7, Destrucción: 5, Creación: 3, Dominación: 1 }
          },
          {
            text: "Me gusta practicar algun deporte, hacer natación, ir al gimnasio, salir a trotar y/o practicar yoga. También puedo disfrutar de salir con amigos a alguna fiesta.",
            points: { Liberación: 7, Creación: 5, Virtud: 3, Destrucción: 1 }
          },
          {
            text: "A veces pierdo mucho el tiempo en las redes sociales.",
            points: { Destrucción: 7, Pecado: 5, Creación: 3, Liberación: 1 }
          }
        ]
      },      
      {
        text: "¿Cómo manejas el estrés?",
        options: [
          {
            text: "Me sumerjo en actividades que me distraen y me alejan del problema.",
            points: { Destrucción: 7, Firmamento: 5, Liberación: 3, Pecado: 1 }
          },
          {
            text: "Intento mantener la calma y analizar la situación para encontrar una solución.",
            points: { Firmamento: 7, Creación: 5, Virtud: 3, Abismo: 1 }
          },
          {
            text: "Busco apoyo de amigos y familiares para desahogarme y recibir consejo.",
            points: { Virtud: 7, Firmamento: 5, Creación: 3, Pecado: 1 }
          },
          {
            text: "Creo que lo mejor es no evadir los problemas para que no se acumulen y sentirme más libre .",
            points: { Liberación: 7, Virtud: 5, Dominación: 3, Destrucción: 1 }
          },
          {
            text: "Se que el trabajo duro y mi esfuerzo me ayudaran a salir adelante.",
            points: { Creación: 7, Liberación: 5, Virtud: 3, Firmamento: 1 }
          },
          {
            text: "A veces me siento abrumado y prefiero evitar la situación si es posible.",
            points: { Abismo: 7, Dominación: 5, Virtuf: 3, Destrucción: 1 }
          }
        ]
      },      
      {
        text: "¿Qué tipo de películas prefieres?",
        options: [
          {
            text: "Comedias, películas románticas y/o musicales. En general películas relajantes.",
            points: { Virtud: 7, Liberación: 5, Creación: 3, Firmamento: 1 }
          },
          {
            text: "Fantasía y ciencia ficción. Peliculas épicas",
            points: { Creación: 7, Firmamento: 5, Destrucción: 3, Pecado: 1 }
          },
          {
            text: "Películas viscerales y sangrientas.",
            points: { Destrucción: 7, Creación: 5, Pecado: 3, Abismo: 1 }
          },
          {
            text: "Películas de acción y aventuras. Peliculas de súper héroes. Plículas históricas o biográficas.",
            points: { Liberación: 7, Creación: 5, Virtud: 3, Destrucción: 1 }
          },
          {
            text: "Peliculas de detectives o películas de misterio.",
            points: { Firmamento: 7, Virtud: 5, Liberación: 3, Abismo: 1 }
          },
          {
            text: "Películas de terror que me mantienen en tensión y desafío mis miedos.",
            points: { Abismo: 7, Destrucción: 5, Creación: 3, Pecado: 1 }
          }
        ]
      },      
      {
        text: "¿Cuál es tu mayor fortaleza?",
        options: [
          {
            text: "Mi capacidad para mantener la calma y tomar decisiones sabias bajo presión.",
            points: { Firmamento: 7, Liberación: 5, Virtud: 3, Abismo: 1 }
          },
          {
            text: "Trabajo y me esfuerzo por salir adelante. Soy bastante creativo.",
            points: { Creación: 7, Dominación: 5, Virtud: 3, Liberación: 1 }
          },
          {
            text: "Mi empatía y capacidad para entender y apoyar a los demás en sus momentos difíciles.",
            points: { Virtud: 7, Firmamento: 5, Creación: 3, Liberación: 1 }
          },
          {
            text: "Que soy responsable con lo que me propongo y no tengo miedo de empezar proyectos aunque otros no crean en mi.", 
            points: { Liberación: 7, Creación: 5, Firmamento: 3, Destrucción: 1 }
          },
          {
            text: "Mi habilidad para liderar y dirigir proyectos con una visión clara y estratégica.",
            points: { Dominación: 7, Abismo: 5, Destrucción: 3, Pecado: 1 }
          },
          {
            text: "Mi capacidad para mantenerme motivado y mantenerme indiferente ante las críticas.",
            points: { Destrucción: 7, Virtud: 5, Liberación: 3, Pecado: 1 }
          }
        ]
      },
      {
        text: "¿Cómo te relacionas con el estudio y lo académico?",
        options: [
          {
            text: "No tengo problema de estudiar y tengo una buena relación con mis maestros y compañeros.",
            points: { Virtud: 7, Liberación: 5, Creación: 3, Abismo: 1 }
          },
          {
            text: "No tengo ningún problema con el estudio, me esfuerzo por mantenerme al día con los avances en mi campo.",
            points: { Creación: 7, Firmamento: 5, Liberación: 3, Destrucción: 1 }
          },
          {
            text: "La verdad es que el estudio simplemente no es lo mío.",
            points: { Destrucción: 7, Pecado: 5, Liberación: 3, Creación: 1 }
          },
          {
            text: "Me va bien, por lo general me gusta aprender practicando lo aprendido y ser autodidacta.",
            points: { Firmamento: 7, Creación: 5, Creación: 3, Pecado: 1 }
          },
          {
            text: "A pesar de no ser un fan del estudio, soy responsable con los trabajos y trato de adaptarme a las exigencias.",
            points: { Liberación: 7, Virtud: 5, Creación: 3, Destrucción: 1 }
          },
          {
            text: "A veces siento que el estudio es una carga y solo me esfuerzo lo suficiente para pasar los exámenes.",
            points: { Pecado: 7, Abismo: 5, Liberación: 3, Destrucción: 1 }
          }
        ]
      },
      {
        text: "¿Qué tipo de entorno prefieres para trabajar?",
        options: [
          {
            text: "Prefiero trabajar sin distracciones ni interrupciones. No tengo problema con la presión.",
            points: { Firmamento: 7, Liberación: 5, Destrucción: 3, Creación: 1 }
          },
          {
            text: "Prefiero un entorno tranquilo y sin demasiadas existencias. donde pueda adaptarme a diferentes tareas en donde daré lo mejor de mí.",
            points: { Creación: 7, Firmamento: 5, Liberación: 3, Virtud: 1 }
          },
          {
            text: "Me gusta trabajar bajo presión y en situaciones desafiantes.",
            points: { Abismo: 7, Dominación: 5, Liberación: 3, Firmamento: 1 }
          },
          {
            text: "Me gusta mantener un entorno ordenado y ser productivo, además de orientar a mis compañeros cuando lo necesitan.",
            points: { Liberación: 7, Virtud: 5, Creación: 3, Dominación: 1 }
          },   
          {
            text: "Prefiero un entorno donde pueda tomar el control y dirigir a otros.",
            points: { Dominación: 7, Abismo: 5, Pecado: 3, Firmamento: 1 }
          },
          {
            text: "Prefiero un entorno colaborativo donde pueda interactuar y aprender de los demás.",
            points: { Virtud: 7, Creación: 5, Liberación: 3, Firmamento: 1 }
          }
        ]
      },         
        {
            text: "¿Qué te inspira más?",
            options: [
              {
                text: "Cuando un familiar o amigo cercano cumple un objetivo.",
                points: { Virtud: 7, Liberación: 5, Firmamento: 3, Creación: 1 }
              },
              {
                text: "Cuando un proyecto propio da los resultados esperados.",
                points: { Creación: 7, Firmamento: 5, Liberación: 3, Destrucción: 1 }
              },
              {
                text: "Superar un reto que parecía imposible y saber que podré superar los desafíos futuros.",
                points: { Firmamento: 7, Virtud: 5, Creación: 3, Destrucción: 1 }
              },
              {
                text: "Me inspira la oportunidad de hacer una diferencia positiva en el mundo",
                points: { Liberación: 7, Creación: 5, Creación: 3, Abismo: 1 }
              },
              {
                text: "Ser reconocido por mis logros y habilidades.",
                points: { Dominación: 7, Pecado: 5, Firmamento: 3, Abismo: 1 }
              },
              {
                text: "Cuando le va mal a la gente que no me agrada.",
                points: { Pecado: 7, Abismo: 5, Dominación: 3, Firmamento: 1 }
              }
            ]
          },          
          {
            text: "¿Cuál es tu enfoque hacia los cambios?",
            options: [
              {
                text: "Los cambios pueden ser desafiantes, pero trato de adaptarme manteniendo una actitud positiva.",
                points: { Virtud: 7, Firmamento: 5, Liberación: 3, Destrucción: 1 }
              },
              {
                text: "A veces encuentro difícil adaptarme a los cambios, pero trato de mantenerme flexible y abierto.",
                points: { Creación: 7, Liberación: 5, Destrucción: 3, Abismo: 1 }
              },
              {
                text: "Prefiero la estabilidad y me siento incómodo con cambios inesperados o repentinos.",
                points: { Abismo: 7, Dominación: 5, Creación: 3, Destrucción: 1 }
              },
              {
                text: "Veo los cambios como oportunidades para crecer y mejorar, y me adapto rápidamente a nuevas situaciones.",
                points: { Liberación: 7, Virtud: 5, Creación: 3, Destrucción: 1 }
              },
              {
                text: "Los cambios me desafían, pero a menudo los enfrento con una actitud crítica y analítica.",
                points: { Dominación: 7, Pecado: 5, Creación: 3, Firmamento: 1 }
              },
              {
                text: "Prefiero la estabilidad, pero puedo adaptarme a los cambios cuando es necesario.",
                points: { Firmamento: 7, Dominación: 5, Virtud: 3, Creación: 1 }
              }
            ]
          },          
          {
            text: "¿Cómo te describirían tus amigos?",
            options: [
              {
                text: "Me describen como alguien leal y siempre dispuesto a ayudar, alguien en quien pueden confiar.",
                points: { Virtud: 7, Firmamento: 5, Liberación: 3, Abismo: 1 }
              },
              {
                text: "Me describen como alguien rencoroso y que a veces puede ser dominante en las decisiones.",
                points: { Dominación: 7, Pecado: 5, Firmamento: 3, Abismo: 1 }
              },
              {
                text: "Me ven como una persona creativa y llena de ideas, alguien que siempre busca nuevas formas de hacer las cosas.",
                points: { Creación: 7, Virtud: 5, Firmamento: 3, Destrucción: 1 }
              },
              {
                text: "Me consideran una persona adaptable y positiva, que enfrenta los desafíos con una actitud abierta. Que no deja que las criticas de los demas le afecten.",
                points: { Liberación: 7, Virtud: 5, Firmamento: 3, Creación: 1 }
              },
              {
                text: "Me ven como alguien astuto y carismático, que siempre tiene un plan bien pensado y sabe cómo manejar las situaciones.",
                points: { Firmamento: 7, Liberación: 5, Virtud: 3, Abismo: 1 }
              },           
              {
                text: "Me consideran una persona que a veces se siente abrumada y evita los conflictos cuando puede.",
                points: { Pecado: 7, Abismo: 5, Liberación: 3, Destrucción: 1 }
              }
            ]
          },
          {
            text: "¿Cómo manejas los fracasos?",
            options: [
              {
                text: "Aprendo de mis errores sin dudar en pedir ayuda cuando la necesito.",
                points: { Virtud: 7, Creación: 5, Firmamento: 3, Abismo: 1 }
              },
              {
                text: "Veo el fracaso como una etapa normal en el camino hacia el éxito.",
                points: { Liberación: 7, Firmamento: 5, Creación: 3, Virtud: 1 }
              },
              {
                text: "Me tomo el tiempo para analizar la situación y ajustar mi enfoque para mejorar en el futuro.",
                points: { Firmamento: 7, Virtud: 5, Liberación: 3, Creación: 1 }
              },
              {
                text: "Me esfuerzo por reponerme rápidamente y buscar nuevas oportunidades para seguir adelante.",
                points: { Creación: 7, Liberación: 5, Firmamento: 3, Dominación: 1 }
              },
              {
                text: "A veces me siento desmotivado y necesito tiempo para volver a encontrar la inspiración para seguir adelante.",
                points: { Abismo: 7, Destrucción: 5, Liberación: 3, Destrucción: 1 }
              },
              {
                text: "Enfrento el fracaso con determinación y trato de aplicar un enfoque más agresivo para revertir la situación.",
                points: { Pecado: 7, Dominación: 5, Liberación: 3, Destrucción: 1 }
              }
            ]
          },
          {
            text: "¿Cómo describes tu estilo de comunicación?",
            options: [
                {
                    text: "Soy amable y cortés con todos, incluso con completos desconocidos.",
                    points: { Virtud: 7, Liberación: 5, Firmamento: 3, Destrucción: 1 }
                },
            {
                text: "No hablo con extraños por mi timidez, pero soy muy hablador cuando gano confianza. O también como alguien callado y tranquilo.",
                    points: { Creación: 7, Firmamento: 5, Virtud: 3, Abismo: 1 }
            },
            {
                text: "Mi estilo de comunicación es directo y al grano; creo que la honestidad es fundamental.",
                points: { Destrucción: 7, Pecado: 5, Liberación: 3, Virtud: 1 }
            },
            {
                text: "No suelo iniciar conversaciones, pero disfruto hablando y escuchando a los demás, incluso desconocidos.",
                points: { Firmamento: 7, Virtud: 5, Creación: 3, Pecado: 1 }
            },
            {
                text: "Inicio conversaciones hasta con extraños. Soy bastante hablador.",
                points: { Liberación: 7, Virtud: 5, Firmamento: 3, Dominación: 1 }
            },
            {
                text: "Me fastidia cuando los extraños inician conversaciones abruptas conmigo.",
                points: { Abismo: 7, Pecado: 5, Creación: 3, Destrucción: 1 }
              }
            ]
          },          
          {

            text: "¿Cómo eliges a tu pareja?",

            options: [
                {
                    text: "Con tal que me ame y le tenga confianza, lo demas no importa.",
                    points: { Virtud: 7, Creación: 5, Firmamento: 3, Liberación: 1 }
                },
            {
                text: "Tengo gustos específicos sobre las personas. O, me da vergüenza confesar lo que siento.",
                    points: { Creación: 7, Firmamento: 5, Abismo: 3, Liberación: 1 }
            },
            {
                text: "Cuando alguien me gusta intento hablarle. Si nos llevamos bien, no tengo vergüenza en confesar mi sentimientos.",
                points: { Liberación: 7, Virtud: 5, Firmamento: 3, Dominación: 1 }
            },
            {
                text: "Tengo gustos de apariencia y de éxito pero puedo dejarlos a un lado por amor.",
                points: { Firmamento: 7, Liberación: 5, Virtud: 3, Pecado: 1 }
            },
            {
                text: "No me gusta relacionarme con cualquiera.",
                points: { Abismo: 7, Dominación: 5, Creación: 3, Firmamento: 1 }
            },
            {
                text: "No estoy buscando nada por los momentos.",
                points: { Destrucción: 7, Pecado: 5, Creación: 3, Abismo: 1 }
              }
            ]
          },
                    {

            text: "¿En que trabajas o te gustaría trabajar?",

            options: [
                {
                    text: "Cosas de Arte. Como diseño gráfico o dibujos por encargo, por ejemplo. O cosas de comida, como chef, nutriólogo, panadero, o incluso fincas.",
                    points: { Virtud: 7, Creación: 5, Liberación: 3, Destrucción: 1 }
                },
            {
                text: "Con personas. Profesor, atención a cliente, ventas telefónicas o en orfanatos/ancianatos, por ejemplo.",
                    points: { Liberación: 7, Virtud: 5, Creación: 3, Abismo: 1 }
            },
            {
                text: "Cosas Abstractas. Programación, analisis de datos, control de sistemas, por ejemplo.",
                points: { Firmamento: 7, Abismo: 5, Creación: 3, Dominación: 1 }
            },
            {
                text: "Persona pública. Actor, músico, celebridad de Internet, político, por ejemplo O persona de leyes, como abogado o juez..",
                points: { Liberación: 7, Virtud: 5, Firmamento: 3, Firmamento: 1 }
            },
            {
                text: "En el area de salud. Medicina, odontología o Enfermería, por ejemplo",
                points: { Firmamento: 7, Virtud: 5, Creación: 3, Liberación: 1 }
            },
            {
                text: "No discrimino el trabajo, cualquier cosa me viene bien. O me gusta la compra y venta, no me molestaría tener mi propio negocio.",
                points: { Creación: 7, Liberación: 5, Virtud: 3, Destrucción: 1 }
              }
            ]
          },
                    {
            text: "¿Que opinas de las personas diferentes a ti? De otra nacionalidad o color, por ejemplo.",
            options: [
                {
                    text: "Tengo amigos de todos los colores, tamaños y nacionalidades.",
                    points: { Virtud: 7, Creación: 5, Liberación: 3, Pecado: 1 }
                },
            {
                text: "A veces me siento incómodo en presencia de gente tan diferente y desconocida. Pero si tengo confianza con alguien no importa lo demás.",
                    points: { Creación: 7, Liberación: 5, Virtud: 3, Firmamento: 1 }
            },
            {
                text: "Admito tener ciertos prejuicios, pero no es un factor determinante. Gracias a internet he hecho amigos muy dispares.",
                points: { Firmamento: 7, Pecado: 5, Creación: 3, Virtud: 1 }
            },
            {
                text: "No me considero alguien prejuicioso, pero no me molestaría que hubieran mayores controles y restricciones. Control fronterizo, por ejemplo. Me parece hipócrita la inclusión forzada.",
                points: { Liberación: 7, Firmamento: 5, Creación: 3, Pecado: 1 }
            },
            {
                text: "Sinceramente siento desconfianza. No siento odio, pero cuido mis cosas en su presencia.",
                points: { Pecado: 7, Destrucción: 5, Firmamento: 3, Virtud: 1 }
            },
            {
                text: "Si vienen a trabajar esta bien, pero no se puede dejar entrar a cualquiera. Los controles fronterizos no son por prejuicios sino por seguridad.",
                points: { Dominación: 7, Abismo: 5, Pecado: 3, Firmamento: 1 }
              }
            ]
          },
                    {
            text: "¿Que clases de colores te gustan?",
            options: [
                {
                    text: "Calidos y brillantes. Como el amarillo o el rojo.",
                    points: { Virtud: 7, Pecado: 5, Creación: 3, Destrucción: 1 }
                },
            {
                text: "Colores acogedores. Como el naranja, el marrón o el beige.",
                    points: { Creación: 7, Destrucción: 5, Virtud: 3, Pecado: 1 }
            },
            {
                text: "Colores armoniosos, como el verde o turquesa.",
                points: { Liberación: 7, Dominación: 5, Firmamento: 3, Abismo: 1 }
            },
            {
                text: "Colores neutros. Como el plateado o el gris.",
                points: { Dominación: 7, Abismo: 5, Liberación: 3, Firmsmento: 1 }
            },
            {
                text: "Colores fríos. Como el azul o morado.",
                points: { Firmamento: 7, Abismo: 5, Liberación: 3, Dominación: 1 }
            },
            {
                text: "Colores oscuros. Como el negro o el azul oscuro",
                points: { Abismo: 7, Dominación: 5, Firmamento: 3, Liberación: 1 }
              }
            ]
          },
          {
            text: "¿Cual crees que es tu mayor defecto?",
            options: [
              {
                text: "Mi timidez e inseguridad. O mi falta de comunicación. Tal vez mi actitud a la vida.",
                points: { Creación: 7, Firmamento: 5, Pecado: 3, Destrucción: 1 }
                          },
              {
                text: "Mi falta de habilidades artísticas. O mi arrogancia.",
                points: { Firmamento: 7, Liberación: 5, Abismo: 3, Pecado: 1 }
                      },
              {
                text: "No se cuando decir que no. Se me dificulta darme a respetar.",
                points: { Virtud: 7, Creación: 5, Destrucción: 3, Firmamento: 1 }
                      },
              {
                text: "A veces me cuesta entender otros puntos de vista. O a veces me meto en problemas ajenos.",
                points: { Liberación: 7, Virtud: 5, Pecado: 3, Creación: 1 }
                      },
              {
                text: "Creo que a veces soy grosero. Tal vez tenga problemas de temperamento.",
                points: { Pecado: 7, Destrucción: 5, Liberación: 3, Firmamento: 1 }
                      },
              {
                text: "No sabria que decir.",
                points: { Abismo: 7, Dominación: 5, Creación: 3, Destrucción: 1 }
                        }
                      ]
          },
          {
            text: "¿Como es tu alimentación y tu actividad física?",
            options: [
              {
                text: "Desde siempre me ha gustado comer variado y saludable, el ejercicio me relaja.",
                points: { Virtud: 7, Firmamento: 5, Liberación: 3, Dominación: 1 }
                                    },
              {
                text: "Hago dietas saludables y hago rutinas de actividades fisicas diarias",
                points: { Liberación: 7, Virtud: 5, Abismo: 3, Destrucción: 1 }
                                },
              {
                text: "Intento comer variado y de vez en cuando me ejercito, lo hago porque se que es saludable.",
                points: { Firmamento: 7, Pecado: 5, Virtud: 3, Creación: 1 }
                                },
              {
                text: "A veces lo intento, pero no me gusta mucho la verdad.",
                points: { Creación: 7, Firmamento: 5, Destrucción: 3, Abismo: 1 }
                                },
              {
                text: "Hago dietas estrictas y jornadas intensas de ejercicio .",
                points: { Dominación: 7, Abismo: 5, Liberación: 3, Virtud: 1 }
                                },
              {
                text: "No se, nunca pienso en eso.",
                points: { Destrucción: 7, Pecado: 5, Creación: 3, Firmamento: 1 }
                                  }
                                ]
          },
         {
            text: "¿Como son tus relaciones sociales?",
            options: [
              {
                text: "No me resulta fácil hacer amigos. Tengo varios amigos por Internet",
                points: { Creación: 7, Firmamento: 5, Liberación: 3, Dominación: 1 }
                                    },
              {
                text: "Soy bastante extrovertido y me resulta fácil hacer amigos.",
                points: { Liberación: 7, Virtud: 5, Abismo: 3, Destrucción: 1 }
                                },
                                 {
                                   text: "En pocas personas se puede confiar.",
                                   points: { Destrucción: 7, Pecado: 5, Creación: 3, Firmamento: 1 }
                                 },
              {
                text: "Soy carismático y agradable. Tengo varios amigos pero no soy el alma de la fiesta.",
                points: { Firmamento: 7, Liberación: 5, Virtud: 3, Dominación: 1 }
                                },
              {
                text: "Soy bueno para escuchar y la gente confia en mi para desahogarse. Pero no me considero demasiado extrovertido.",
                points: { Virtud: 7, Firmamento: 5, Liberación: 3, Creación: 1 }
                                },
             
              {
                text: "Soy bastante extrovertido y amigo de todos. Suelo ser el centro de atención .",
                points: { Dominación: 7, Abismo: 5, Liberación: 3, Firmamento: 1 }
                                  }
                                ]
          },
          {
            text: "¿Crees en cosas como el horóscopo o similares?",
            options: [
              {
                text: "No, no creo en supersticiones.",
                points: { Creación: 7, Firmamento: 5, Liberación: 3, Dominación: 1 }
                                              },
              {
                text: "Si, me gusta mucho. Tal vez soy bastante espíritual.",
                points: { Virtud: 7, Liberación: 5, Firmamento: 3, Pecado: 1 }
                                          },
              {
                text: "De vez en cuando lo leo, por curiosidad o comparar con amigos, pero no creo en nada de eso.",
                points: { Firmamento: 7, Creación: 5, Liberación: 3, Virtud: 1 }
                                          },
                                          {

                text: "Los leo a diario y tal vez me dejo guiar por ellos.",

                points: { Pecado: 7, Destrucción: 5, Virtud: 3, Liberación: 1 }
                                            },
              {
                text: "No siempre lo leo, pero si me identifico y creo en eso.",
                points: { Liberación: 7, Virtud: 5, Firmamento: 3, Pecado: 1 }
                                          },
              {
                text: "Son puras estupideces.",
                points: { Dominación: 7, Abismo: 5, Firmamento: 3, Creación: 1 }
                                          }
              
                                          ]
          },
          {
            text: "¿Cual es tu estación favorita del año?",
            options: [
              {
                text: "Primavera.",
                points: { Virtud: 7, Firmamento: 5, Liberación: 3, Destrucción: 1 }
                                              },
              {
                text: "Verano",
                points: { Creación: 7, Virtud: 5, Pecado: 3, Firmamento: 1 }
                                          },
              {
                text: "Otoño.",
                points: { Firmamento: 7, Liberación: 5, Abismo: 3, Creación: 1 }
                                          },
              {
                text: "Invierno.",
                points: { Liberación: 7, Firmamento: 5, Dominación: 3, Abismo: 1 }                         },
                                          ]
          },
          {
            text: "¿Que opinas de los menos afortunados?",
            options: [
              {
                text: "Me conmueven,  pero no suelo pensar mucho en eso.",
                points: { Firmamento: 7, Creación: 5, Virtud: 3, Dominación: 1 }
                                                        },
              {
                text: "Siento tristeza por los enfermos y discapacitados. Los mendigos podrian ponerse a trabajar.",
                points: { Liberación: 7, Virtud: 5, Firmamento: 3, Pecado: 1 }
                                                   },
                                                   {
                                                     text: "Yo no les intereso, ¿porque debería hacerlo yo?.",
                                                     points: { Dominación: 7, Pecado: 5, Abismo: 3, Creación: 1 }
                                                   },
              {
                text: "Suelo ayudar a los necesitados si está en mis posibilidades.",
                points: { Virtud: 7, Liberación: 5, Firmamento: 3, Creación: 1 }
                                                    },
              {
                text: "Me esfuerzo mucho trabajando y yo necesito mi dinero.",
                points: { Creación: 7, Abismo: 5, Dominación: 3, Liberación: 1 }
                                                    },
              {
                text: "Dono las cosas que me sobran o no necesito, en lugar de botarlas.",
                points: { Virtud: 7, Firmamento: 5, Liberación: 3, Creación: 1 }
                                                    },
              
                                                    ]
          },  
          {

            text: "¿A donde te gusta viajar?",

            options: [
              {
                text: "Me gusta visitar paises extranjeros.",
                points: { Liberación: 7, Firmamento: 5, Virtud: 3, Creación: 1 }
                                    },
                                    {
                                      text: "Prefiero ahorrar el dinero.",
                                      points: { Destrucción: 7, Pecado: 5, Creación: 3, Virtud: 1 }
                                    },
              {
                text: "Me gusta ir a la playa. O me gusta ir a excursiones, caminatas o campamentos, en montañas o bosques.",
                points: { Virtud: 7, Liberación: 5, Creación: 3, Destrucción: 1 }
                                },
              {
                text: "Me gusta ir a parques de diversiones o grandes centros de entretenimiento. O me gusta visitar grandes ciudades.",
                points: { Firmamento: 7, Creación: 5, Liberación: 3, Abismo: 1 }
                                },
                                {
                                  text: "Prefiero visitar centros de estudio lejanos o caros que me ayuden a progresar.",
                                  points: { Dominación: 7, Destrucción: 5, Abismo: 3, Creación: 1 }
                                },
              {
                text: "Me gusta visitar a mis familiares que viven en sitios lejanos a mi hogar. O me gusta visitar sitios con valos histórico o cultural.",
                points: { Creación: 7, Virtud: 5, Firmamento: 3, Liberación: 1 }
                                }
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

    console.log('Puntuaciones:', scores); // Mensaje de depuración

    // Actualiza los puntajes en el contenedor
    document.getElementById('score-virtue').innerText = scores['Virtud'];
    document.getElementById('score-sin').innerText = scores['Pecado'];
    document.getElementById('score-creation').innerText = scores['Creación'];
    document.getElementById('score-destruction').innerText = scores['Destrucción'];
    document.getElementById('score-liberation').innerText = scores['Liberación'];
    document.getElementById('score-domination').innerText = scores['Dominación'];
    document.getElementById('score-firmament').innerText = scores['Firmamento'];
    document.getElementById('score-abyss').innerText = scores['Abismo'];

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

    const threshold = 5;
    const balanced = Object.values(scores).every(score => (maxScore - score) <= threshold);

    const highScores = ['Virtud', 'Creación', 'Liberación', 'Firmamento'];
    const isHighScore = (type) => highScores.every(highScore => (scores[type] - scores[highScore]) <= 10);

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
                <p>Las respuestas que diste en tu test revelan que posees un fuerte sentido de caridad y empatía. Tu naturaleza altruista te lleva a mejorar la vida de tus seres queridos sin esperar nada a cambio. Conectas emocionalmente con los demás, comprendiendo y compartiendo tanto sus alegrías como sus sufrimientos. Encuentras satisfacción en aliviar el dolor ajeno y en fomentar el bienestar de tu comunidad, viendo en estos actos desinteresados tu propósito vital.</p>
        
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
                    <p>Las respuestas que diste en tu test sugieren que eres una persona creativa y trabajadora, con una curiosidad insaciable. Te encanta descubrir y experimentar, viendo el mundo como un vasto laboratorio lleno de misterios por explorar. Sin embargo, a veces puedes sentirte inferior y buscas llamar la atención para demostrar tu valía. Es probable que también tengas una tendencia a la introversión o timidez.</p>

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
                                <p>Como Evocador de la Liberación, tienes una fuerte inclinación hacia la justicia y el liderazgo. Eres alguien con mucho valor y que siempre toma la iniciativa. Es probable que tengas una tendencia a la extroversion y tengas bastantes smigos. Pero esta pasión puede hacerte parecer mandón, entrometido o desvergonzado. Tu deseo de imponer tus ideales de libertad y equidad puede llevarte a involucrarte en situaciones donde tu intervención no siempre es bienvenida.</p>
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
    window.scrollTo(0, 0); // Desplaza la página a la parte superior
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

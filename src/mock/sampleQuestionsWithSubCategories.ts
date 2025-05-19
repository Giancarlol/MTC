import { Group } from '../types';

// Sample questions with sub-categories
export const mockGroupsWithSubCategories: Group[] = [
  {
    id: 1,
    name: 'Normas de Tránsito',
    subCategories: [
      {
        id: 101,
        name: 'Normas de Tránsito I',
        questions: [
          {
            id: 1,
            text: "Está permitido en la vía:",
            alternatives: [
              { text: "Recoger o dejar pasajeros o carga en cualquier lugar", isCorrect: false },
              { text: "Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito", isCorrect: false },
              { text: "Recoger o dejar pasajeros en lugares autorizados", isCorrect: true },
              { text: "Ejercer el comercio ambulatorio o estacionario", isCorrect: false }
            ]
          },
          {
            id: 2,
            text: "Respecto de los dispositivos de control o regulación del tránsito:",
            alternatives: [
              { text: "Solo los peatones están obligados a su obediencia", isCorrect: false },
              { text: "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario", isCorrect: true },
              { text: "Solo los conductores están obligados a su obediencia", isCorrect: false },
              { text: "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      },
      {
        id: 102,
        name: 'Normas de Tránsito II',
        questions: [
          {
            id: 21,
            text: "¿Cuál de las siguientes afirmaciones es correcta?",
            alternatives: [
              { text: "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos", isCorrect: true },
              { text: "El conductor puede conducir a la velocidad que desee siempre que no ocasione accidentes", isCorrect: false },
              { text: "El conductor debe conducir siempre a una velocidad por debajo del límite máximo permitido", isCorrect: false },
              { text: "El conductor puede conducir a la velocidad que desee en zonas rurales", isCorrect: false }
            ]
          },
          {
            id: 22,
            text: "En una intersección no regulada (sin semáforo ni señalización) tiene preferencia de paso:",
            alternatives: [
              { text: "El vehículo que ingresó primero a la intersección", isCorrect: false },
              { text: "El vehículo que circula por una vía preferencial", isCorrect: false },
              { text: "El vehículo que se aproxima por la derecha del otro", isCorrect: true },
              { text: "El vehículo de mayor tamaño", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      },
      {
        id: 103,
        name: 'Normas de Tránsito III',
        questions: [
          {
            id: 41,
            text: "En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:",
            alternatives: [
              { text: "Tiene preferencia de paso", isCorrect: true },
              { text: "Debe ceder el paso", isCorrect: false },
              { text: "Tiene preferencia solo si es un vehículo de transporte público", isCorrect: false },
              { text: "Tiene preferencia solo si es un vehículo particular", isCorrect: false }
            ]
          },
          {
            id: 42,
            text: "¿Está permitido conducir un vehículo con la licencia de conducir vencida?",
            alternatives: [
              { text: "Sí, siempre que se encuentre en trámite la revalidación", isCorrect: false },
              { text: "Sí, siempre que no haya infracciones de tránsito", isCorrect: false },
              { text: "No, está prohibido", isCorrect: true },
              { text: "Sí, en caso de que el conductor no sea novato", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      },
      {
        id: 104,
        name: 'Normas de Tránsito IV',
        questions: [
          {
            id: 61,
            text: "¿Qué vehículos están exonerados de las restricciones de circulación por congestión vehicular o razones ambientales?",
            alternatives: [
              { text: "Todos los vehículos de transporte público", isCorrect: false },
              { text: "Los vehículos oficiales de las autoridades", isCorrect: false },
              { text: "Los vehículos de emergencia como ambulancias, bomberos y policía en servicio", isCorrect: true },
              { text: "Cualquier vehículo que tenga una emergencia", isCorrect: false }
            ]
          },
          {
            id: 62,
            text: "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal?",
            alternatives: [
              { text: "Multa y suspensión de la licencia de conducir por un año", isCorrect: false },
              { text: "Multa y suspensión de la licencia de conducir por tres años", isCorrect: false },
              { text: "Multa y cancelación de la licencia de conducir e inhabilitación definitiva para obtener una licencia", isCorrect: true },
              { text: "Solo una multa económica", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      },
      {
        id: 105,
        name: 'Normas de Tránsito V',
        questions: [
          {
            id: 81,
            text: "¿Qué debe hacer un conductor al aproximarse a un cruce escolar?",
            alternatives: [
              { text: "Disminuir la velocidad y estar atento a las indicaciones del personal auxiliar de educación", isCorrect: true },
              { text: "Tocar el claxon para advertir a los escolares", isCorrect: false },
              { text: "Aumentar la velocidad para pasar rápidamente", isCorrect: false },
              { text: "Mantener la misma velocidad pero estar atento", isCorrect: false }
            ]
          },
          {
            id: 82,
            text: "¿Qué documentos debe portar obligatoriamente el conductor de un vehículo particular?",
            alternatives: [
              { text: "Solo la licencia de conducir", isCorrect: false },
              { text: "Licencia de conducir y documento de identidad", isCorrect: false },
              { text: "Licencia de conducir, documento de identidad y tarjeta de identificación vehicular", isCorrect: true },
              { text: "Licencia de conducir, documento de identidad, tarjeta de identificación vehicular y certificado de educación vial", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Señales de Tránsito',
    subCategories: [
      {
        id: 201,
        name: 'Señales Verticales',
        questions: [
          {
            id: 101,
            text: "La siguiente señal vertical reglamentaria R-6 [Prohibido voltear a la izquierda], significa que:",
            alternatives: [
              { text: "Está prohibido voltear a la izquierda y, por lo tanto, también está prohibido el giro en U.", isCorrect: true },
              { text: "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.", isCorrect: false },
              { text: "El único sentido de desplazamiento es continuar de frente.", isCorrect: false },
              { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
            ]
          },
          {
            id: 102,
            text: "La señal vertical reglamentaria R-3 significa que:",
            alternatives: [
              { text: "Nos acercamos a una zona restringida al tránsito.", isCorrect: false },
              { text: "Está permitido adelantar vehículos.", isCorrect: false },
              { text: "El único sentido de desplazamiento es continuar de frente.", isCorrect: true },
              { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      },
      {
        id: 202,
        name: 'Señales Horizontales',
        questions: [
          {
            id: 121,
            text: "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:",
            alternatives: [
              { text: "Está permitido hidar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.", isCorrect: true },
              { text: "No está permitido hidar al otro carril para el adelantamiento vehicular.", isCorrect: false },
              { text: "Se está reduciendo el ancho de la calzada de la vía por donde se circula.", isCorrect: false },
              { text: "Se está frente a un lugar de cruce peatonal.", isCorrect: false }
            ]
          },
          {
            id: 122,
            text: "Una línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
            alternatives: [
              { text: "Que se puede adelantar, debido a que la línea no es amarilla continua.", isCorrect: false },
              { text: "Que está prohibido hidar la línea y no hay excepciones.", isCorrect: false },
              { text: "Que está prohibido pasar al otro lado de la línea con algunas excepciones.", isCorrect: true },
              { text: "Que es zona de peatones.", isCorrect: false }
            ]
          },
          // Add more questions to reach about 20
        ]
      }
    ]
  }
];

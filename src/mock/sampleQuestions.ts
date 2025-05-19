import { Group } from '../types';

// Real driving knowledge evaluation questions
export const mockGroups: Group[] = [
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
      {
        id: 13,
        text: "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
        alternatives: [
          { text: "Girar desde cualquier carril", isCorrect: false },
          { text: "Colocarse en el carril derecho, luego girar con precaución", isCorrect: false },
          { text: "Colocarse en el carril más despejado de tráfico, luego girar con precaución", isCorrect: false },
          { text: "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución", isCorrect: true }
        ]
      },
      {
        id: 14,
        text: "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
        alternatives: [
          { text: "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución", isCorrect: true },
          { text: "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril", isCorrect: false },
          { text: "Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución", isCorrect: false },
          { text: "Está prohibido el cambio de carril en vias de un solo sentido", isCorrect: false }
        ]
      },
      {
        id: 15,
        text: "Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:",
        alternatives: [
          { text: "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza", isCorrect: true },
          { text: "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea", isCorrect: false },
          { text: "El vehículo que llegue primero tiene preferencia", isCorrect: false },
          { text: "Tiene preferencia el conductor que viene por la derecha del otro", isCorrect: false }
        ]
      },
      {
        id: 16,
        text: "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:",
        alternatives: [
          { text: "Detenerse hasta que cambie a luz verde", isCorrect: false },
          { text: "Continuar la marcha", isCorrect: true },
          { text: "Estar prevenido", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 17,
        text: "Está prohibido estacionar un vehículo:",
        alternatives: [
          { text: "En las curvas", isCorrect: false },
          { text: "Dentro de una intersección", isCorrect: false },
          { text: "Frente a la entrada de garajes y de recintos militares o policiales", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      },
      {
        id: 20,
        text: "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
        alternatives: [
          { text: "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase", isCorrect: false },
          { text: "No debe aumentar la velocidad hasta que el vehículo lo sobrepase", isCorrect: true },
          { text: "Debe disminuir drásticamente la velocidad de su vehículo", isCorrect: false },
          { text: "Debe detener su vehículo", isCorrect: false }
        ]
      },
      {
        id: 21,
        text: "¿Cuál de las siguientes afirmaciones es correcta?",
        alternatives: [
          { text: "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos", isCorrect: true },
          { text: "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos", isCorrect: false },
          { text: "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 22,
        text: "¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?",
        alternatives: [
          { text: "Bajas", isCorrect: true },
          { text: "Altas", isCorrect: false },
          { text: "Luces altas en las intersecciones y bajas en las avenidas", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 24,
        text: "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
        alternatives: [
          { text: "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro", isCorrect: false },
          { text: "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito", isCorrect: false },
          { text: "El Seguro Obligatorio de Accidentes de Tránsito - SOAT", isCorrect: true },
          { text: "No es obligatorio contar con un seguro", isCorrect: false }
        ]
      },
      {
        id: 25,
        text: "Cuando es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:",
        alternatives: [
          { text: "Cuando emita señales visibles", isCorrect: false },
          { text: "Cuando emita señales audibles", isCorrect: false },
          { text: "Cuando emita señales audibles y visibles", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 26,
        text: "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares, ¿qué debe hacer?",
        alternatives: [
          { text: "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares", isCorrect: true },
          { text: "Adelantar por el lado izquierdo, pero con precaución", isCorrect: false },
          { text: "Tocar el claxon para alertar que está pasando", isCorrect: false },
          { text: "Adelantar muy despacio", isCorrect: false }
        ]
      },
      {
        id: 29,
        text: "Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:",
        alternatives: [
          { text: "Para girar en las intersecciones y para advertir los cambios de carril", isCorrect: false },
          { text: "Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas", isCorrect: true },
          { text: "Durante toda la circulación del vehículo", isCorrect: false },
          { text: "En cada intersección", isCorrect: false }
        ]
      },
      {
        id: 30,
        text: "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?",
        alternatives: [
          { text: "No", isCorrect: true },
          { text: "Sí", isCorrect: false },
          { text: "Depende de la intersección", isCorrect: false },
          { text: "No se encuentra regulado en el reglamento", isCorrect: false }
        ]
      },
      {
        id: 34,
        text: "¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?",
        alternatives: [
          { text: "Luces direccionales", isCorrect: false },
          { text: "Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo", isCorrect: false },
          { text: "Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo", isCorrect: true },
          { text: "Luces bajas", isCorrect: false }
        ]
      },
      {
        id: 35,
        text: "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
        alternatives: [
          { text: "Cualquiera de los dos", isCorrect: false },
          { text: "El que se aproxime por la derecha del otro", isCorrect: true },
          { text: "El que se aproxime por la izquierda del otro", isCorrect: false },
          { text: "El que haga sonar la bocina primero", isCorrect: false }
        ]
      },
      {
        id: 36,
        text: "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
        alternatives: [
          { text: "El vehículo que ingresó primero a la intersección", isCorrect: true },
          { text: "El vehículo que haga sonar la bocina primero", isCorrect: false },
          { text: "El vehículo que haga cambio de luces primero", isCorrect: false },
          { text: "Cualquier vehículo", isCorrect: false }
        ]
      },
      {
        id: 37,
        text: "En una rotonda, tiene prioridad de paso el vehículo que:",
        alternatives: [
          { text: "Quiere ingresar a la rotonda", isCorrect: false },
          { text: "Circula por ella", isCorrect: true },
          { text: "Acelera primero", isCorrect: false },
          { text: "Hace sonar la bocina", isCorrect: false }
        ]
      },
      {
        id: 38,
        text: "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la ____ retornando el vehículo después de la maniobra a su carril original.",
        alternatives: [
          { text: "Derecha", isCorrect: false },
          { text: "Izquierda", isCorrect: true },
          { text: "Berma", isCorrect: false },
          { text: "Por la derecha o izquierda", isCorrect: false }
        ]
      },
      {
        id: 40,
        text: "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
        alternatives: [
          { text: "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular", isCorrect: true },
          { text: "Certificado de inspección Técnica Vehicular y contrato de compraventa del vehículo", isCorrect: false },
          { text: "Contrato de compraventa del vehículo", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: false }
        ]
      },
      {
        id: 41,
        text: "En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:",
        alternatives: [
          { text: "No tiene preferencia de paso", isCorrect: false },
          { text: "Tiene preferencia de paso", isCorrect: true },
          { text: "Debe detenerse", isCorrect: false },
          { text: "Debe retroceder", isCorrect: false }
        ]
      },
      {
        id: 42,
        text: "Al cambiar de dirección, un conductor debe:",
        alternatives: [
          { text: "Señalizar toda la maniobra hasta su culminación", isCorrect: true },
          { text: "Cambiar de dirección y luego señalizar", isCorrect: false },
          { text: "No existe ninguna obligación", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 43,
        text: "¿Se puede conducir un vehículo con el motor en punto neutro?",
        alternatives: [
          { text: "Sí, pero solo si está bajando una pendiente", isCorrect: false },
          { text: "No, está prohibido", isCorrect: true },
          { text: "Sí, en caso de que el conductor no sea novato", isCorrect: false },
          { text: "No se encuentra regulado en la norma", isCorrect: false }
        ]
      },
      {
        id: 44,
        text: "Para girar o cambiar de carril hacia la derecha, el conductor debe utilizar las luces direccionales y, en casos de fuerza mayor, la siguiente señal manual:",
        alternatives: [
          { text: "Brazo, antebrazo izquierdo y mano extendidos hacia afuera del vehículo", isCorrect: false },
          { text: "Antebrazo izquierdo y mano extendidos hacia arriba fuera del vehículo, formando un ángulo recto con el brazo", isCorrect: false },
          { text: "Brazo, antebrazo derecho y mano extendidos hacia afuera del vehículo", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 45,
        text: "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
        alternatives: [
          { text: "No podrán ser conducidos", isCorrect: true },
          { text: "Podrán ser conducidos únicamente en zonas urbanas", isCorrect: false },
          { text: "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia", isCorrect: false },
          { text: "Podrán ser conducidos con normalidad hasta que renueve su licencia", isCorrect: false }
        ]
      },
      {
        id: 48,
        text: "Se entiende por carril a la:",
        alternatives: [
          { text: "Parte de la vía destinada a la circulación de peatones", isCorrect: false },
          { text: "Parte de la calzada destinada al tránsito de una fila de vehículos", isCorrect: true },
          { text: "Vía rural destinada a la circulación de peatones y animales", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: false }
        ]
      },
      {
        id: 53,
        text: "La posición de frente o de figura ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa:",
        alternatives: [
          { text: "Obligación de detenerse de quien así lo ve", isCorrect: true },
          { text: "Continuar la marcha por el carril izquierdo de la calzada", isCorrect: false },
          { text: "Continuar la marcha", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 54,
        text: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
        alternatives: [
          { text: "30 km/h", isCorrect: true },
          { text: "40 km/h", isCorrect: false },
          { text: "60 km/h", isCorrect: false },
          { text: "80 km/h", isCorrect: false }
        ]
      },
      {
        id: 55,
        text: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
        alternatives: [
          { text: "30 km/h", isCorrect: false },
          { text: "40 km/h", isCorrect: true },
          { text: "60 km/h", isCorrect: false },
          { text: "80 km/h", isCorrect: false }
        ]
      },
      {
        id: 56,
        text: "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en vías expresas es de:",
        alternatives: [
          { text: "60 km/h", isCorrect: false },
          { text: "70 km/h", isCorrect: false },
          { text: "80 km/h", isCorrect: true },
          { text: "100 km/h", isCorrect: false }
        ]
      },
      {
        id: 57,
        text: "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
        alternatives: [
          { text: "20 km/h", isCorrect: false },
          { text: "30 km/h", isCorrect: true },
          { text: "35 km/h", isCorrect: false },
          { text: "50 km/h", isCorrect: false }
        ]
      },
      {
        id: 58,
        text: "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
        alternatives: [
          { text: "80 km/h", isCorrect: false },
          { text: "90 km/h", isCorrect: false },
          { text: "100 km/h", isCorrect: true },
          { text: "110 km/h", isCorrect: false }
        ]
      },
      {
        id: 59,
        text: "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
        alternatives: [
          { text: "30 km/h", isCorrect: false },
          { text: "La mitad de la velocidad máxima establecida para cada tipo de vía", isCorrect: true },
          { text: "20 km/h", isCorrect: false },
          { text: "15 km/h", isCorrect: false }
        ]
      },
      {
        id: 64,
        text: "¿Cuál es el plazo de vigencia del SOAT?",
        alternatives: [
          { text: "1 año", isCorrect: true },
          { text: "6 meses", isCorrect: false },
          { text: "4 años", isCorrect: false },
          { text: "2 años", isCorrect: false }
        ]
      },
      {
        id: 66,
        text: "Si una licencia de conducir consigna alguna restricción, es correcto afirmar que:",
        alternatives: [
          { text: "Dicha restricción es meramente informativa", isCorrect: false },
          { text: "Es una obligación cumplir con la restricción", isCorrect: true },
          { text: "Incumplir la restricción no genera un riesgo para la seguridad vial", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 69,
        text: "¿Está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante, que será adelantado?",
        alternatives: [
          { text: "Sí, siempre y cuando el sonido no sea estridente", isCorrect: false },
          { text: "Sí, salvo prohibición expresa mediante la correspondiente señal", isCorrect: false },
          { text: "No, está prohibido", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 70,
        text: "Si observa que se aproxima una ambulancia sin las luces especiales encendidas y sin sirena, es correcto afirmar que:",
        alternatives: [
          { text: "No estamos obligados a darle preferencia de paso", isCorrect: true },
          { text: "Estamos obligados a darle prioridad de paso por ser una ambulancia", isCorrect: false },
          { text: "Está informando que está en servicio de urgencia", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 71,
        text: "Si se encuentra en una intersección y se enciende la luz verde del semáforo y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer?",
        alternatives: [
          { text: "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar", isCorrect: true },
          { text: "Tocar el claxon para que se apuren en pasar", isCorrect: false },
          { text: "Bajar del vehículo y reclamar la falta al infractor", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 73,
        text: "Si una fila de escolares cruza la calzada fuera del crucero peatonal, ¿qué acción se debe tomar?",
        alternatives: [
          { text: "Advertir con el claxon", isCorrect: false },
          { text: "Advertir a viva voz", isCorrect: false },
          { text: "Parar y ceder el paso", isCorrect: true },
          { text: "Continuar la marcha lentamente", isCorrect: false }
        ]
      },
      {
        id: 78,
        text: "¿Qué debería hacer elwatermark el conductor al acercarse a una señal de “CEDA EL PASO” en una intersección?",
        alternatives: [
          { text: "Ceder el paso a los vehículos de emergencia", isCorrect: false },
          { text: "Mantener la velocidad y avanzar con cuidado", isCorrect: false },
          { text: "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía transversal", isCorrect: true },
          { text: "Parar totalmente y luego avanzar con cuidado", isCorrect: false }
        ]
      },
      {
        id: 79,
        text: "No se debe conducir un vehículo:",
        alternatives: [
          { text: "Si no se cuenta con el SOAT", isCorrect: false },
          { text: "En retroceso, salvo las excepciones que establece la norma", isCorrect: false },
          { text: "Si no se tiene la licencia para el tipo de vehículo que se quiere conducir", isCorrect: false },
          { text: "Todas son correctas", isCorrect: true }
        ]
      },
      {
        id: 80,
        text: "¿Qué debe hacer si se aproxima a una intersección sin semáforo y sin presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
        alternatives: [
          { text: "Disminuir la velocidad y pasar con cuidado", isCorrect: false },
          { text: "Detener el vehículo y ceder el paso al peatón", isCorrect: true },
          { text: "Continuar porque usted tiene la prioridad", isCorrect: false },
          { text: "Incrementar la velocidad para adelantar el cruce el peatón", isCorrect: false }
        ]
      },
      {
        id: 81,
        text: "Sobre el uso del cinturón de seguridad en los vehículos que se encuentran en circulación, es correcto afirmar que:",
        alternatives: [
          { text: "El uso del cinturón de seguridad es obligatorio para las personas que ocupen los asientos delanteros", isCorrect: false },
          { text: "En los asientos posteriores el uso del cinturón de seguridad es obligatorio en todos los vehículos cuando los tengan incorporados de fábrica y en los casos en que, de acuerdo a las normas se encuentren obligados a tenerlos", isCorrect: false },
          { text: "El uso del cinturón de seguridad no solo es obligatorio para el conductor", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      },
      {
        id: 82,
        text: "Si en una vía de dos carriles con tránsito en un mismo sentido usted se desplaza lentamente en su vehículo, debe circular por el carril de la ____ y los vehículos que circulen a mayor velocidad deben hacerlo por el carril de la ____.",
        alternatives: [
          { text: "Izquierda / Derecha", isCorrect: false },
          { text: "Derecha / Derecha", isCorrect: false },
          { text: "Derecha / Izquierda", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 83,
        text: "Sobre el uso de la bocina del vehículo, es correcto afirmar que:",
        alternatives: [
          { text: "El conductor debe tratar de no utilizar la bocina para llamar la atención en forma innecesaria", isCorrect: true },
          { text: "El uso de la bocina para llamar la atención en forma innecesaria no es una infracción al tránsito", isCorrect: false },
          { text: "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas", isCorrect: false },
          { text: "a y b son correctas", isCorrect: false }
        ]
      },
      {
        id: 85,
        text: "¿Cuál es el número máximo de personas que puede transportar un vehículo particular?",
        alternatives: [
          { text: "Es igual al número de asientos señalados en la tarjeta de identificación vehicular, con la excepción de niños en brazos en los asientos posteriores", isCorrect: true },
          { text: "No existe prohibición sobre un número máximo de personas que se puede transportar", isCorrect: false },
          { text: "La restricción sobre un número máximo de personas que se puede transportar se aplica para los asientos delanteros, para los asientos posteriores no hay restricción", isCorrect: false },
          { text: "Se puede transportar a todas las personas que entren en el vehículo, sin restricción, siempre y cuando no obstaculicen la visibilidad del conductor y todos sean de la misma familia", isCorrect: false }
        ]
      },
      {
        id: 86,
        text: "La acción correcta al abastecer de combustible su vehículo, es:",
        alternatives: [
          { text: "Asegurarse de que todos los fluorescentes estén encendidos", isCorrect: false },
          { text: "Abstenerse de fumar tanto el conductor como sus acompañantes", isCorrect: true },
          { text: "Mantener encendido el motor del vehículo", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: false }
        ]
      },
      {
        id: 149,
        text: "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
        alternatives: [
          { text: "Valor por la vida", isCorrect: false },
          { text: "Respeto por la integridad física del resto de los usuarios", isCorrect: false },
          { text: "Respeto a la autoridad encargada de la vigilancia y disciplina de tráfico", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      },
      {
        id: 150,
        text: "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
        alternatives: [
          { text: "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas", isCorrect: true },
          { text: "Únicamente los peatones y ciclistas", isCorrect: false },
          { text: "Únicamente los peatones y niños", isCorrect: false },
          { text: "Todas las alternativas son correctas, con excepción de los ciclistas", isCorrect: false }
        ]
      },
      {
        id: 152,
        text: "Si usted es titular de una licencia particular A-I, está autorizado a conducir el siguiente vehículo:",
        alternatives: [
          { text: "Camión, tipo volquete", isCorrect: false },
          { text: "Ómnibus, tipo panorámico", isCorrect: false },
          { text: "Mototaxi", isCorrect: false },
          { text: "Automóvil, tipo sedán", isCorrect: true }
        ]
      },
      {
        id: 153,
        text: "Mientras la persona conduce, le está permitido:",
        alternatives: [
          { text: "Compartir su asiento con un niño, siempre y cuando éste sea menor de un año de edad", isCorrect: false },
          { text: "Que otra persona tome el control de la dirección del vehículo, siempre y...", isCorrect: false },
          { text: "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: true }
        ]
      },
      {
        id: 154,
        text: "El conductor está a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos:",
        alternatives: [
          { text: "En su derecho - negarse", isCorrect: false },
          { text: "Facultado - Rechazar", isCorrect: false },
          { text: "Obligado - someterse", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 155,
        text: "Ante un conductor con evidente discapacidad física, la cual no figura en el rubro de restricciones de su licencia de conducir, procede:",
        alternatives: [
          { text: "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación", isCorrect: true },
          { text: "Que la autoridad competente expida un permiso excepcional para dicho conductor", isCorrect: false },
          { text: "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor", isCorrect: false },
          { text: "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continue conduciendo", isCorrect: false }
        ]
      },
      {
        id: 156,
        text: "¿Una persona con discapacidad física puede obtener una licencia de conducir particular?",
        alternatives: [
          { text: "Sí, siempre y cuando dicha discapacidad pueda ser superada con algún corrector que establezca alguna de las restricciones que prevé la norma vigente", isCorrect: true },
          { text: "No, está terminantemente prohibido", isCorrect: false },
          { text: "Depende del criterio del centro de emisión de la licencia de conducir", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 157,
        text: "¿Puede una persona menor de edad conducir un vehículo?",
        alternatives: [
          { text: "Nunca", isCorrect: false },
          { text: "Sí, siempre y cuando vaya acompañada de una persona mayor de edad y titular de una licencia de conducir", isCorrect: false },
          { text: "No, salvo que conduzca un vehículo de dimensión reducida", isCorrect: false },
          { text: "Sí, siempre y cuando sea mayor de 16 años y cuente con licencia de conducir o permiso provisional, conforme a lo dispuesto en el Reglamento Nacional del Sistema de Emisión de Licencias de Conducir", isCorrect: true }
        ]
      },
      {
        id: 158,
        text: "Es una obligación general de tránsito que, los circulen respetando los mensajes de_, las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
        alternatives: [
          { text: "Peatones - los letreros instalados en las vías públicas", isCorrect: false },
          { text: "Los usuarios de la vía pública - los dispositivos de control de tránsito", isCorrect: true },
          { text: "Vehículos - los medios de comunicación", isCorrect: false },
          { text: "Menores de edad - los adultos mayores", isCorrect: false }
        ]
      },
      {
        id: 159,
        text: "Marque la afirmación incorrecta:",
        alternatives: [
          { text: "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda dificultar la circulación", isCorrect: false },
          { text: "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la vía", isCorrect: false },
          { text: "Los vehículos deben circular en vías urbanas con las luces bajas las 24 horas del día", isCorrect: true },
          { text: "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones, para evitar que ésta pueda mojar la acera y los peatones", isCorrect: false }
        ]
      },
      {
        id: 160,
        text: "¿Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
        alternatives: [
          { text: "Debe obedecer la señal de velocidad instalada en la vía", isCorrect: true },
          { text: "Puede ir a una velocidad máxima de 60 km/h", isCorrect: false },
          { text: "Debe ir a una velocidad máxima de 60 km/h", isCorrect: false },
          { text: "Debe ir a una velocidad entre 50 y 60 km/h", isCorrect: false }
        ]
      },
      {
        id: 161,
        text: "Sobre la conducción en retroceso, marque la opción correcta:",
        alternatives: [
          { text: "Está prohibida, salvo en casos estrictamente justificados", isCorrect: true },
          { text: "Nunca debe realizarse", isCorrect: false },
          { text: "Está permitida...", isCorrect: false },
          { text: "Está permitida, salvo en carreteras", isCorrect: false }
        ]
      },
      {
        id: 162,
        text: "El uso de la luz _es obligatorio en , debiendo cambiar por luz momentos previos al cruce con otro vehículo que circule en sentido contrario.",
        alternatives: [
          { text: "Baja - carreteras - alta", isCorrect: false },
          { text: "Alta - vías urbanas - baja", isCorrect: false },
          { text: "Rompenieblas - carreteras - baja", isCorrect: false },
          { text: "Alta - carreteras - baja", isCorrect: true }
        ]
      },
      {
        id: 163,
        text: "Indique la conducta permitida:",
        alternatives: [
          { text: "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento", isCorrect: false },
          { text: "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible", isCorrect: true },
          { text: "El estacionamiento de un vehículo después de 1 metro de un paso peatonal", isCorrect: false },
          { text: "El estacionamiento de un vehículo sobre las aceras", isCorrect: false }
        ]
      },
      {
        id: 164,
        text: "Se considera el abandono de un vehículo cuando:",
        alternatives: [
          { text: "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 72 horas", isCorrect: false },
          { text: "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 96 horas", isCorrect: true },
          { text: "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de 48 horas", isCorrect: false },
          { text: "La norma de tránsito no establece nada sobre el abandono del vehículo", isCorrect: false }
        ]
      },
      {
        id: 165,
        text: "Al transportar carga en su vehículo, usted debe:",
        alternatives: [
          { text: "Asegurarse, en caso la carga sobresalga lateralmente de la carrocería, esté bien sujeta", isCorrect: false },
          { text: "Evitar todo riesgo de caída de la carga que sobresale lateralmente de la carrocería", isCorrect: false },
          { text: "Tratar que la carga no sea arrastrada", isCorrect: false },
          { text: "Asegurarse que la carga no sobrepase las dimensiones de la carrocería", isCorrect: true }
        ]
      },
      {
        id: 166,
        text: "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
        alternatives: [
          { text: "Está permitida", isCorrect: false },
          { text: "Está prohibida, en un índice superior al límite máximo que permite la norma", isCorrect: true },
          { text: "Está prohibida en el ámbito urbano", isCorrect: false },
          { text: "La norma no regula sobre ello", isCorrect: false }
        ]
      },
      {
        id: 167,
        text: "La autoridad competente, puede prohibir o restringir en determinadas vías públicas.",
        alternatives: [
          { text: "Cuando la situación lo justifique - la circulación o estacionamiento de vehículos", isCorrect: true },
          { text: "Aun cuando la situación lo justifique no - circulación o estacionamiento de vehículos", isCorrect: false },
          { text: "No se encuentra facultada ni - circulación de vehículos", isCorrect: false },
          { text: "Únicamente con el consentimiento del conductor - circulación de vehículos", isCorrect: false }
        ]
      },
      {
        id: 168,
        text: "Si al conducir en una carretera de noche se aproxima un vehículo en sentido contrario; usted debe:",
        alternatives: [
          { text: "Cambiar de luces bajas a luces altas", isCorrect: false },
          { text: "Encender las luces de emergencia", isCorrect: false },
          { text: "Cambiar de luces altas a luces bajas", isCorrect: true }
          
        ]
      },
      {
        id: 169,
        text: "La detención de un vehículo debe efectuarse:",
        alternatives: [
          { text: "En el sentido contrario a la circulación y en el carril izquierdo de la vía", isCorrect: false },
          { text: "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces altas", isCorrect: false },
          { text: "En el sentido de la circulación y en el carril izquierdo de la vía, utilizando las luces intermitentes", isCorrect: false },
          { text: "En el sentido de la circulaciónเด็ก y en el carril derecho de la vía, utilizando las luces intermitentes", isCorrect: true }
        ]
      },
      {
        id: 170,
        text: "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
        alternatives: [
          { text: "Acudir a la estación de bomberos", isCorrect: false },
          { text: "Llamar a un familiar", isCorrect: false },
          { text: "Solicitar la intervención de la autoridad policial", isCorrect: true },
          { text: "Abandonar el lugar donde ocurrió el accidente", isCorrect: false }
        ]
      },
      {
        id: 171,
        text: "El conductor antes de iniciar la conducción de un vehículo no está obligado a:",
        alternatives: [
          { text: "Portar la tarjeta de identificacion vehicular del vehículo que conduce", isCorrect: false },
          { text: "Portar y exhibir la Placa Única de Rodaje", isCorrect: true },
          { text: "Constatar que el vehículo tiene SOAT vigente", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 172,
        text: "La faculta y autoriza la circulación del vehículo por la vía pública, identifica el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
        alternatives: [
          { text: "-", isCorrect: false },
          { text: "Municipalidad provincial", isCorrect: false },
          { text: "La Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT", isCorrect: false },
          { text: "Placa Única Nacional de Rodaje", isCorrect: true }
        ]
      },
      {
        id: 173,
        text: "A fin de determinar la presencia de alcohol o sustancias estupefacientes en el conductor, el efectivo de la Policía de Tránsito puede exigirle al momento de la intervención:",
        alternatives: [
          { text: "Que realice pruebas de coordinación y equilibrio", isCorrect: false },
          { text: "Uso del alcoholímetro", isCorrect: false },
          { text: "Prueba de alcoholemia", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      },
      {
        id: 184,
        text: "Los semáforos son:",
        alternatives: [
          { text: "Dispositivos de control del tránsito que tienen por finalidad regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas", isCorrect: true },
          { text: "Dispositivos de control del tránsito que tienen por finalidad regular y controlar únicamente el tránsito vehicular motorizado y peatonal, a través de las indicaciones de luces", isCorrect: false },
          { text: "Señales de color rojo, verde y amarillo, que tienen como único fin regular la corriente vehicular", isCorrect: false },
          { text: "-", isCorrect: false }
        ]
      },
      {
        id: 185,
        text: "La conducción requiere un alto nivel de atención, pues existen distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
        alternatives: [
          { text: "Preocupaciones", isCorrect: false },
          { text: "Uso del teléfono celular", isCorrect: false },
          { text: "Manipulación de la radio mientras se conduce", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      },
      {
        id: 186,
        text: "¿Influye la somnolencia en la capacidad de conducir?",
        alternatives: [
          { text: "Sí, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores", isCorrect: true },
          { text: "Sí, ya que el conductor está de mal genio", isCorrect: false },
          { text: "No, siempre que la conducción sea realizada lentamente", isCorrect: false },
          { text: "No, siempre y cuando la conducción sea realizada con un acompañante", isCorrect: false }
        ]
      },
      {
        id: 187,
        text: "¿Cuál es la acción correcta del conductor, según las normas de tránsito, en la situación que plantea el siguiente gráfico?",
        alternatives: [
          { text: "Girar rápidamente a la derecha antes que el peatón cruce la calzada", isCorrect: false },
          { text: "Dar preferencia de paso al peatón para que cruce la calzada", isCorrect: true },
          { text: "Girar lentamente a la derecha antes que el peatón cruce la calzada", isCorrect: false },
          { text: "Tocar el claxon para que el peatón no cruce la calzada", isCorrect: false }
        ]
      },
      {
        id: 188,
        text: "¿En cuál de las siguientes opciones, los factores mencionados contribuyen a una colisión vehicular?",
        alternatives: [
          { text: "Pavimento seco, somnolencia, frenos desgastados", isCorrect: false },
          { text: "Pavimento húmedo, neumáticos desgastados, cansancio", isCorrect: true },
          { text: "Reductores de velocidad, falta de atención, uso del teléfono celular", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 189,
        text: "Es la parte de una carretera o camino contigua a la calzada, no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
        alternatives: [
          { text: "Berma", isCorrect: true },
          { text: "Autopista", isCorrect: false },
          { text: "Acera", isCorrect: false },
          { text: "Demarcación", isCorrect: false }
        ]
      },
      {
        id: 190,
        text: "Es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales.",
        alternatives: [
          { text: "La calzada", isCorrect: true },
          { text: "La acera", isCorrect: false },
          { text: "La berma", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 191,
        text: "Es una parte de la vía destinada al uso de peatones.",
        alternatives: [
          { text: "La calzada", isCorrect: false },
          { text: "La acera", isCorrect: true },
          { text: "La berma", isCorrect: false },
          { text: "La autopista", isCorrect: false }
        ]
      },
      {
        id: 193,
        text: "Los vehículos deben ser conducidos con:",
        alternatives: [
          { text: "Puertas y capot cerrados, permitiéndose la maletera entreabierta para casos especiales", isCorrect: false },
          { text: "Puertas, capot y maletera cerrados", isCorrect: true },
          { text: "Puertas, capot y maletera cerrados, salvo autorización especial", isCorrect: false },
          { text: "Capot y maletera cerrados, permitiéndose dos puertas entreabiertas para casos especiales", isCorrect: false }
        ]
      },
      {
        id: 194,
        text: "El conductor que en una vía urbana va a girar a la izquierda, a la derecha o en ‘U’ debe hacer la señal respectiva con la luz direccional, por lo menos:",
        alternatives: [
          { text: "2 segundos antes de realizar la maniobra", isCorrect: false },
          { text: "1 metro antes de realizar la maniobra", isCorrect: true },
          { text: "20 metros antes de realizar la maniobra", isCorrect: false },
          { text: "3 metros antes de realizar la maniobra", isCorrect: false }
        ]
      },
      {
        id: 195,
        text: "Si usted está conduciendo por una carretera y va a girar a la izquierda, debe realizar la señal respectiva con la luz direccional por lo menos:",
        alternatives: [
          { text: "2 segundos antes de realizar la maniobra", isCorrect: false },
          { text: "2 metros antes de realizar la maniobra", isCorrect: false },
          { text: "30 metros antes de realizar la maniobra", isCorrect: true },
          { text: "1 metro antes de realizar la maniobra", isCorrect: false }
        ]
      },
      {
        id: 196,
        text: "La licencia particular de la Clase y Categoría A-I, permite conducir motos?",
        alternatives: [
          { text: "Sí", isCorrect: false },
          { text: "No", isCorrect: true },
          { text: "Únicamente en el ámbito urbano", isCorrect: false },
          { text: "Únicamente en carreteras", isCorrect: false }
        ]
      },
      {
        id: 24,
        text: "La licencia de conducir de Clase A-Categoría II B tendrá una vigencia de:",
        alternatives: [
          { text: "3 años", isCorrect: false },
          { text: "5 años", isCorrect: true },
          { text: "8 años", isCorrect: false },
          { text: "2 años", isCorrect: false }
        ]
      },
      {
        id: 25,
        text: "Para obtener una licencia de conducir clase A categoría II B se requiere tener grado de instrucción mínimo de:",
        alternatives: [
          { text: "Secundaria completa", isCorrect: true },
          { text: "Primaria completa", isCorrect: false },
          { text: "Secundaria incompleta", isCorrect: false },
          { text: "Superior técnica", isCorrect: false }
        ]
      },
      {
        id: 26,
        text: "Para conducir vehículos de transporte terrestre de materiales peligrosos, necesario contar con la licencia que corresponda a la categoría del vehículo que transporta los materiales peligrosos.",
        alternatives: [
          { text: "No es", isCorrect: false },
          { text: "Es", isCorrect: true },
          { text: "Depende de la mercancía que transporta", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 28,
        text: "Con relación a las obligaciones del conductor del servicio de transporte terrestre. Marque la alternativa incorrecta:",
        alternatives: [
          { text: "Debe ser titular de una licencia de conducir de la clase y categoría que corresponda al vehículo que conduce", isCorrect: false },
          { text: "Debe portar su licencia de conducir vigente, así como la documentación del vehículo", isCorrect: false },
          { text: "Debe conducir solo vehículos habilitados por la autoridad competente", isCorrect: false },
          { text: "Puede oponerse a la labor de supervisión y fiscalización de la autoridad competente", isCorrect: true }
        ]
      },
      {
        id: 29,
        text: "La edad máxima para conducir vehículos destinados al servicio de transporte terrestre es de:",
        alternatives: [
          { text: "55 años", isCorrect: false },
          { text: "60 años", isCorrect: false },
          { text: "65 años", isCorrect: false },
          { text: "70 años", isCorrect: true }
        ]
      },
      {
        id: 30,
        text: "El servicio de transporte especial de personas es aquel que se presta:",
        alternatives: [
          { text: "Sin regularidad ni uniformidad", isCorrect: true },
          { text: "Con regularidad y uniformidad", isCorrect: false },
          { text: "Sin regularidad y con uniformidad", isCorrect: false },
          { text: "Con regularidad y sin uniformidad", isCorrect: false }
        ]
      },
      {
        id: 31,
        text: "¿Cuál de los siguientes servicios no corresponde al servicio de transporte especial de personas?",
        alternatives: [
          { text: "Diferenciado", isCorrect: true },
          { text: "Turístico", isCorrect: false },
          { text: "De trabajadores", isCorrect: false }
        ]
      },
      {
        id: 33,
        text: "En el servicio de transporte la vigencia de la habilitación del conductor es ...y de renovación automática una vez acreditada la vigencia de la licencia de conducir de la categoría correspondiente al vehículo habilitado:",
        alternatives: [
          { text: "Anual", isCorrect: true },
          { text: "Cada dos años", isCorrect: false },
          { text: "Cada cinco años", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 34,
        text: "¿A partir de qué edad el conductor del servicio de transporte deberá rendir y aprobar los exámenes médicos semestrales que establezca la Dirección General de Transporte Terrestre (DGTT)?",
        alternatives: [
          { text: "60 años", isCorrect: false },
          { text: "55 años", isCorrect: false },
          { text: "65 años", isCorrect: true },
          { text: "No existe dicho exigencia en la norma", isCorrect: false }
        ]
      },
      {
        id: 36,
        text: "Cuando hablamos del «servicio de transporte especial de ámbito provincial, prestado en vehículos M1 de la clasificación vehicular, que tiene por objeto el traslado de personas desde un punto de origen hasta un punto de destino señalado por quien lo contrata», nos estamos refiriendo al:",
        alternatives: [
          { text: "Servicio de transporte de trabajadores", isCorrect: false },
          { text: "Servicio de transporte de mercancías", isCorrect: false },
          { text: "Servicio de transporte de taxi", isCorrect: true },
          { text: "Servicio de transporte turístico", isCorrect: false }
        ]
      },
      {
        id: 38,
        text: "Con relación a las obligaciones del conductor del servicio de transporte terrestre, es obligatorio que el conductor:",
        alternatives: [
          { text: "No deba tener su licencia de conducir suspendida, retenida o cancelada", isCorrect: false },
          { text: "No deba llegar o exceder de tope máximo de 100 puntos firmes", isCorrect: false },
          { text: "No tenga impuesta dos o más infracciones Muy Graves, cinco o más infracciones Graves o una infracción Muy Grave y tres o más infracciones Graves", isCorrect: false },
          { text: "Todas las anteriores", isCorrect: true }
        ]
      },
      {
        id: 39,
        text: "El servicio de transporte debe ser prestado a través de vehículos que:",
        alternatives: [
          { text: "Se encuentren habilitados", isCorrect: false },
          { text: "Hayan aprobado la Inspección Técnica Vehicular, cuando corresponda", isCorrect: false },
          { text: "Cuenten con póliza de Seguro Obligatorio de Accidentes de Tránsito vigente o Certificado Contra Accidentes de Tránsito, según corresponda", isCorrect: false },
          { text: "Todas las anteriores", isCorrect: true }
        ]
      },
      {
        id: 41,
        text: "Con relación a las jornadas de conducción. Marque la alternativa correcta:",
        alternatives: [
          { text: "No debe exceder las cinco (5) horas de conducción continuas en el servicio diurno, ni las cuatro (4) horas en el servicio nocturno", isCorrect: true },
          { text: "No debe exceder las cuatro (4) horas de conducción continuas en el servicio diurno, ni las cuatro (5) horas en el servicio nocturno", isCorrect: false },
          { text: "No debe exceder las cinco (5) horas de conducción continuas en el servicio diurno, ni las cuatro (4.5) horas en el servicio nocturno", isCorrect: false },
          { text: "No debe exceder las cuatro (4) horas de conducción continuas en el servicio diurno, ni las tres (3) horas en el servicio nocturno", isCorrect: false }
        ]
      },
      {
        id: 42,
        text: "Para efectos de la jornada de conducción, ¿qué horario es considerado como nocturno?",
        alternatives: [
          { text: "El comprendido entre las 9:00 p.m. y 6:00 a.m.", isCorrect: false },
          { text: "El comprendido entre las 10:00 p.m. y las 5:59 a.m.", isCorrect: true },
          { text: "El comprendido entre las 11:00 p.m. y las 5:59 a.m.", isCorrect: false },
          { text: "El comprendido entre las 11:00 p.m. y las 6:00 a.m.", isCorrect: false }
        ]
      },
      {
        id: 43,
        text: "Para efectos de la jornada de conducción, ¿qué horario es considerado como diurno?",
        alternatives: [
          { text: "El comprendido entre las 6:00 a.m. y 9:59 p.m.", isCorrect: true },
          { text: "El comprendido entre las 6:00 a.m. y 10:00 p.m.", isCorrect: false },
          { text: "El comprendido entre las 5:59 a.m. y 10:00 p.m.", isCorrect: false },
          { text: "El comprendido entre las 5:00 a.m. y 9:00 p.m.", isCorrect: false }
        ]
      },
      {
        id: 44,
        text: "Es el documento que sustenta el traslado de bienes por el transportista autorizado para prestar el servicio de transporte terrestre de mercancías:",
        alternatives: [
          { text: "Hoja de ruta", isCorrect: false },
          { text: "Flete", isCorrect: false },
          { text: "Licencia de conducir", isCorrect: false },
          { text: "Guía de Transportista Remisión", isCorrect: true }
        ]
      },
      {
        id: 46,
        text: "Es la persona natural o jurídica por cuyo encargo se transporte mercancías en un vehículo habilitado para la prestación del servicio de transporte público de mercancías:",
        alternatives: [
          { text: "Transportista", isCorrect: false },
          { text: "Destinatario de carga", isCorrect: false },
          { text: "Generador de carga", isCorrect: true },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 47,
        text: "El inspector de transporte es la persona acreditada u homologada para:",
        alternatives: [
          { text: "Realizar acciones de control, supervisión y detección de incumplimientos o infracciones a las normas del servicio de transporte terrestre", isCorrect: true },
          { text: "Imponer las papeletas de infracción al tránsito", isCorrect: false },
          { text: "Emitir la resolución de sanción por las infracciones a las normas del servicio de transporte terrestre", isCorrect: false },
          { text: "Todas las anteriores", isCorrect: false }
        ]
      },
      {
        id: 48,
        text: "Los terminales terrestres son obligatorios para el servicio público de transporte regular de personas en el ámbito:",
        alternatives: [
          { text: "Nacional y Regional", isCorrect: false },
          { text: "Regional y Provincial", isCorrect: false },
          { text: "Nacional, Regional, Provincial", isCorrect: false },
          { text: "Distrital, Provincial, Regional, Nacional e internacional", isCorrect: true }
        ]
      },
      {
        id: 50,
        text: "El Reglamento Nacional de Administración de Transporte no comprende el servicio de:",
        alternatives: [
          { text: "Trabajadores", isCorrect: false },
          { text: "Servicio de Transporte en vehículos menores", isCorrect: true },
          { text: "Servicio de Transporte en auto colectivo", isCorrect: false },
          { text: "Servicio de Transporte Turístico", isCorrect: false }
        ]
      },
      {
        id: 51,
        text: "La auditoría anual es una modalidad de fiscal植物ización del servicio de transporte, que es realizada aleatoriamente a los transportistas, a la infraestructura complementaria de transporte y a:",
        alternatives: [
          { text: "Los conductores habilitados", isCorrect: false },
          { text: "Los establecimientos de salud que realizan los exámenes médicos a los conductores", isCorrect: false },
          { text: "La red vial nacional", isCorrect: false },
          { text: "Todas las anteriores", isCorrect: true }
        ]
      },
      {
        id: 57,
        text: "En el servicio de transporte el debe velar por el cumplimiento de las obligaciones que corresponden al conductor:",
        alternatives: [
          { text: "Generador de carga", isCorrect: false },
          { text: "Usuario del servicio", isCorrect: false },
          { text: "Transportista", isCorrect: true },
          { text: "La a) y b) son correctas", isCorrect: false }
        ]
      },
      {
        id: 66,
        text: "Es el servicio de transporte de personas y de mercancías en un vehículo autorizado para este tipo de transporte:",
        alternatives: [
          { text: "Servicio de transporte estándar", isCorrect: false },
          { text: "Servicio de transporte mixto", isCorrect: true },
          { text: "Servicio de transporte diferenciado", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Señales y Dispositivos',
    questions: [
      {
        id: 3,
        text: "La señal vertical reglamentaria R-6 [Prohibido voltear a la izquierda], significa que:",
        alternatives: [
          { text: "Está prohibido voltear a la izquierda y, por lo tanto, también está prohibido el giro en U.", isCorrect: true },
          { text: "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.", isCorrect: false },
          { text: "El único sentido de desplazamiento es continuar de frente.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 4,
        text: "La señal vertical reglamentaria R-3 significa que:",
        alternatives: [
          { text: "Nos acercamos a una zona restringida al tránsito.", isCorrect: false },
          { text: "Está permitido adelantar vehículos.", isCorrect: false },
          { text: "El único sentido de desplazamiento es continuar de frente.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 5,
        text: "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:",
        alternatives: [
          { text: "Está permitido hidar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.", isCorrect: true },
          { text: "No está permitido hidar al otro carril para el adelantamiento vehicular.", isCorrect: false },
          { text: "Se está reduciendo el ancho de la calzada de la vía por donde se circula.", isCorrect: false },
          { text: "Se está frente a un lugar de cruce peatonal.", isCorrect: false }
        ]
      },
      {
        id: 6,
        text: "El color ámbar o amarillo del semáforo significa que:",
        alternatives: [
          { text: "Los vehículos deben avanzar.", isCorrect: false },
          { text: "Los vehículos deben detenerse.", isCorrect: false },
          { text: "Los vehículos deben acelerar la marcha.", isCorrect: false },
          { text: "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.", isCorrect: true }
        ]
      },
      {
        id: 7,
        text: "Los colores del semáforo tienen el siguiente significado: rojo: _____; ámbar o amarillo: _____; verde: _____:",
        alternatives: [
          { text: "Detención - prevención - paso.", isCorrect: true },
          { text: "Detención - paso con prevención - circulación rápida.", isCorrect: false },
          { text: "Disminución de la velocidad - prevención - paso rápido.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 8,
        text: "¿Qué indica una flecha verde en un semáforo vehicular?",
        alternatives: [
          { text: "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.", isCorrect: true },
          { text: "No está permitida la circulación en el sentido que indica la flecha.", isCorrect: false },
          { text: "Se debe respetar únicamente la luz circular.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 9,
        text: "La siguiente señal vertical reglamentaria R-53:",
        alternatives: [
          { text: "Prohibe estacionar.", isCorrect: false },
          { text: "Prohibe al conductor detener el vehículo dentro del área de la intersección.", isCorrect: true },
          { text: "Prohibe la carga y descarga.", isCorrect: false },
          { text: "Prohibe la circulación de vehículos motorizados.", isCorrect: false }
        ]
      },
      {
        id: 10,
        text: "Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
        alternatives: [
          { text: "Avanzar en cualquier sentido, ya que teas a luz circular está en verde.", isCorrect: false },
          { text: "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.", isCorrect: true },
          { text: "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 11,
        text: "Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:",
        alternatives: [
          { text: "Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?.", isCorrect: true },
          { text: "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.", isCorrect: false },
          { text: "Si la luz intermitente es verde, ésta es equivalente a un 'PARE'.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 12,
        text: "¿La luz intermitente roja es igual que una señal de PARE?",
        alternatives: [
          { text: "Verdad.", isCorrect: true },
          { text: "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.", isCorrect: false },
          { text: "Falso.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 18,
        text: "La siguiente señal vertical reglamentaria (R-29):",
        alternatives: [
          { text: "Prohibe el uso de la bocina en vías urbanas.", isCorrect: false },
          { text: "Prohibe el uso de la bocina en carreteras.", isCorrect: false },
          { text: "Prohibe el uso de la bocina.", isCorrect: true },
          { text: "Prohibe hacer ruido.", isCorrect: false }
        ]
      },
      {
        id: 27,
        text: "¿Qué significa un triángulo rojo de seguridad colocado en la calzada?",
        alternatives: [
          { text: "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.", isCorrect: true },
          { text: "Zona de obras por reparación en la calzada.", isCorrect: false },
          { text: "Que el vehículo que lo enfrenta debe detenerse.", isCorrect: false },
          { text: "a y c son correctas.", isCorrect: false }
        ]
      },
      {
        id: 28,
        text: "La siguiente señal vertical reglamentaria P-22C indica que:",
        alternatives: [
          { text: "Está permitido adelantar.", isCorrect: false },
          { text: "Se aproxima un carril adicional.", isCorrect: false },
          { text: "Está permitido cambiar de carril.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 31,
        text: "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
        alternatives: [
          { text: "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.", isCorrect: false },
          { text: "Disminuir su velocidad y pasar con cuidado.", isCorrect: false },
          { text: "Sobre parar y pasar rápidamente.", isCorrect: false },
          { text: "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.", isCorrect: true }
        ]
      },
      {
        id: 32,
        text: "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
        alternatives: [
          { text: "No hay diferencia, se usan indistintamente.", isCorrect: false },
          { text: "La señal P-2A se utiliza en situaciones de mayor riesgo.", isCorrect: false },
          { text: "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.", isCorrect: false },
          { text: "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.", isCorrect: true }
        ]
      },
      {
        id: 33,
        text: "¿Qué indica la señal R-30F?",
        alternatives: [
          { text: "Tener precaución con vehículos lentos.", isCorrect: false },
          { text: "Regula la velocidad máxima permitida en curvas.", isCorrect: false },
          { text: "Regula la velocidad máxima en zonas rurales.", isCorrect: true },
          { text: "No se encuentra regulada en el reglamento.", isCorrect: false }
        ]
      },
      {
        id: 49,
        text: "Se entiende por línea de parada a:",
        alternatives: [
          { text: "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo.", isCorrect: true },
          { text: "Las líneas que se encuentran en los lugares del estacionamiento.", isCorrect: false },
          { text: "El lugar utilizado para embarcar y desembarcar pasajeros.", isCorrect: false },
          { text: "Todas las alternativas son correctas.", isCorrect: false }
        ]
      },
      {
        id: 50,
        text: "La siguiente señal vertical reglamentaria P-17A, indica:",
        alternatives: [
          { text: "Reducción de la calzada al lado derecho.", isCorrect: false },
          { text: "Reducción de la calzada al lado izquierdo.", isCorrect: false },
          { text: "Reducción de la calzada en ambos lados.", isCorrect: true },
          { text: "Ensanchamiento de la calzada en ambos lados.", isCorrect: false }
        ]
      },
      {
        id: 51,
        text: "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
        alternatives: [
          { text: "Se puede adelantar en ambos sentidos.", isCorrect: false },
          { text: "No está permitido adelantar en ningún sentido.", isCorrect: false },
          { text: "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 52,
        text: "Se define como zona rígida al:",
        alternatives: [
          { text: "Área donde se prohíbe la circulación de vehículos.", isCorrect: false },
          { text: "Área donde se prohíbe la circulación de peatones.", isCorrect: false },
          { text: "Área de la vía en la que se prohíbe el estacionamiento de vehículos.", isCorrect: true },
          { text: "Todas las alternativas son correctas.", isCorrect: false }
        ]
      },
      {
        id: 67,
        text: "La señal preventiva P-33A, significa:",
        alternatives: [
          { text: "Señal de curva sinuosa.", isCorrect: false },
          { text: "Señal de proximidad a un badén.", isCorrect: false },
          { text: "Señal de proximidad de un reductor de velocidad tipo resalto.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 72,
        text: "En señalética vial, el color ____ en el pavimento es utilizado para carriles de tráfico en sentido opuesto y el color ____ en el pavimento es utilizado como separador de carriles de tráfico en el mismo sentido.",
        alternatives: [
          { text: "Amarillo - blanco.", isCorrect: true },
          { text: "Blanco - Amarillo.", isCorrect: false },
          { text: "Azul - rojo.", isCorrect: false },
          { text: "Rojo - Amarillo.", isCorrect: false }
        ]
      },
      {
        id: 75,
        text: "Tienen el objetivo de notificar a los usuarios las limitaciones, prohibiciones o restricciones en el uso de la vía.",
        alternatives: [
          { text: "Señales reguladoras o de reglamentación.", isCorrect: true },
          { text: "Señales preventivas.", isCorrect: false },
          { text: "Señales informativas.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 76,
        text: "Tienen el propósito de advertir a los usuarios sobre la existencia y naturaleza de un peligro en la vía.",
        alternatives: [
          { text: "Señales reguladoras o de reglamentación.", isCorrect: false },
          { text: "Señales preventivas.", isCorrect: true },
          { text: "Señales informativas.", isCorrect: false },
          { text: "Señales horizontales.", isCorrect: false }
        ]
      },
      {
        id: 84,
        text: "Una línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
        alternatives: [
          { text: "Que se puede adelantar, debido a que la línea no es amarilla continua.", isCorrect: false },
          { text: "Que está prohibido hidar la línea y no hay excepciones.", isCorrect: false },
          { text: "Que está prohibido pasar al otro lado de la línea con algunas excepciones.", isCorrect: true },
          { text: "Que es zona de peatones.", isCorrect: false }
        ]
      },
      {
        id: 87,
        text: "La siguiente señal (P-1), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con una vía no pavimentada.", isCorrect: false },
          { text: "Proximidad a una intersección con una vía de mayor jerarquía.", isCorrect: true },
          { text: "Proximidad a una intersección sin preferencia de vía.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 88,
        text: "La siguiente señal (P-2), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con una vía de menor jerarquía.", isCorrect: true },
          { text: "Proximidad a una intersección con una vía no pavimentada.", isCorrect: false },
          { text: "Proximidad a una intersección sin preferencia de vía.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 89,
        text: "La siguiente señal (P-3), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con una vía de menor jerarquía.", isCorrect: false },
          { text: "Proximidad a una intersección con una vía no pavimentada.", isCorrect: false },
          { text: "Proximidad a una intersección sin preferencia de vía.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 90,
        text: "La siguiente señal (P-4), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con una vía de menor jerarquía.", isCorrect: false },
          { text: "Proximidad a una intersección con una vía no pavimentada.", isCorrect: true },
          { text: "Proximidad a una intersección sin preferencia de vía.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 91,
        text: "La siguiente señal (P-5), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con una vía de menor jerarquía.", isCorrect: false },
          { text: "Proximidad a una intersección con una vía no pavimentada.", isCorrect: false },
          { text: "Proximidad a una intersección con circulación giratoria (rotonda).", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 92,
        text: "La siguiente señal (P-6), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con una vía no pavimentada.", isCorrect: false },
          { text: "Proximidad a una intersección con circulación giratoria (rotonda).", isCorrect: false },
          { text: "Proximidad a un cruce a nivel con una línea férrea sin barreras.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 93,
        text: "La siguiente señal (P-7), indica:",
        alternatives: [
          { text: "Proximidad a una intersección con circulación giratoria (rotonda).", isCorrect: false },
          { text: "Proximidad a un cruce a nivel con una línea férrea sin barreras.", isCorrect: false },
          { text: "Proximidad a un cruce a nivel con una línea férrea con barreras.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 94,
        text: "La siguiente señal (P-8), indica:",
        alternatives: [
          { text: "Proximidad a un cruce a nivel con una línea férrea sin barreras.", isCorrect: false },
          { text: "Proximidad a un cruce a nivel con una línea férrea con barreras.", isCorrect: false },
          { text: "Proximidad a un cruce con tranvía.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 95,
        text: "La siguiente señal (P-9), indica:",
        alternatives: [
          { text: "Proximidad a un cruce a nivel con una línea férrea con barreras.", isCorrect: false },
          { text: "Proximidad a un cruce con tranvía.", isCorrect: false },
          { text: "Proximidad a una intersección de caminos.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 96,
        text: "La siguiente señal (P-10), indica:",
        alternatives: [
          { text: "Proximidad a un cruce con tranvía.", isCorrect: false },
          { text: "Proximidad a una intersección de caminos.", isCorrect: false },
          { text: "Proximidad a una bifurcación.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 97,
        text: "La siguiente señal (P-11), indica:",
        alternatives: [
          { text: "Proximidad a una intersección de caminos.", isCorrect: false },
          { text: "Proximidad a una bifurcación.", isCorrect: false },
          { text: "Proximidad a un estrechamiento simétrico de la calzada.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 98,
        text: "La siguiente señal (P-12), indica:",
        alternatives: [
          { text: "Proximidad a una bifurcación.", isCorrect: false },
          { text: "Proximidad a un estrechamiento simétrico de la calzada.", isCorrect: false },
          { text: "Proximidad a un estrechamiento asimétrico de la calzada por el lado derecho.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 99,
        text: "La siguiente señal (P-13), indica:",
        alternatives: [
          { text: "Proximidad a un estrechamiento simétrico de la calzada.", isCorrect: false },
          { text: "Proximidad a un estrechamiento asimétrico de la calzada por el lado derecho.", isCorrect: false },
          { text: "Proximidad a un estrechamiento asimétrico de la calzada por el lado izquierdo.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 100,
        text: "La siguiente señal (P-14), indica:",
        alternatives: [
          { text: "Proximidad a un estrechamiento asimétrico de la calzada por el lado derecho.", isCorrect: false },
          { text: "Proximidad a un estrechamiento asimétrico de la calzada por el lado izquierdo.", isCorrect: false },
          { text: "Proximidad a un puente angosto.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 101,
        text: "La siguiente señal (P-15), indica:",
        alternatives: [
          { text: "Proximidad a un estrechamiento asimétrico de la calzada por el lado izquierdo.", isCorrect: false },
          { text: "Proximidad a un puente angosto.", isCorrect: false },
          { text: "Proximidad a un badén.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 102,
        text: "La siguiente señal (P-16), indica:",
        alternatives: [
          { text: "Proximidad a un puente angosto.", isCorrect: false },
          { text: "Proximidad a un badén.", isCorrect: false },
          { text: "Proximidad a un paso a nivel.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 103,
        text: "La siguiente señal (P-17), indica:",
        alternatives: [
          { text: "Proximidad a un badén.", isCorrect: false },
          { text: "Proximidad a un paso a nivel.", isCorrect: false },
          { text: "Proximidad a un túnel.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 104,
        text: "La siguiente señal (P-18), indica:",
        alternatives: [
          { text: "Proximidad a un paso a nivel.", isCorrect: false },
          { text: "Proximidad a un túnel.", isCorrect: false },
          { text: "Proximidad a un tramo de pavimento resbaladizo.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 105,
        text: "La siguiente señal (P-19), indica:",
        alternatives: [
          { text: "Proximidad a un túnel.", isCorrect: false },
          { text: "Proximidad a un tramo de pavimento resbaladizo.", isCorrect: false },
          { text: "Proximidad a un tramo con gravilla suelta.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 106,
        text: "La siguiente señal (P-20), indica:",
        alternatives: [
          { text: "Proximidad a un tramo de pavimento resbaladizo.", isCorrect: false },
          { text: "Proximidad a un tramo con gravilla suelta.", isCorrect: false },
          { text: "Proximidad a un peligro de desprendimiento de rocas.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 107,
        text: "La siguiente señal (P-21), indica:",
        alternatives: [
          { text: "Proximidad a un tramo con gravilla suelta.", isCorrect: false },
          { text: "Proximidad a un peligro de desprendimiento de rocas.", isCorrect: false },
          { text: "Proximidad a un cruce de peatones.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 108,
        text: "La siguiente señal (P-22), indica:",
        alternatives: [
          { text: "Proximidad a un peligro de desprendimiento de rocas.", isCorrect: false },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Proximidad a un cruce de ciclistas.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 109,
        text: "La siguiente señal (P-23), indica:",
        alternatives: [
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Proximidad a un cruce de ciclistas.", isCorrect: false },
          { text: "Proximidad a una zona escolar.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 110,
        text: "La siguiente señal (P-24), indica:",
        alternatives: [
          { text: "Proximidad a un cruce de ciclistas.", isCorrect: false },
          { text: "Proximidad a una zona escolar.", isCorrect: false },
          { text: "Proximidad a una zona de hospital.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 111,
        text: "La siguiente señal (P-25), indica:",
        alternatives: [
          { text: "Proximidad a una zona escolar.", isCorrect: false },
          { text: "Proximidad a una zona de hospital.", isCorrect: false },
          { text: "Proximidad a un cruce de animales.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 112,
        text: "La siguiente señal (P-26), indica:",
        alternatives: [
          { text: "Proximidad a una zona de hospital.", isCorrect: false },
          { text: "Proximidad a un cruce de animales.", isCorrect: false },
          { text: "Proximidad a un cruce de animales domésticos.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 113,
        text: "La siguiente señal (P-27), indica:",
        alternatives: [
          { text: "Proximidad a un cruce de animales.", isCorrect: false },
          { text: "Proximidad a un cruce de animales domésticos.", isCorrect: false },
          { text: "Proximidad a un paso de maquinaria agrícola.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 114,
        text: "La siguiente señal (P-28), indica:",
        alternatives: [
          { text: "Proximidad a un cruce de animales domésticos.", isCorrect: false },
          { text: "Proximidad a un paso de maquinaria agrícola.", isCorrect: false },
          { text: "Proximidad a un paso de vehículos de tracción a sangre.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 115,
        text: "La siguiente señal (P-29), indica:",
        alternatives: [
          { text: "Proximidad a un paso de maquinaria agrícola.", isCorrect: false },
          { text: "Proximidad a un paso de vehículos de tracción a sangre.", isCorrect: false },
          { text: "Proximidad a un aeropuerto o zona de vuelo bajo.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 116,
        text: "La siguiente señal (P-30), indica:",
        alternatives: [
          { text: "Proximidad a un paso de vehículos de tracción a sangre.", isCorrect: false },
          { text: "Proximidad a un aeropuerto o zona de vuelo bajo.", isCorrect: false },
          { text: "Proximidad a un lugar donde suelen soplar vientos fuertes.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 117,
        text: "La siguiente señal (P-31), indica:",
        alternatives: [
          { text: "Proximidad a un aeropuerto o zona de vuelo bajo.", isCorrect: false },
          { text: "Proximidad a un lugar donde suelen soplar vientos fuertes.", isCorrect: false },
          { text: "Proximidad a una pendiente pronunciada.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 118,
        text: "La siguiente señal (P-32), indica:",
        alternatives: [
          { text: "Proximidad a un lugar donde suelen soplar vientos fuertes.", isCorrect: false },
          { text: "Proximidad a una pendiente pronunciada.", isCorrect: false },
          { text: "Proximidad a una curva peligrosa.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 119,
        text: "La siguiente señal (P-33), indica:",
        alternatives: [
          { text: "Proximidad a una pendiente pronunciada.", isCorrect: false },
          { text: "Proximidad a una curva peligrosa.", isCorrect: false },
          { text: "Proximidad a una curva cerrada a la derecha.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 120,
        text: "La siguiente señal (P-34), indica:",
        alternatives: [
          { text: "Proximidad a una curva peligrosa.", isCorrect: false },
          { text: "Proximidad a una curva cerrada a la derecha.", isCorrect: false },
          { text: "Proximidad a una curva cerrada a la izquierda.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 121,
        text: "La siguiente señal (P-35), indica:",
        alternatives: [
          { text: "Proximidad a una curva cerrada a la derecha.", isCorrect: false },
          { text: "Proximidad a una curva cerrada a la izquierda.", isCorrect: false },
          { text: "Proximidad a una serie de curvas peligrosas.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 122,
        text: "La siguiente señal (P-36), indica:",
        alternatives: [
          { text: "Proximidad a una curva cerrada a la izquierda.", isCorrect: false },
          { text: "Proximidad a una serie de curvas peligrosas.", isCorrect: false },
          { text: "Proximidad a un tramo con resaltos.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 123,
        text: "La siguiente señal (P-37), indica:",
        alternatives: [
          { text: "Proximidad a una serie de curvas peligrosas.", isCorrect: false },
          { text: "Proximidad a un tramo con resaltos.", isCorrect: false },
          { text: "Proximidad a un cruce con otra vía del mismo nivel.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 124,
        text: "La siguiente señal (P-38), indica:",
        alternatives: [
          { text: "Proximidad a un tramo con resaltos.", isCorrect: false },
          { text: "Proximidad a un cruce con otra vía del mismo nivel.", isCorrect: false },
          { text: "Proximidad a un lugar donde hay niños jugando.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 125,
        text: "La siguiente señal (P-39), indica:",
        alternatives: [
          { text: "Proximidad a un cruce con otra vía del mismo nivel.", isCorrect: false },
          { text: "Proximidad a un lugar donde hay niños jugando.", isCorrect: false },
          { text: "Proximidad a un lugar donde hay personas trabajando en la vía.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 126,
        text: "La siguiente señal (P-40), indica:",
        alternatives: [
          { text: "Proximidad a un lugar donde hay niños jugando.", isCorrect: false },
          { text: "Proximidad a un lugar donde hay personas trabajando en la vía.", isCorrect: false },
          { text: "Proximidad a un paso de ganado.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 127,
        text: "La siguiente señal (R-1), se utiliza para indicar:",
        alternatives: [
          { text: "Advertencia de pare.", isCorrect: false },
          { text: "Obligación de detenerse (pare).", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 128,
        text: "La siguiente señal (R-2), se utiliza para indicar:",
        alternatives: [
          { text: "Obligación de detenerse (pare).", isCorrect: false },
          { text: "Ceda el paso.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 129,
        text: "La siguiente señal (R-3), se utiliza para indicar:",
        alternatives: [
          { text: "Ceda el paso.", isCorrect: false },
          { text: "Prohibido el ingreso.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 130,
        text: "La siguiente señal (R-4), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el ingreso.", isCorrect: false },
          { text: "Prohibido el ingreso a vehículos.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 131,
        text: "La siguiente señal (R-5), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el ingreso a vehículos.", isCorrect: false },
          { text: "Prohibido el ingreso a vehículos de carga.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 132,
        text: "La siguiente señal (R-6), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el ingreso a vehículos de carga.", isCorrect: false },
          { text: "Prohibido el ingreso a vehículos de tracción animal.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 133,
        text: "La siguiente señal (R-7), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el ingreso a vehículos de tracción animal.", isCorrect: false },
          { text: "Prohibido el ingreso a peatones.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 134,
        text: "La siguiente señal (R-8), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el ingreso a peatones.", isCorrect: false },
          { text: "Prohibido el ingreso a ciclistas.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 135,
        text: "La siguiente señal (R-9), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el ingreso a ciclistas.", isCorrect: false },
          { text: "Prohibido girar a la derecha.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 136,
        text: "La siguiente señal (R-10), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido girar a la derecha.", isCorrect: false },
          { text: "Prohibido girar a la izquierda.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 137,
        text: "La siguiente señal (R-11), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido girar a la izquierda.", isCorrect: false },
          { text: "Prohibido girar en U.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 138,
        text: "La siguiente señal (R-12), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido girar en U.", isCorrect: false },
          { text: "Prohibido adelantar.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 138,
        text: "La siguiente señal (R-12), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido girar en U.", isCorrect: false },
          { text: "Prohibido adelantar.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 139,
        text: "La siguiente señal (R-13), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido adelantar.", isCorrect: false },
          { text: "Prohibido estacionar.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 140,
        text: "La siguiente señal (R-14), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido estacionar.", isCorrect: false },
          { text: "Prohibido detenerse.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 141,
        text: "La siguiente señal (R-15), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido detenerse.", isCorrect: false },
          { text: "Límite máximo de velocidad.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 142,
        text: "La siguiente señal (R-16), se utiliza para indicar:",
        alternatives: [
          { text: "Límite máximo de velocidad.", isCorrect: false },
          { text: "Fin de la restricción de velocidad.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 143,
        text: "La siguiente señal (R-17), se utiliza para indicar:",
        alternatives: [
          { text: "Fin de la restricción de velocidad.", isCorrect: false },
          { text: "Prohibido el uso de bocina.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 144,
        text: "La siguiente señal (R-18), se utiliza para indicar:",
        alternatives: [
          { text: "Prohibido el uso de bocina.", isCorrect: false },
          { text: "Fin de la prohibición de uso de bocina.", isCorrect: true },
          { text: "Proximidad a un cruce de peatones.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 145,
        text: "La siguiente señal (1-18), se utiliza para indicar:",
        alternatives: [
          { text: "Cercanía a una ferretería.", isCorrect: false },
          { text: "Cercanía a un servicio mecánico.", isCorrect: false },
          { text: "Cercanía a un grifo.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 146,
        text: "La siguiente señal (1-19), se utiliza para indicar:",
        alternatives: [
          { text: "Cercanía a un servicio mecánico.", isCorrect: false },
          { text: "Cercanía a una tienda.", isCorrect: false },
          { text: "Cercanía a un grifo.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 147,
        text: "La siguiente señal (1-20), se utiliza para indicar:",
        alternatives: [
          { text: "Cercanía a un servicio mecánico.", isCorrect: false },
          { text: "Cercanía a una zona donde debe circular con cadenas en las llantas.", isCorrect: false },
          { text: "Cercanía a un grifo.", isCorrect: false },
          { text: "Cercanía a una llantería.", isCorrect: true }
        ]
      },
      {
        id: 148,
        text: "La siguiente señal (R-16a), se utiliza para indicar:",
        alternatives: [
          { text: "Fin de la restricción de circulación de automotores.", isCorrect: false },
          { text: "Fin de la restricción de prohibido adelantar.", isCorrect: true },
          { text: "Fin de la restricción de circulación en doble sentido.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 151,
        text: "La siguiente señal (P-61), muestra:",
        alternatives: [
          { text: "Flechas retroreflectivas que indican peligro.", isCorrect: false },
          { text: "Delineadores de curva, que guían al conductor.", isCorrect: true },
          { text: "Advertencia al conductor sobre la proximidad de un puente.", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 183,
        text: "Es una línea transversal a la calzada, que indica al conductor que debe detener completamente el vehículo, no debiendo sobrepasar el inicio de la indicada línea:",
        alternatives: [
          { text: "Línea de carril.", isCorrect: false },
          { text: "Línea de borde de calzada.", isCorrect: false },
          { text: "Línea de pare.", isCorrect: true },
          { text: "Todas las alternativas son correctas.", isCorrect: false }
        ]
      },
      {
        id: 192,
        text: "Son señales que regulan el tránsito:",
        alternatives: [
          { text: "Las bocinas y las marcas en la calzada o señales horizontales.", isCorrect: false },
          { text: "Las bocinas y las señales verticales.", isCorrect: false },
          { text: "Las señales verticales, las marcas en la calzada o señales horizontales y las bocinas.", isCorrect: true },
          { text: "Las señales verticales y las marcas en la calzada o señales horizontales.", isCorrect: false }
        ]
      },
      {
        id: 197,
        text: "El siguiente gráfico muestra:",
        alternatives: [
          { text: "Señalización de tránsito vertical y horizontal en una zona escolar.", isCorrect: false },
          { text: "Únicamente señalización de tránsito vertical en una zona escolar.", isCorrect: false },
          { text: "Únicamente señalización de tránsito horizontal en una zona escolar.", isCorrect: true },
          { text: "Ninguna de las alternativas es correcta.", isCorrect: false }
        ]
      },
      {
        id: 198,
        text: "Las canalizadoras, tiene por función conformar las islas canalizadoras del tránsito automotor en una:",
        alternatives: [
          { text: "Islas canalizadoras - vía.", isCorrect: true },
          { text: "Líneas - intersección.", isCorrect: false },
          { text: "Vías - intersección.", isCorrect: false },
          { text: "Todas las alternativas son correctas.", isCorrect: false }
        ]
      },
      {
        id: 199,
        text: "Si al conducir en una intersección se encuentra con las siguientes marcas en el pavimento (malla ortogonal de color amarillo), significa:",
        alternatives: [
          { text: "Que no puede detener el vehículo dentro del área de intersección.", isCorrect: true },
          { text: "Que se están realizando trabajos de emergencia en el área demarcada.", isCorrect: false },
          { text: "Que únicamente puede detener el vehículo dentro del área de intersección.", isCorrect: false },
          { text: "Que es una isla de refugio peatonal.", isCorrect: false }
        ]
      },
      {
        id: 200,
        text: "De acuerdo al siguiente gráfico, es correcto afirmar que:",
        alternatives: [
          { text: "La zona que permite adelantar inicia con las líneas amarillas continuas.", isCorrect: false },
          { text: "Los conductores pueden estacionarse al empezar las líneas continuas.", isCorrect: false },
          { text: "La zona de no adelantar inicia con las líneas amarillas continuas.", isCorrect: true },
          { text: "El conductor del camión puede estacionarse antes de empezar las líneas continuas.", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Seguridad Vial',
    questions: [
      {
        id: 23,
        text: "Respecto a la distancia de seguimiento entre vehículos, es correcto afirmar que:",
        alternatives: [
          { text: "El conductor debe mantener una distancia prudente que le permita detenerse sin colisionar en caso de frenado brusco del vehículo que lo precede", isCorrect: true },
          { text: "El conductor debe mantener una distancia de 1 metro respecto al vehículo que lo precede", isCorrect: false },
          { text: "El conductor debe mantener una distancia de 2 metros respecto al vehículo que lo precede", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 39,
        text: "Al conducir un vehículo, el conductor debe:",
        alternatives: [
          { text: "Conducir a una velocidad que le permita mantener el control del vehículo", isCorrect: false },
          { text: "Ajustar la velocidad del vehículo a las condiciones de la vía", isCorrect: false },
          { text: "Respetar las señales de tránsito", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      },
      {
        id: 68,
        text: "¿Qué debería hacer el conductor para evitar accidentes al conducir en una vía con pavimento mojado?",
        alternatives: [
          { text: "Aumentar la velocidad para salir rápido de la zona mojada", isCorrect: false },
          { text: "Reducir la velocidad y aumentar la distancia con el vehículo que lo precede", isCorrect: true },
          { text: "Mantener la misma velocidad y distancia con el vehículo que lo precede", isCorrect: false },
          { text: "Detener el vehículo hasta que el pavimento esté seco", isCorrect: false }
        ]
      },
      {
        id: 74,
        text: "¿Qué factores pueden afectar la capacidad de reacción de un conductor?",
        alternatives: [
          { text: "El consumo de alcohol", isCorrect: false },
          { text: "El cansancio", isCorrect: false },
          { text: "El uso de medicamentos que afecten el sistema nervioso", isCorrect: false },
          { text: "Todas las alternativas son correctas", isCorrect: true }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Infracciones y Sanciones',
    questions: [
      {
        id: 19,
        text: "Conducir un vehículo con la licencia de conducir vencida constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 46,
        text: "Conducir un vehículo sin contar con el SOAT vigente constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 47,
        text: "Conducir un vehículo bajo los efectos del alcohol constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 60,
        text: "La sanción por conducir un vehículo sin haber obtenido licencia de conducir es:",
        alternatives: [
          { text: "Multa y retención del vehículo", isCorrect: true },
          { text: "Multa y suspensión de la licencia", isCorrect: false },
          { text: "Multa y cancelación de la licencia", isCorrect: false },
          { text: "Solo multa", isCorrect: false }
        ]
      },
      {
        id: 61,
        text: "La sanción por exceder el límite de velocidad establecido constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 65,
        text: "Estacionar un vehículo en una zona prohibida constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: true },
          { text: "Grave", isCorrect: false },
          { text: "Muy grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 77,
        text: "Conducir un vehículo utilizando un celular u otro dispositivo móvil constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 27,
        text: "El incumplimiento de las obligaciones del conductor del servicio de transporte terrestre constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 32,
        text: "El transportista que no cumpla con verificar que el conductor habilitado cuente con licencia de conducir vigente comete una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 35,
        text: "Prestar el servicio de transporte terrestre con un vehículo que no cuente con la autorización correspondiente, constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy Grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 37,
        text: "Prestar el servicio de transporte terrestre con un vehículo que no haya aprobado la inspección técnica vehicular constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 40,
        text: "Prestar el servicio de transporte terrestre con un vehículo que no cuente con póliza de seguro obligatorio de accidentes de tránsito vigente o certificado contra accidentes de tránsito, según corresponda, constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy Grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 45,
        text: "El incumplimiento de la jornada máxima de conducción constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 49,
        text: "No portar la Guía de Transportista Remisión al realizar el servicio de transporte terrestre de mercancías constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 52,
        text: "Realizar el servicio de transporte de mercancías sin contar con la autorización correspondiente constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy Grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 53,
        text: "Realizar el servicio de transporte de personas sin contar con la autorización correspondiente constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy Grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 54,
        text: "No respetar las rutas autorizadas para el servicio de transporte constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 55,
        text: "No respetar los horarios autorizados para el servicio de transporte constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 56,
        text: "No respetar las tarifas autorizadas para el servicio de transporte constituye una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: true },
          { text: "Muy Grave", isCorrect: false },
          { text: "No constituye infracción", isCorrect: false }
        ]
      },
      {
        id: 65,
        text: "El conductor que preste el servicio de transporte público en vehículo no autorizado comete una infracción:",
        alternatives: [
          { text: "Leve", isCorrect: false },
          { text: "Grave", isCorrect: false },
          { text: "Muy Grave", isCorrect: true },
          { text: "No constituye infracción", isCorrect: false }
        ]
      }
    ]
  },
  

  {
    id: 5,
    name: 'Mecánica Básica',
    questions: [
      {
        id: 13,
        text: "El sistema de frenos de un vehículo está diseñado para:",
        alternatives: [
          { text: "Aumentar la velocidad del vehículo", isCorrect: false },
          { text: "Reducir la velocidad o detener el vehículo", isCorrect: true },
          { text: "Mejorar la dirección del vehículo", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 14,
        text: "El sistema de dirección de un vehículo está diseñado para:",
        alternatives: [
          { text: "Controlar la trayectoria del vehículo", isCorrect: true },
          { text: "Reducir la velocidad del vehículo", isCorrect: false },
          { text: "Aumentar la potencia del motor", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 15,
        text: "El sistema de suspensión de un vehículo está diseñado para:",
        alternatives: [
          { text: "Absorber las irregularidades del terreno y proporcionar estabilidad", isCorrect: true },
          { text: "Aumentar la velocidad del vehículo", isCorrect: false },
          { text: "Controlar la temperatura del motor", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 16,
        text: "El sistema de lubricación de un vehículo está diseñado para:",
        alternatives: [
          { text: "Reducir el desgaste de las piezas móviles del motor", isCorrect: true },
          { text: "Aumentar la potencia del motor", isCorrect: false },
          { text: "Mejorar la visibilidad del conductor", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 17,
        text: "El sistema de enfriamiento de un vehículo está diseñado para:",
        alternatives: [
          { text: "Mantener la temperatura adecuada del motor", isCorrect: true },
          { text: "Reducir la velocidad del vehículo", isCorrect: false },
          { text: "Aumentar la tracción de las llantas", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 38,
        text: "El nivel de aceite del motor debe verificarse:",
        alternatives: [
          { text: "Con el motor encendido y caliente", isCorrect: false },
          { text: "Con el motor apagado y frío", isCorrect: true },
          { text: "Solo cuando el vehículo está en movimiento", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 48,
        text: "La presión de las llantas debe verificarse:",
        alternatives: [
          { text: "Cuando las llantas están frías", isCorrect: true },
          { text: "Cuando las llantas están calientes", isCorrect: false },
          { text: "Solo cuando el vehículo está en movimiento", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 62,
        text: "El sistema de escape de un vehículo está diseñado para:",
        alternatives: [
          { text: "Reducir el ruido y canalizar los gases de combustión", isCorrect: true },
          { text: "Aumentar la velocidad del vehículo", isCorrect: false },
          { text: "Controlar la dirección del vehículo", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 63,
        text: "El sistema de combustible de un vehículo está diseñado para:",
        alternatives: [
          { text: "Suministrar combustible al motor para su funcionamiento", isCorrect: true },
          { text: "Reducir la temperatura del motor", isCorrect: false },
          { text: "Mejorar la tracción de las llantas", isCorrect: false },
          { text: "Ninguna de las alternativas es correcta", isCorrect: false }
        ]
      },
      {
        id: 1,
        text: "Los frenos de tambor constan principalmente de:",
        alternatives: [
          { text: "Disco, pinza y pastillas de freno", isCorrect: false },
          { text: "Tambor, zapatas y cilindro de rueda", isCorrect: true },
          { text: "Rotor, cáliper y líquido de frenos", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 2,
        text: "Los frenos de disco constan principalmente de:",
        alternatives: [
          { text: "Tambor, zapatas y cilindro de rueda", isCorrect: false },
          { text: "Disco, pinza y pastillas de freno", isCorrect: true },
          { text: "Cilindro maestro, tambor y zapatas", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 3,
        text: "El sistema de frenos antibloqueo (ABS) tiene como función principal:",
        alternatives: [
          { text: "Aumentar la velocidad de frenado", isCorrect: false },
          { text: "Evitar el bloqueo de las ruedas durante el frenado", isCorrect: true },
          { text: "Reducir el consumo de combustible", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 4,
        text: "El líquido de frenos debe ser revisado periódicamente porque:",
        alternatives: [
          { text: "Se evapora con el tiempo", isCorrect: false },
          { text: "Absorbe humedad y pierde eficacia", isCorrect: true },
          { text: "Cambia de color con el uso", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 5,
        text: "La función principal del alternador en un vehículo es:",
        alternatives: [
          { text: "Encender el motor", isCorrect: false },
          { text: "Generar electricidad para cargar la batería y alimentar sistemas eléctricos", isCorrect: true },
          { text: "Regular la temperatura del motor", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 6,
        text: "La batería de un vehículo tiene como función principal:",
        alternatives: [
          { text: "Alimentar el sistema de frenos", isCorrect: false },
          { text: "Suministrar energía eléctrica para el arranque y sistemas eléctricos", isCorrect: true },
          { text: "Controlar la suspensión del vehículo", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 7,
        text: "El filtro de aire del motor debe revisarse periódicamente para:",
        alternatives: [
          { text: "Aumentar la potencia del motor", isCorrect: false },
          { text: "Evitar la entrada de partículas que puedan dañar el motor", isCorrect: true },
          { text: "Reducir el consumo de aceite", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 8,
        text: "El sistema de encendido en un vehículo de combustión interna es responsable de:",
        alternatives: [
          { text: "Iniciar la combustión en el motor", isCorrect: true },
          { text: "Controlar la dirección del vehículo", isCorrect: false },
          { text: "Regular la presión de las llantas", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 9,
        text: "La correa de distribución en un vehículo se encarga de:",
        alternatives: [
          { text: "Sincronizar el movimiento de las válvulas y los pistones", isCorrect: true },
          { text: "Controlar la velocidad del vehículo", isCorrect: false },
          { text: "Regular la presión de los frenos", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 10,
        text: "Un neumático con presión baja puede causar:",
        alternatives: [
          { text: "Mayor consumo de combustible y desgaste irregular", isCorrect: true },
          { text: "Mejor agarre en superficies mojadas", isCorrect: false },
          { text: "Menor desgaste del neumático", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 11,
        text: "El sistema de transmisión de un vehículo tiene como función principal:",
        alternatives: [
          { text: "Transferir la potencia del motor a las ruedas", isCorrect: true },
          { text: "Controlar la temperatura del motor", isCorrect: false },
          { text: "Regular la presión de los frenos", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 12,
        text: "El embrague en un vehículo con transmisión manual permite:",
        alternatives: [
          { text: "Conectar y desconectar el motor de la transmisión", isCorrect: true },
          { text: "Aumentar la velocidad del vehículo", isCorrect: false },
          { text: "Controlar la dirección del vehículo", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 13,
        text: "El diferencial en un vehículo permite:",
        alternatives: [
          { text: "Que las ruedas giren a diferentes velocidades al tomar curvas", isCorrect: true },
          { text: "Aumentar la potencia del motor", isCorrect: false },
          { text: "Controlar la suspensión del vehículo", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 14,
        text: "El sistema de dirección asistida facilita:",
        alternatives: [
          { text: "El giro del volante con menos esfuerzo", isCorrect: true },
          { text: "El frenado del vehículo", isCorrect: false },
          { text: "El arranque del motor", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 15,
        text: "El filtro de combustible tiene como función principal:",
        alternatives: [
          { text: "Eliminar impurezas del combustible antes de que llegue al motor", isCorrect: true },
          { text: "Reducir el consumo de combustible", isCorrect: false },
          { text: "Aumentar la potencia del motor", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 16,
        text: "El sistema de refrigeración evita que el motor:",
        alternatives: [
          { text: "Se sobrecaliente durante su funcionamiento", isCorrect: true },
          { text: "Pierda potencia en pendientes", isCorrect: false },
          { text: "Consuma más combustible", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 68,
        text: "¿Qué indica un nivel bajo de líquido de frenos en el depósito?",
        alternatives: [
          { text: "Fuga en el sistema o desgaste de las pastillas de freno", isCorrect: true },
          { text: "Exceso de presión en el sistema de frenos", isCorrect: false },
          { text: "Fallo en el sistema de suspensión", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 69,
        text: "¿Qué puede indicar un chirrido al frenar?",
        alternatives: [
          { text: "Desgaste de las pastillas o zapatas de freno", isCorrect: true },
          { text: "Fallo en el sistema de dirección", isCorrect: false },
          { text: "Problema en el sistema de combustible", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 70,
        text: "¿Qué debe hacerse si el motor se sobrecalienta?",
        alternatives: [
          { text: "Detener el vehículo y esperar a que el motor se enfríe", isCorrect: true },
          { text: "Aumentar la velocidad para enfriar el motor", isCorrect: false },
          { text: "Encender el aire acondicionado", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      },
      {
        id: 71,
        text: "El mantenimiento preventivo de un vehículo incluye:",
        alternatives: [
          { text: "Revisión periódica de frenos, aceite, llantas y filtros", isCorrect: true },
          { text: "Solo cambio de aceite cada 10 años", isCorrect: false },
          { text: "Revisión únicamente cuando el vehículo falla", isCorrect: false },
          { text: "Ninguna de las anteriores", isCorrect: false }
        ]
      }
    ]
  }
};

/*----------  Variables  ----------*/

//* Our array of messages
const messages = [
    "Trotamundos: Persona aficionada a viajar y recorrer lugares",
    "Ínfulas: Soberbia, orgullo o vanidad de una persona sobre sus bienes, actos o cualidades",
    "Subrepticiamente: Ocultamente, a escondidas",
    "Quimbambas: Lugar indeterminado y muy lejano",
    "Pregnancia: Capacidad de una figura para destacar, como la más completa, regular, simétrica, sencilla y perfecta posible, que capta la atención del observador en primer orden",
    "Queloide: Cicatriz engrosada producida por un aumento excesivo de tejido conjuntivo",
    "Mengambrea: Persona o cosa con excelentes cualidades. Tema o asunto tópico. Situación confusa o que causa incertidumbre",
    "Inanición: Debilidad grande por falta de alimento o por otras causas",
    "Sáxeo: De piedra",
    "Anosmático: [persona o animal] Que es incapaz de percibir los olores",
    "Despampanante: Pasmoso, llamativo, que deja atónito por su aspecto físico u otras cualidades",
    "Oráculo: Mensaje que los dioses transmiten a los hombres a través de un intermediario. Persona a quien todos escuchan con respeto por su gran autoridad y sabiduría",
    "Mocedad: Etapa de la vida que se encuentra entre la infancia y la adultez",
    "Admonición: Amonestación, advertencia que se hace a alguien para que corrija su conducta",
    "Incógnito: Desconocido, encubierto, referido a la persona pública o famosa que no quiere ser reconocida",
    "Hierático: Que es solemne e inexpresivo, se mueve poco y no exterioriza sentimientos",
    "Zaquizamí: [De origen árabe, significa literalmente `techo en el cielo`] Desván, último cuarto de la casa. Habitación muy pequeña, sucia y poco cómoda",
    "Ombudsman: Defensor del pueblo",
    "Cariacontecido: [persona] Que muestra en la cara pena, preocupación o sobresalto",
    "Cotisuelto: Muchacho que lleva la camisa por fuera de los pantalones",
    "Diletante: Que cultiva un arte o un campo del saber, o se interesa por él, como aficionado y no como profesional",
    "Esperpéntico: Que es grotesco, absurdo y está alejado de lo convencional, el orden o la realidad",
    "Monoteísmo: Es la creencia en un solo dios todopoderoso, a diferencia de las religiones que creen en varios dioses",
    "Ergonómico: [muebles, máquinas, herramientas] Que se adaptan en sus dimensiones y en la disposición de sus elementos a las condiciones fisiológicas del usuario",
    "Apuntillar: Clavar la puntilla al toro para rematarlo, de modo que tenga una muerte rápida. Dar [una persona] un golpe definitivo [a otra persona]",
];

/*----------  Functions  ----------*/

//* Random message function
const randomMessage = () => {
    // Generating a random number
    const randomNumber = Math.floor(Math.random() * messages.length);
    // Indicating the message we want from our array
    const randomMessage = messages[randomNumber];

    // Returning the message from our random number
    return randomMessage;
};

/*----------  Console messages  ----------*/

//* Printing a random message
console.log(randomMessage());

/*----------  Module exportation  ----------*/

//* Creating a module exportation
module.exports = { randomMessage };

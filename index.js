import axios from "axios"
import fs from "fs"
import FormData from "form-data";

// Leer el JSON desde el archivo
const eventData = JSON.parse(fs.readFileSync('./mock.json', 'utf8'));

//TODO: La URL tiene que ser configurable
// Definir la URL del endpoint
const endpointUrl = 'http://localhost:3000/api';

// Función para enviar la petición al endpoint
async function sendEvent(eventData) {
  const form = new FormData();
  form.append('event_log', JSON.stringify(eventData)); // Añade el JSON como un campo en el form-data

  try {
    const response = await axios.post(endpointUrl, form, {
      headers: form.getHeaders(), // Añadir los headers correctos para multipart/form-data
      timeout: 10000 // Ajusta el tiempo de espera si es necesario
    });
    console.log(`Response status: ${response.status}`);
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error sending event:', error.message);
  }
}

// Función para iniciar el envío periódico
function startSendingEvents(interval) {
  setInterval(() => {
    sendEvent(eventData);
  }, interval);
}

// Iniciar el envío de eventos cada X milisegundos (por ejemplo, cada 5 segundos)
console.log("Starting generator...")
console.log("...")

//TODO: El intervalo de envio de peticiones (5000ms / interval) tiene que ser configurable
startSendingEvents(5000);

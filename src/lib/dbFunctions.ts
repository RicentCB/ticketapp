import Ticket, { ITicket } from '../models/Ticket';
import { connectToDatabase } from './db'; // Asegúrate de tener configurada la conexión en db.ts

// Leer todos los documentos de la colección "tickets"
export async function getAllTickets(): Promise<ITicket[]> {
  await connectToDatabase(); // Asegurarse de que la base de datos esté conectada
  try {
    const tickets = await Ticket.find();
    return tickets;
  } catch (error) {
    console.error('Error leyendo la colección de tickets', error);
    throw new Error('Error al obtener los tickets');
  }
}

// Insertar un nuevo documento en la colección "tickets"
export async function createTicket(ticketData: ITicket): Promise<ITicket> {
  await connectToDatabase(); // Asegurarse de que la base de datos esté conectada
  try {
    const newTicket = new Ticket(ticketData);
    const savedTicket = await newTicket.save();
    return savedTicket;
  } catch (error) {
    console.error('Error insertando en la colección de tickets', error);
    throw new Error('Error al crear el ticket');
  }
}
import mongoose, { Schema, Document, Model } from 'mongoose';

// Definir la interfaz para los documentos de Ticket
export interface ITicket extends Document {
  title: string;
  creator: string;
  creatorPhoneNumber: string;
  unit: string;
  description: string;
}

// Definir el esquema de Mongoose
const TicketSchema: Schema<ITicket> = new Schema({
  title: { type: String, required: true },
  creator: { type: String, required: true },
  creatorPhoneNumber: { type: String, required: true },
  unit: { type: String, required: true },
  description: { type: String, required: false },
});

// Exportar el modelo
const Ticket: Model<ITicket> = mongoose.models.Ticket || mongoose.model<ITicket>('Ticket', TicketSchema);

export default Ticket;
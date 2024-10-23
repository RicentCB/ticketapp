import mongoose, { Schema, Document, Model } from 'mongoose';

// Definir la interfaz para los documentos de Ticket
export interface ITicket extends Document {
  description: string;
  creator: string;
  unit: string;
  detailedDescription: string;
}

// Definir el esquema de Mongoose
const TicketSchema: Schema<ITicket> = new Schema({
  description: { type: String, required: true },
  creator: { type: String, required: true },
  unit: { type: String, required: true },
  detailedDescription: { type: String, required: true },
});

// Exportar el modelo
const Ticket: Model<ITicket> = mongoose.models.Ticket || mongoose.model<ITicket>('Ticket', TicketSchema);

export default Ticket;
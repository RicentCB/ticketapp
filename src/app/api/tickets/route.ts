import { NextResponse } from 'next/server';
import { getAllTickets, createTicket } from '@/lib/dbFunctions';

// Manejar el método GET para obtener todos los tickets
export async function GET() {
  try {
    const tickets = await getAllTickets();
    return NextResponse.json(tickets, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener los tickets' }, { status: 500 });
  }
}

// Manejar el método POST para crear un nuevo ticket
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Obtén el cuerpo de la solicitud
    const newTicket = await createTicket(body);
    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al crear el ticket' }, { status: 500 });
  }
}
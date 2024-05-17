import { NextRequest } from 'next/server';





export async function GET(request: NextRequest) {
    const response =['Lista de empleados']
    return new Response(JSON.stringify(response), {
        headers: {
            'content-type': 'application/json',
        },
    });
}

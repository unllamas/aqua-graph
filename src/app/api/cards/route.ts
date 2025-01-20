import { NextResponse } from 'next/server';

const ANKARA_KEY = process.env.ANKARA_API_KEY ? process.env.ANKARA_API_KEY : '';

const CARD_LIMIT = 10;

export async function GET(): Promise<NextResponse<any>> {
  try {
    let request = await fetch(
      `https://stagingapi.paywithmoon.com/v1/api-gateway/card${CARD_LIMIT > 0 && `?limit=${CARD_LIMIT}`}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANKARA_KEY,
        },
      },
    );

    let data = await request.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching transactions:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

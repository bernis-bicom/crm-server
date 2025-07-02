import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json(
      {
        "id": "23487cdc093e810a01ff0",
        "userid": "",
        "customerid": "0032000001DrFDSAA3",
        "customertype": "Contact",
        "subject": "PBXware API call",
        "phonenumber": "202 3893-293",
        "direction": "OUTBOUND",
        "duration": 0,
        "starttime": 1684931119,
        "status": "UNANSWERED",
        "description": "Unanswered call by customer",
        "asteriskcallid1": "1407350434.61",
        "asteriskcallid2": "1407350434.62",
        "recordname": "",
        "recorddesc": "",
        "recording_url":""
    }
  )
}

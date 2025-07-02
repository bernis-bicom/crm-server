export async function GET(request, { params }) {

    return Response.json(
      {
        "name": "BernisCRM",
        "url": "https://login.example.com",
        "version": "1.00"
      }
    )
  } 
export async function GET(request, { params }) {

  return Response.json(
    {
      "name": "BernisCRM",
      "url": "https://login.bernis.dev",
      "version": "1.00"
  }
  )
} 
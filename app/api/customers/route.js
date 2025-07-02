export async function GET(request, { params }) {

    return Response.json(
      [
        {
          "id": "001",
          "type": "Contact",
          "webpage": "https://emea.salesforce.com/0032000001DrAAA001",
          "name": "Emily Carter",
          "email": "emily.carter@mail.com",
          "company": "TechCore Solutions",
          "mobilephone": "(312) 555-0198",
          "workphone": "(312) 555-0201",
          "homephone": null,
          "fax": null
        },
        {
          "id": "002",
          "type": "Contact",
          "webpage": "https://emea.salesforce.com/0032000001DrBBB002",
          "name": "Michael Lee",
          "email": "michael.lee@mail.com",
          "company": "GlobalSoft Ltd",
          "mobilephone": "(646) 555-0147",
          "workphone": "(646) 555-0162",
          "homephone": null,
          "fax": null
        },
        {
          "id": "003",
          "type": "Contact",
          "webpage": "https://emea.salesforce.com/0032000001DrCCC003",
          "name": "Samantha Green",
          "email": "samantha.green@mail.com",
          "company": "Innova Systems",
          "mobilephone": "(408) 555-0103",
          "workphone": "(408) 555-0119",
          "homephone": null,
          "fax": null
        },
        {
          "id": "004",
          "type": "Contact",
          "webpage": "https://emea.salesforce.com/0032000001DrDDD004",
          "name": "David Nguyen",
          "email": "david.nguyen@mail.com",
          "company": "Vertex Analytics",
          "mobilephone": "(202) 555-0174",
          "workphone": "(202) 555-0186",
          "homephone": null,
          "fax": null
        },
        {
          "id": "005",
          "type": "Contact",
          "webpage": "https://emea.salesforce.com/0032000001DrEEE005",
          "name": "Laura Thompson",
          "email": "laura.thompson@mail.com",
          "company": "FusionWorks Inc",
          "mobilephone": "(415) 555-0135",
          "workphone": "(415) 555-0140",
          "homephone": null,
          "fax": null
        }
      ]      
    )
  } 
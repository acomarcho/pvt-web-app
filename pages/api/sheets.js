const { google } = require("googleapis");
const spreadsheetId = "1W8XlxUakxpttD5etO6K7TaSEaHLyli0PIjW1sEfsDOo";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { 
      nama,
      durasi,
      tingkatKantuk,
      tingkatLelah,
      kesiapanKerja,
      banyakPercobaan,
      minorLapses,
      majorLapses,
      meanRT,
      medianRT,
      mean1OverMeanRT,
      fastest10RT,
      slowest10RT 
    } = req.body;

    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
  
    const client = await auth.getClient();
  
    const googleSheets = google.sheets({version: "v4", auth: client});
  
    try {
      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:M",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            [
              nama,
              durasi,
              tingkatKantuk,
              tingkatLelah,
              kesiapanKerja,
              banyakPercobaan,
              minorLapses,
              majorLapses,
              meanRT,
              medianRT,
              mean1OverMeanRT,
              fastest10RT,
              slowest10RT 
            ]
          ]
        }
      })
      res.status(200).json({
        message: "Successfully sent!"
      });
    } catch (error) {
      res.status(400).json({
        message: error
      });
      console.log(error);
    }
  }
}
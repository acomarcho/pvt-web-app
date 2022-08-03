import path from "path";
import moment from "moment";

const { google } = require("googleapis");
const spreadsheetId = "1wz7AZIbQ4zEDo7W4JH252_TXP42ScXptlopLlIwKvOI";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      nama,
      device,
      durasi,
      tingkatKantuk,
      tingkatLelah,
      kesiapanKerja,
      reactions,
      banyakPercobaan,
      minorLapses,
      majorLapses,
      meanRT,
      medianRT,
      mean1OverMeanRT,
      fastest10RT,
      slowest10RT,
    } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    try {
      moment.locale('id');
      let date = moment().utcOffset(7); /* GMT + 7 */
      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:M",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            [
              nama,
              device,
              date.format('Do MMMM YYYY'),
              date.format('hh:mm:ss[+07:00]'),
              durasi,
              tingkatKantuk,
              tingkatLelah,
              kesiapanKerja,
              reactions,
              banyakPercobaan,
              minorLapses,
              majorLapses,
              meanRT,
              medianRT,
              mean1OverMeanRT,
              fastest10RT,
              slowest10RT,
            ],
          ],
        },
      });
      res.status(200).json({
        message: "Successfully sent!",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
      console.log(error);
    }
  }
}

const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method === "POST") {
    /* Handle post request */
    const { token } = req.body;
    /* Parse JWT */
    try {
      const { date } = jwt.verify(token, process.env.SECRET_KEY);
      if ((new Date).getTime() - date > 86400000) {
        /* Lebih dari satu hari tidak logged in */
        res.status(403).json({
          message: "Your token has expired!"
        });
      } else {
        res.status(200).json({
          message: "Successfully authenticated!"
        })
      }
    } catch {
      res.status(403).json({
        message: "You are not authenticated!"
      });
    }
  }
};

export default handler;

const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method === "POST") {
    /* Handle post request */
    const { username, password } = req.body;
    if (
      username !== process.env.VALID_USERNAME ||
      password !== process.env.VALID_PASSWORD
    ) {
      res.status(403).json({
        message: "Wrong authentication data!",
      });
    } else {
      const token = jwt.sign({
        date: (new Date()).getTime()
      }, process.env.SECRET_KEY)
      res.status(200).json({
        message: "Successfully logged in!",
        token
      });
    }
  }
};

export default handler;

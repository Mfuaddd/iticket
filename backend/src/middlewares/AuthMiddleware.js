import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyAccess = (roles) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.send("Token is required");
      }

      const [bearer, token] = authHeader.split(" ");
      if (bearer !== "Bearer") {
        return res.send("Token is not valid");
      }

      const decode = jwt.verify(token, process.env.JWT_KEY);
      if (!roles.includes(decode.role)) {
        return res.status(401).send("You Dont Have Access");
      }

      next();
    } catch (error) {
      console.error(error.message);
      res.status(401).send(error.message);
    }
  };
};

import jwt from "jsonwebtoken";
import { jwt_config } from "../config.js";

const secret = jwt_config.secret; //llevar secreto a un archivo de configuracion

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  console.log(secret);
  return jwt.verify(token, secret);
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded);

    if(decoded.id!==owner){
      throw new Error('No puedes hacer esto')
    }
  },
};

function getToken(auth) {
  if (!auth) {
    throw new Error("No viene token");
  }

  if (auth.indexOf("Bearer") === -1) {
    throw new Error("Formato invalido");
  }

  let token = auth.replace("Bearer ", "");

  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

export default { sign, check };

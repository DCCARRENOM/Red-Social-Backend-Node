import jwt from 'jsonwebtoken';


function sign(data) {
  return jwt.sign(data,"secreto");
}

export default {sign};

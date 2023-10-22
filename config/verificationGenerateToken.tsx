import jwt from "jsonwebtoken"

const generateToken = (id: any) => {
  return jwt.sign({ id }, process.env.VERIFICATION_TOKEN || "", {
    expiresIn: "1d",
  })
}

export default generateToken

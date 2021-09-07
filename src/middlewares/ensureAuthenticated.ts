import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization.split(" ")[1];

  if (!token) {
    return response.status(401).end();
  }

  try {
    const { sub } = verify(
      token, 
      "6425ddbf9cd648e1e4d33c4340d3373d"
    ) as IPayload;

    request.user_id = sub;

    next()
  } catch (error) {
    return response.status(401).end()
  }

}
import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const usersRepositories = getCustomRepository(UsersRepositories);

  const { user_id } = request;

  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}

export { ensureAdmin };
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, email, admin } = request.body;

      const createUserService = new CreateUserService();
  
      const user = await createUserService.execute({ email, name, admin });
  
      return response.json(user);      
    } catch (error) {
      return response.json({error: error.message})
    }

  }
}

export { CreateUserController };
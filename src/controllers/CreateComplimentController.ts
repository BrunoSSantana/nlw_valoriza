import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    // try {
      const { tag_id, user_receiver, message } = request.body;

      const {user_id} = request;

      const createComplimentService = new CreateComplimentService();
  
      const compliment = await createComplimentService.execute({
        tag_id, 
        user_receiver, 
        user_sender: user_id, 
        message
      })
  
      return response.json(compliment)      
    // } catch (error) {
    //   return response.status(500).json({
    //     status: "error",
    //     message: "Internal Server Error",
    //   })
    // }


  }
}

export { CreateComplimentController }
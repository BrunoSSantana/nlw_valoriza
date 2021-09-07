import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const listUserReceiveComplimentsController = new ListUserReceiveComplimentsService();

    const { user_id } = request;

    const compliments = await listUserReceiveComplimentsController.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController }
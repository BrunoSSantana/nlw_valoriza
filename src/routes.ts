import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController= new ListTagsController();
const listUsersController= new ListUsersController();

router
.post(
  "/tags", 
  ensureAuthenticated, 
  ensureAdmin, 
  createTagController.handle
)
.post(
  "/users", 
  createUserController.handle
)
.post(
  "/login", 
  authenticateUserController.handle
)
.post(
  "/compliments", 
  ensureAuthenticated, 
  createComplimentController.handle
);

router
.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
)
.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
)
.get(
  "/tags",
  listTagsController.handle
)
.get(
  "/users", 
  ensureAuthenticated,
  ensureAdmin, 
  listUsersController.handle
);

export { router };
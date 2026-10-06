// A controller receives the incoming request, extracts the data it needs, passes that data to a service, and sends back the response. It should not contain business logic or direct database calls.

// // src/controllers/user.controller.js
import { Request, Response, NextFunction } from 'express';
import UserService from "../services/user.service.ts";

const service = new UserService({} as any);

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await service.getUserById(req.params.id as string);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

//Rule of thumb: If you see a database query or a complex conditional inside a controller, move it to the service layer.

import type { Request, Response } from 'express';
import { users } from '../entity/user.entity';
import { UserService } from '../service/user.service';

type User = typeof users.$inferInsert;

interface Params {
  limit: number;
  page: number;
  keyword?: string;
}

const userService = new UserService();

export class UserController {

  async registerUserController(req: Request, res: Response<User>) {
    const user = await userService.createNewUser(req.body);

    res.status(201).json({ ...user.at(0) });
  }

  async loginController(req: Request<{}, { username: string; password: string}>, res: Response<User>) {
    const user = await userService.login(req.body.username, req.body.password);

    res.status(200).json(user);
  }

  async userDetailController(req: Request<{ id: number }>, res: Response<User>) {
    const userId = req.params.id;

    const user = await userService.getProfile(userId);

    res.status(200).json(user);
  }

  async listUsersController(req: Request<Params>, res: Response<User[]>) {
    const params = {
      limit: req.params.limit,
      page: req.params.page,
      keyword: req.params.keyword
    };

    const users = await userService.getAllUsers(params);

    res.status(200).json(users);

  }
}

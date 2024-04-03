"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
const userService = new user_service_1.UserService();
class UserController {
    async registerUserController(req, res) {
        const user = await userService.createNewUser(req.body);
        res.status(201).json({ ...user.at(0) });
    }
    async loginController(req, res) {
        const user = await userService.login(req.body.username, req.body.password);
        res.status(200).json(user);
    }
    async userDetailController(req, res) {
        const userId = req.params.id;
        const user = await userService.getProfile(userId);
        res.status(200).json(user);
    }
    async listUsersController(req, res) {
        const params = {
            limit: req.params.limit,
            page: req.params.page,
            keyword: req.params.keyword
        };
        const users = await userService.getAllUsers(params);
        res.status(200).json(users);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
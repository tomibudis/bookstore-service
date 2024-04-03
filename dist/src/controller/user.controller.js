"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
const userService = new user_service_1.UserService();
class UserController {
    registerUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userService.createNewUser(req.body);
            res.status(201).json(Object.assign({}, user.at(0)));
        });
    }
    loginController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userService.login(req.body.username, req.body.password);
            res.status(200).json(user);
        });
    }
    userDetailController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const user = yield userService.getProfile(userId);
            res.status(200).json(user);
        });
    }
    listUsersController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                limit: req.params.limit,
                page: req.params.page,
                keyword: req.params.keyword
            };
            const users = yield userService.getAllUsers(params);
            res.status(200).json(users);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
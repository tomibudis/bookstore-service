"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_query_1 = require("../repository/user.query");
class UserService {
    userRepository = new user_query_1.UserRepository();
    async getAllUsers(params) {
        return this.userRepository.findAll({
            limit: params.limit,
            offset: params.limit * (params.page - 1),
        });
    }
    async getProfile(id) {
        return this.userRepository.findById(id);
    }
    async createNewUser(data) {
        // REQUIREMENT: add 100 point once user sign up
        return this.userRepository.insertUser({
            ...data,
            point: 100
        });
    }
    async login(username, password) {
        return (await this.userRepository.findAllByUsernameAndPassword({ username, password })).at(0);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
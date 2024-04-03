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
exports.UserService = void 0;
const user_query_1 = require("../repository/user.query");
class UserService {
    constructor() {
        this.userRepository = new user_query_1.UserRepository();
    }
    getAllUsers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findAll({
                limit: params.limit,
                offset: params.limit * (params.page - 1),
            });
        });
    }
    getProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findById(id);
        });
    }
    createNewUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // REQUIREMENT: add 100 point once user sign up
            return this.userRepository.insertUser(Object.assign(Object.assign({}, data), { point: 100 }));
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.userRepository.findAllByUsernameAndPassword({ username, password })).at(0);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
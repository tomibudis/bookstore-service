import { UserRepository } from "../repository/user.query";
import userEntity from "../entity/user.entity";

type Payload = typeof userEntity.$inferInsert;

interface UserParams {
  page: number;
  limit: number;
}
export class UserService {
  private userRepository = new UserRepository();

  async getAllUsers (params: UserParams) {
    return this.userRepository.findAll({
      limit: params.limit,
      offset: params.limit * (params.page - 1),
    });
  }

  async getProfile (id: number) {
    return this.userRepository.findById(id);
  }

  async createNewUser (data: Payload) {
    // REQUIREMENT: add 100 point once user sign up
    return this.userRepository.insertUser({
      ...data,
      point: 100
    });
  }

  async login (username: string, password: string) {
    return (await this.userRepository.findAllByUsernameAndPassword({ username, password })).at(0);
  }
}
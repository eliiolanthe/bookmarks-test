import type { User, UserRepository } from "@shared/types/user";

export default class UserService {
  constructor(private readonly users: UserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    const normalizedId = id.trim();

    if (!normalizedId) {
      throw new Error("User ID is required");
    }

    return this.users.findById(normalizedId);
  }

  async createUser(input: { email: string; name: string }): Promise<User> {
    const email = input.email.trim().toLowerCase();
    const name = input.name.trim();

    if (!email || !name) {
      throw new Error("Email and name are required");
    }

    if (await this.users.findByEmail(email)) {
      throw new Error("A user with this email already exists");
    }

    return this.users.create({ email, name });
  }
}
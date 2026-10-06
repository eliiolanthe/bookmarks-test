export interface User {
  id: string;
  email: string;
  name: string;
}


export interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: { email: string; name: string }): Promise<User>;
}
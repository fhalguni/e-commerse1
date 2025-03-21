import { profileRepository } from "../repositories/profileRepo";
import { userRepository } from "../repositories/userRepo";

class UserService {
  async createUser(name: string, email: string, bio: string) {
    const profile = await profileRepository
      .createQueryBuilder()
      .insert()
      .into("profile_table11")
      .values({ bio: bio })
      .execute();

    console.log(profile);

    const user = await userRepository
      .createQueryBuilder()
      .insert()
      .into("user_table11")
      .values({ name, email, profile: profile.identifiers[0].id })
      .execute();

    return user;
  }
}

export default new UserService();

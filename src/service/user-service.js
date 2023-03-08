import { UserRepository } from "../repository/index.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in user-service.js");
            throw error;
        }
    }

    async getUserByEmail(data) {
        try {
            const response = await this.userRepository.findBy(data);
            return response;
        } catch (error) {
            console.log("something went wrong in user-service.js");
            throw error;
        }
    }

    async login(data) {
        try {
            /* Find user with the email */
            const user = await this.getUserByEmail({ email: data.email });
           
            /* No user found */
            if (!user) {
                throw {
                    message: "No user found",
                    success: false
                }
            }

            /* if Password don't match */
            if (!user.comparePassword(data.password)) {
                throw {
                    message: "Incorrect password",
                    success: false
                }
            }
            
            /* Password match and now generating JWT token */
            const token = user.genJWT();
            console.log(token);
            return token;  

        } catch (error) {
            throw error;
        }
    }

}

export default UserService;
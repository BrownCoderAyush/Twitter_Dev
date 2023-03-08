import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";
class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findByUserAndLikeable(data){
        try {
            const like = await User.findOne(data);
        } catch (error) {
            console.log("something went wrong in user-repository.js");
            throw error;
        }
    }

    async findBy(data){
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log("something went wrong in user-repository.js");
            throw error;
        }
    }


}

export default UserRepository;

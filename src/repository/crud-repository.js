

class CrudRepository{
    constructor(model){
        this.model = model ;
    }

    async create(data){
        try {
            console.log(data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");    
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crudd repo");
            throw result;            
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
              console.log("Something went wrong in the crudd repo");
            throw result;  
        }
    }

    async getAll(){
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log('something went wrong in crud app');
            throw error;
        }
    }

    async update(id , data){
        try {
            const result = await this.model.findByIdAndUpdate(id , data , {new:true});
            return result;
        } catch (error) {
            console.log('something went wrong in crud app');
            throw error;
        }
    }
}
export default CrudRepository;
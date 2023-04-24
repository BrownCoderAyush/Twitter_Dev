import UserService from '../../src/service/user-service.js';
import UserRepository from '../../src/repository/user_repository.js';

// jest.mock('../../src/repository/user_repository.js');

describe('user service signup test', () => {
    test('should successfully create a user', async () => {
        const data = {
            email: 'a@b.com',
            password: '123456'
        };
        let spy = jest.spyOn(UserRepository,'create').mockReturnValue({...data, createdAt: '2022-12-12', updatedAt: '2022-12-12'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    });
})
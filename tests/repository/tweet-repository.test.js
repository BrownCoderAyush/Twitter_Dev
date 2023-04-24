import { TweetRepository } from "../../src/repository/index.js";
import Tweet from '../../src/models/tweet.js';

// mocks whole module 
jest.mock('../../src/models/tweet.js');


describe('Create tweet tests', () => {   
    test('should create a new tweet and return it' ,
     async()=>{
        const data = {
            content : 'Testing tweet'
        }
        const spy = jest.spyOn(Tweet,'create').mockImplementation(()=>{
            return data;
        })
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
        expect(tweet.content).toBe(data.content);
    })
    
    test('should not create a tweet and throw exception' , async()=>{
        const data = {
            content : 'Testing tweet'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(()=>{
            throw new Error('something went wrong');
        });
    
        const tweetRepository = new TweetRepository();
        await tweetRepository.create(data).catch(err=>{
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('something went wrong');
        })
    })
});

describe('Get all tweet tests', () => {
    test('testing limit for get all',async () => {
        const data = {
            content: 'Testing tweet'
        }
        const tweetsArray =  [{...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}, {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}, {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}];
        const findResponse = {tweetsArray};
        findResponse.skip = jest.fn((offset) => findResponse);
        findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0, limit));
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
            return findResponse;
        });
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0, 2);
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(2);
    })
})


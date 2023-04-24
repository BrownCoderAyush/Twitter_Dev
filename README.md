# Welcome to TweetTweet Backend Service 

# Project Setup 

- clone the project on your local.
- Execute `npm install` on the same path as of your root directory of the downloaded project. 
- Create a `.env` file in the root directory and add the following environment variable.

```
dbUrl=<MongoDB_URL>
# file-upload-S3-config
# bucket region
AWS_REGION=<BUCKET_REGION>
SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY_TO_BUCKET>
ACCESS_KEY=<ACCESS_KEY>
BUCKET_NAME=<NAME_OF_BUCKET_CREATED>
```


# API

## User Model 

- Schema example 

```
{
        email : "ayushchopra0@gmail.com",
        password : "$2b$09$R1yDKRslx/6J7pCfuAigFOYxzA49QvQY12OZv4F1aCqfPtAzKR5ca" , 
        name : "ayush"
}

```

---

**Desc**: SignUp User

**Route** : `/signup`

**Method**: `POST`

**Body** : 

```
{
    "email" : "acyou@gmail.com" , 
    "password" : 123456 , 
    "name" : "Bun"
}
  
```

**Response** : 

```
{
    "message": "Successfully create a user",
    "data": {
        "email": "acyou@gmail.com",
        "password": "$2b$09$DZj17d2hBCXEwt/AuRheUOvaYcPspwYVEEBqWugZUcD0m1051hCKC",
        "name": "Bun",
        "_id": "64463263bf239b697e8248a0",
        "createdAt": "2023-04-24T07:40:19.716Z",
        "updatedAt": "2023-04-24T07:40:19.716Z",
        "__v": 0
    },
    "success": true,
    "err": {}
}

```
---

**Desc**: login User

**Route** : `/login`

**Method**: `POST`

**Body** : 

```
{
    "email" : "acyou@gmail.com" , 
    "password" : 123456 , 
}
  
```

**Response** : 

```
{
    "success": true,
    "message": "Successfully loggedIn",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDYzMjYzYmYyMzliNjk3ZTgyNDhhMCIsImVtYWlsIjoiYWN5b3VAZ21haWwuY29tIiwiaWF0IjoxNjgyMzIyMTE3LCJleHAiOjE2ODIzMjU3MTd9.Fk_NdloU_0IOE4E0R971LWSOHXwrqYmd2j5N_Jm8c00",
    "err": {}
}
```
---

**Desc**: create tweet

**Route** : `/tweets`

**Method**: `POST`

**Body** : 

```
{
    "image" : e.jpg , 
    "content" : "my tweet #tweet #fun "   , 
}
  
```

**Response** : 

```
{
    "success": true,
    "message": "Successfully created",
    "data": {
        "content": "my tweet #tweet #fun ",
        "likes": [],
        "comments": [],
        "image": "https://twitteruploadayush.s3.amazonaws.com/1682322358143",
        "_id": "644633b8bf239b697e8248a4",
        "createdAt": "2023-04-24T07:46:00.272Z",
        "updatedAt": "2023-04-24T07:46:00.272Z",
        "__v": 0
    },
    "err": {}
}


```
---

**Desc**: create comment

**Route** : `/comment/create`

**Method**: `POST`

**Params** : 

```
{
    "modelId" : "6400fa768ada8e7e5868145a" , 
    "modelType" : "Tweet" 
} 
  
```
**Body** : 

```
{
    "content" : "comment on " , 
}
```

**Response** : 

```
{
    "success": true,
    "data": {
        "content": "comment on ",
        "onModel": "Tweet",
        "commentable": "6400fa768ada8e7e5868145a",
        "user": "64463263bf239b697e8248a0",
        "comments": [],
        "_id": "64464f9cbf239b697e8248b4",
        "createdAt": "2023-04-24T09:45:00.463Z",
        "updatedAt": "2023-04-24T09:45:00.463Z",
        "__v": 0
    },
    "err": {},
    "message": "Successfully created a new comment"
}

```

---

**Desc**: Get tweet

**Route** : `/tweet/tweetId`

**Method**: `GET`

**Response** : 

```
{
    "success": true,
    "message": "Successfully fetched",
    "data": {
        "_id": "6400fa768ada8e7e5868145a",
        "content": "lovely day #G8 #nostalgiC",
        "likes": [
            "6401c6ab1ee8367bbc71306c"
        ],
        "createdAt": "2023-03-02T19:35:18.255Z",
        "updatedAt": "2023-04-24T09:45:00.472Z",
        "__v": 25,
        "comments": [
            {
                "_id": "64463957bf239b697e8248ac",
                "content": "comment on ",
                "onModel": "Tweet",
                "commentable": "6400fa768ada8e7e5868145a",
                "user": "64463263bf239b697e8248a0",
                "comments": [],
                "createdAt": "2023-04-24T08:09:59.604Z",
                "updatedAt": "2023-04-24T08:09:59.604Z",
                "__v": 0
            }
        ]
    },
    "err": {}
}


```
---


**Desc**: toggle Like

**Route** : `/like/toggle`

**Method**: `POST`

**Params** : 
```
{
    "modelId" : "640199e9bed95d8124b44ef1" , 
    "modelType" : "Tweet"
}
```

**Body** : 

```
{
    "user" : "6400eec1ded4a0081d2273cc" 
}
  
```

**Response** : 

```
{
    "success": true,
    "message": "Successfully created",
    "data": {
        "content": "my tweet #tweet #fun ",
        "likes": [],
        "comments": [],
        "image": "https://twitteruploadayush.s3.amazonaws.com/1682322358143",
        "_id": "644633b8bf239b697e8248a4",
        "createdAt": "2023-04-24T07:46:00.272Z",
        "updatedAt": "2023-04-24T07:46:00.272Z",
        "__v": 0
    },
    "err": {}
}


```

### S3 Image Upload 
`https://dev.to/paras594/upload-images-to-aws-s3-using-multer-in-nodejs-1164`
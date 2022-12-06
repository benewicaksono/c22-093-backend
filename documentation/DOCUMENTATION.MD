# C22-093 Backend API DOCUMENTATION

C22-093 Backend API by. C22-093 Backend with ExpressJS & Typescript. This repository is integrated with Vercel deployment on main branch.

## Material
<hr>

### `GET` - Get All Materials
```
https://c22-093-backend.vercel.app/api/material
```

#### Example Response
```
{
    "_id": "6387696f446d558c87fe99a1",
    "key": "sd1s1c2",
    "name": "Bahasa Inggris 1 - Kelas 1 - Chapter 2 Greetings",
    "driveUrl": "https://drive.google.com/file/d/1wlUz1PJSzPCWULKz5hPFbFCKI6f5VdTe/view?usp=share_link",
    "__v": 0
},
```
<br>

### `GET` - Get Material By Key
```
https://c22-093-backend.vercel.app/api/material/${key}
```
<br>

### `POST` - Create Material
```
https://c22-093-backend.vercel.app/api/material
```

#### Example Body JSON
``` 
...
{
    "key": "sd1s2c1",
    "name": "Bahasa Inggris 1 - Kelas-1 - Animals.pdf",
    "driveUrl": "https://drive.google.com/file/d/17paWCPzirz3Efj5Ch6MDWNrX1ze1GmPA/view?usp=share_link"
}
...
```
<br>

### `PATCH` - Update Material by Key
```
https://c22-093-backend.vercel.app/api/material/${key}
```

#### Example Body JSON
``` 
...
{
    "key": "sd1s2c1",
    "name": "Bahasa Inggris 1 - Kelas-1 - Animals.pdf",
    "driveUrl": "https://drive.google.com/file/d/17paWCPzirz3Efj5Ch6MDWNrX1ze1GmPA/view?usp=share_link"
}
...
```
<br>

### `DELETE` - Delete Material by Key
```
https://c22-093-backend.vercel.app/api/material/${key}
```

## User Data
<hr>

### `GET` - Get All Users
```
https://c22-093-backend.vercel.app/api/userData/users
```

#### Example Response
```
[
    {
        "_id": "638eae125e32b3ce7b84265b",
        "name": "Cap Cut",
        "isAdmin": false,
        "createdAt": "2022-12-06T02:50:58.303Z",
        "updatedAt": "2022-12-06T02:50:58.303Z",
        "__v": 0
    }
]
```
<br>

### `GET` - Get User By Email
```
https://c22-093-backend.vercel.app/api/userData/users/${email}
```
<br>

### `POST` - Create User
```
https://c22-093-backend.vercel.app/api/userData/users/
```

#### Example Body JSON
``` 
...
{
    "name": "Cap Cut",
    "email": "capcae@gmail.com",
    "password": "123123123"
}
...
```
<br>

### `POST` - Create Session
```
https://c22-093-backend.vercel.app/api/userData/session/
```

#### Example Body JSON
``` 
...
{
    "email": "capcae@gmail.com",
    "password": "123123123"
}
...
```

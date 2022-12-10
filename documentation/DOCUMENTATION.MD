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
...
{
    "_id": "6392d21c218689b27bc47a23",
    "key": "sd2s1c1",
    "name": "Bahasa Inggris 2 - Kelas 2 - Feeling",
    "driveUrl": "https://drive.google.com/file/d/1Lyr18Q-w4GQua69xc4JQwvs8RSem_VU4/preview",
    "__v": 0,
    "desc": "Feelings are signals from the body that help us understand ourselves and make good decisions.",
    "imgUrl": "https://res.cloudinary.com/dujblysib/image/upload/v1670566577/sd2s1/sd2s1c1_emodeb.png"
},
...
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
    "key": "sd2s1c1",
    "name": "Bahasa Inggris 2 - Kelas 2 - Feeling",
    "desc": "Feelings are signals from the body that help us understand ourselves and make good decisions.",
    "driveUrl": "https://drive.google.com/file/d/1Lyr18Q-w4GQua69xc4JQwvs8RSem_VU4/preview",
    "imgUrl": "https://res.cloudinary.com/dujblysib/image/upload/v1670566577/sd2s1/sd2s1c1_emodeb.png"
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
    "key": "sd2s1c1",
    "name": "Bahasa Inggris 2 - Kelas 2 - Feeling",
    "desc": "Feelings are signals from the body that help us understand ourselves and make good decisions.",
    "driveUrl": "https://drive.google.com/file/d/1Lyr18Q-w4GQua69xc4JQwvs8RSem_VU4/preview",
    "imgUrl": "https://res.cloudinary.com/dujblysib/image/upload/v1670566577/sd2s1/sd2s1c1_emodeb.png"
}
...
```

<br>

### `DELETE` - Delete Material by Key

```
https://c22-093-backend.vercel.app/api/material/${key}
```

<br><br>

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
    "email": "test@gmail.com",
    "password": "12345678"
}
```

#### Example Response

```
{
    "_id": "638ec346261d80f9070bdb17",
    "name": "testing",
    "email": "test@gmail.com",
    "access_token": "1b7d71028f1c9e45d5aee63d1e14eb24d9b0d69d9f4fc4e16d67c8d8b302"
}
```

<br>

### `GET` - Get User By Access Token

```
https://c22-093-backend.vercel.app/api/userData/session/${access_token}
```

<br><br>

## Review

<hr>

### `POST` - Create Review

```
https://c22-093-backend.vercel.app/api/review/
```

#### Example Body JSON

```
...
{
    "name": "Lorem",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel pretium. Vitae congue mauris rhoncus aenean vel. Arcu non sodales neque sodales ut etiam sit amet. Amet purus gravida quis blandit turpis cursus in hac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa. Amet justo donec enim diam vulputate ut. Quisque id diam vel quam elementum pulvinar. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Hac habitasse platea dictumst vestibulum rhoncus est. Viverra nam libero justo laoreet sit. Egestas congue quisque egestas diam in arcu cursus euismod. Nulla facilisi cras fermentum odio eu feugiat. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Adipiscing commodo elit at imperdiet dui. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. A cras semper auctor neque vitae tempus quam pellentesque nec. Amet porttitor eget dolor morbi non arcu risus quis. Ut consequat semper viverra nam libero justo laoreet sit amet.",
    "stars": "6"
}
...
```

<br>

### `GET` - Get All Review

```
https://c22-093-backend.vercel.app/api/review/
```

#### Example Response

```
[
        {
            "_id": "63936d1947daf7a78f9b87eb",
            "name": "Lorem",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel pretium. Vitae congue mauris rhoncus aenean vel. Arcu non sodales neque sodales ut etiam sit amet. Amet purus gravida quis blandit turpis cursus in hac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa. Amet justo donec enim diam vulputate ut. Quisque id diam vel quam elementum pulvinar. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Hac habitasse platea dictumst vestibulum rhoncus est. Viverra nam libero justo laoreet sit. Egestas congue quisque egestas diam in arcu cursus euismod. Nulla facilisi cras fermentum odio eu feugiat. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Adipiscing commodo elit at imperdiet dui. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. A cras semper auctor neque vitae tempus quam pellentesque nec. Amet porttitor eget dolor morbi non arcu risus quis. Ut consequat semper viverra nam libero justo laoreet sit amet.",
            "stars": 6,
            "__v": 0
        }
    ]
```

<br>

### `GET` - Get Review by Id

```
https://c22-093-backend.vercel.app/api/userData/users/${id}
```

<br>

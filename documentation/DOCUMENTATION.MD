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
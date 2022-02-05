# octo-broccoli-ui
Currently, learning front end development so decided to build a simple user management ui and back end. That means this code is not secure 
code in any way shape or form, please do not use deploy this code as it stands. 

Built with:
nextJs12

## Requirements
NPM and a working back end either octo-broccoli Java or Express Firebase functions (Express version is tbd) will work, but you can plug your own in if you like.

https://github.com/Lmnoppy/octo-broccoli-java

//TODO: this is a work in progress and ive not worked on it in a long time sooooo, its dead...probably. 
https://github.com/Lmnoppy/octo-broccoli-express-firebase

## Guides

### Start locally 

### Rest calls

### #User Sign up
Method: POST
API: /api/signUp

Body:

Required
```json
{
  "email": "",
  "password": "",
  "confirmPassword": ""
}
```

Response:

```json
{
  "token": "",
  "user": {}
}
```

#### User login
Method: POST
API: /api/login

Body:

```json
{
  "email": "", 
  "password": ""
}
```

Response:

```json
{
  "token": "",
  "user": {}
}
```

### Helpful commands 

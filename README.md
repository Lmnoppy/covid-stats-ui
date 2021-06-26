# octo-broccoli-react-ui
Currently, learning front end development so decided to build a simple user management ui and back end. That means this code is not secure 
code in any way shape or form, please do not use deploy this code as it stands. 

Built with:
React
Bootstrap

## Requirements
NPM and a working back end either octo-broccoli Java or Express Firebase functions (Express version is tbd) will work, but you can plug your own in if you like.

https://github.com/Lmnoppy/octo-broccoli-java

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

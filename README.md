# Covid Stats UI
Currently, learning front end development so decided to build a simple user management ui and back end. That means this code is unlikly to be secure code in any way shape or form, please do not use deploy this code without a security review. 

Built with:
React
NextJs

## Requirements
NPM and a working back end either octo-broccoli Java or Express Firebase functions (Express version is tbd) will work, but you can plug your own in if you like.

I used the Java project below, but you could use the NextJS as a back end to your datasources. 
https://github.com/Lmnoppy/octo-broccoli-java

## Guides

### React router version 6
private routes: https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5 

### Start locally 

```bash
npm install
npm start
```

### Helpful commands 


```bash
npm install -g npm-check-updates
ncu -u
npm install

```

### Rest calls

#### User Sign up
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

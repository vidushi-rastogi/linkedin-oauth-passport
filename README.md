# Passport LinkedIn OAuth
A simple login application that uses LinkedIn API for user authentication which is don using `passport-linkedin-oauth2`.

## Prerequisites
For this project you need to create an app in https://developer.linkedin.com/, this will generate your Client ID and Client Secret.
> Note : Enter **Authorized redirect URLs for your app** as **http://127.0.0.1:3000/auth/linkedin/callback**

## Build Setup
##### Clone project
#
```
git clone https://github.com/vidushi-rastogi/linkedin-oauth-passport.git
```

##### Add .env file
Create a .env file and initialise *CLIENT_ID*, *CLIENT_SECRET* as your initials generated after creating LinkedIn App in https://developer.linkedin.com/

##### Install Dependencies and then run setup
#
cd into your project directory and then run following commands
```
npm install
npm start
```
This will start your app on `localhost:3000`

## Usage
Login with your LinkedIn profile, this will direct you to LinkedIn authentication page and then you will enter **/profile** route displaying your details
**In this app following user details is displayed after fetching user details from LinkedIn API**
- User Profile image on LinkedIn
- User name
- User LinkedIn ID
- User Email ID resgistered in their LinkedIn profile

![alt text](https://github.com/vidushi-rastogi/linkedin-oauth-passport/blob/master/screenshot/profilepage.jpeg?raw=true)
#
## Reference Links
- [LinkedIn Dev](https://developer.linkedin.com/) - Create registered LinkedIn app, to make API calls.
- [passport-linkedin-oauth2](http://www.passportjs.org/packages/passport-linkedin-oauth2/) - For more about usage of passport authentication.

## Licence
Copyright (c) 2021 Vidushi Rastogi








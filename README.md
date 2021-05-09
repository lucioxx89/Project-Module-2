# Project-Module-2

# Your project's name

...
​

## Description

​,,,,is a social networking app which purpose is to help people build social communities and pursuit their interests.Users, once logged in,can create events, classes and workshops as well as check and join other events.

Short description of your app's purpose.
​

## User stories (MVP)

​
**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

**Homepage** - As a user I want to be able to access the homepage so that I can check all the events available, check full detail of the event and then access my profile.

**Sign up** - As a user I want to sign up on the webpage so that I can create new events, join available events, delete and update events I have created.

**Log in** - As a user I want to be able to log in on the webpage so that I can access my profile.

**Log out** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

**Profile** - As a user I want to be able to see my profile, see the coming events I have joined as well as check/delete/update the events that I have created.

​​

## Backlog / Nice to have

​
_If you finished your MVP, what other functionalities would you like to add to your app? (User stories). Here's an example:_

**Add filter in Homepage** - Add a filter to the Homepage so the user can filter by category and choose dispplay the events base of his/her preferences.

**Map** - To check the exact location of the events and get direction to/from there.

**Add Payment Method** - So far events are free, create payment method to certain event which are not free.

**Theme** - As a user I want to be able to choose from a dark or light theme for my app

​

## Routes

| Name          | MTHD | Endpoint        | Description       | Body               | Render        | Redirect |
| ------------- | ---- | --------------- | ----------------- | ------------------ | ------------- | -------- |
| Home          | GET  | /               | See main page     |                    | home          |          |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Sign Up form  | GET  | auth/signup     | See signup form   |                    | signup-form   |          |
| ------------- | ---- | --------------  | ----------------  | ----------------   | ------------  | -------- |
| Signup        | POST | auth/signup     | Signup user       | req.body{...}      |               | /        |
| ------------- | ---- | -------------   | ----------------  | ----------------   | ------------  | -------- |
| Login form    | GET  | /auth/login     | See login form    | ------------------ | login-form    |          |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Login         | POST | /auth/login     | Login user        | req.body{mail,psw} |               | /events  |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Logout        | GET  | /auth/logout    | Logout user       | req.session.destro |               | /login   |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Profile       | GET  | /auth/profile   | User profile page |                    | profile-page  |          |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Event         | GET  | /events         | See all events    | (Event.find )      | events-list   |          |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Event-details | GET  | /events/:id/    | See event details | req.params{id}     | events-detail |          |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Event-create  | GET  | /events/create  | See create form   |                    | create-form   |          |
| ------------- | ---- | -------------   | ----------------  | ----------------   | ------------  | -------- |
| Event-create  | POST | /events/create  | Save event to DB  | req.body{...}      |               | /events  |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Event update  | GET  | /events/:id/edi | See update form   | req.params{id}     | update-form   |          |
| ------------- | ---- | -------------   | ----------------  | ----------------   | ------------  | -------- |
| Event update  | POST | /events/:id/edi | Save event to DB  | req.body & Id      |               | /events  |
| ------------- | ---- | -------------   | ----------------  | -----------------  | ------------  | -------- |
| Event delete  | POST | /events/:id/del | Delete event      | req.params{id}     |               | /events  |

## Models

​

Event model

```js
{
name: {
    type:String,
    required: true
 }
img: url,

location: {
    type:String,
    required: true
    }
//price: Number,

date: {
    type: Date,
    required: true
}

category: {
    type: String,
    enum: ["Sport", "Outdoors", "Learning", "Photography", "Tech", "Writing"]
}

```

User model
​

```js
{
firstName: {
    type:String,
    required: true,
    }
lastName: {
    type:String,
    required: true,
    }
    email: {
        type: String,
        unique: true,
    }
    hashedPassword: {
        type: String,
        required: [true, 'password is required'],
    }

}
```

​

<!-- ## Links

​

### Github kanban

​
[Link to my project]()
​

### Github repository

​
[Link Repo]()
​

### Project deploy

​
[Link Deploy]()
​

### Wireframes

​
[InVision with Wireframes]()
​

### Slides -->

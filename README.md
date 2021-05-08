# Project-Module-2
# Your project's name

​

## Description

​,,,,is a social networking app which purpose is to help people build social communities and pursuit their interests.Users, once logged in,can create events, classes and workshops as well as check and join other events.

Short description of your app's purpose.
​

## User stories (MVP)

​
**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
​
**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
​
**Homepage** - As a user I want to be able to access the homepage so that I can check all the events available, check full detail of the event and then access my profile.
​
**Sign up** - As a user I want to sign up on the webpage so that I can create new events, join available events, delete and update events I have created.
​
**Log in** - As a user I want to be able to log in on the webpage so that I can access my profile.
​
**Log out** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
​
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

​
| Name | Method | Endpoint | Description | Body | Redirects |
| --------------- | ------ | ----------------------------- | ------------------------------------------------ | ------------------------------------- | --------------- |

| Home | GET | / | See the main page | | |
​
| Log in form | GET | /login | See the form to log in | | |
​
| Log in | POST | /login | Log in the user | {mail, password} | / |
​
| Sign Up form | GET | /signup | See the form to sign up | | |
​
| Sign Up | POST | /signup | Sign up a user | {mail, password} | /login |
​

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
price: Number,

date: {
    type: date,
    required: true
}

```

User model
​

```js
{
    // firstName: String,
    // lastName: String,
    email: String,
    hashedPassword: String,
    // location: Array,
    // age: Number //is there a minimum age
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

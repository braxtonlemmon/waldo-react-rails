# Find Waldo and His Friends
Project based on The Odin Project [curriculum](https://www.theodinproject.com/lessons/where-s-waldo-a-photo-tagging-app). The user must search the image on the screen for five characters. Once all are found, the user can enter a name and submit their name to the list of top scores. The goal of the project was to build an application with Ruby on Rails as the backend. I chose to use React to build the frontend.

# Learning objectives
- Create an application with React (using create-react-app) as the frontend and Ruby on Rails as a backend api.
- Deploy an app to Heroku that has separate frontend/backend components.
- Use the fetch api to connect React to the database.
- Practice using PostgreSQL in a rails project.
- Implement ThemeProvider in React for the styled components.

# Obstacles
As it had been some time since I had worked with Rails, I initially spent a couple days refreshing my knowledge of Ruby and Rails. I then completed the frontend portion in React and the backend portion in Rails without too much trouble. I had to do a bit of reading to figure out how to use the fetch api in my JavaScript code to get the needed data from Rails.

The major roadblocks came when I attempted to deploy the application to Heroku. First, I had finished the Rails portion with the default SQLite database. This was the first issue I ran into when trying to deploy. I made the needed changes to change to a PostgreSQL database, but I still received errors when deploying. In my frustration I decided to setup and create a new Rails app with a PostgreSQL database from the start. The problem persisted and I eventually realized I had named one of my models and several of its attributes using PostgreSQL reserved keywords. 

I then spent a good amount of time using various resources in an attempt to finally deploy to Heroku. After reading and following a [Heroku blog post](https://blog.heroku.com/a-rock-solid-modern-web-stack) I was able to deploy my application.

# Live version
Checkout a live version [here](https://pumpkin-surprise-94026.herokuapp.com/)

# Authors
Braxton Lemmon
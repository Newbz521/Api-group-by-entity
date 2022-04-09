# Occupation Automation Probability API

## API

Rest API seeded with 2022's probability of occupations being replaced by automation. Occupations can be searched via ID or partial name search.

## Tools

- JavaScript
- MongoDB
- Express

## Installation

1. nvm install 16.14.2
2. nvm use 16.14.2
3. npm install
4. npm run db:seed
5. npm start

## Available Routes

### http://localhost:9000/

### Get

- /automations  
  (Response: entire json collection)

- /automations/occupation/all/show  
  (Response: all available occupations)
- /automations/occupation/:id  
  (Response: Search for profession with partial string)
  ex: http://localhost:9000/automations/occupation/accountant
- /automations/:id

### Post

- /automations
  (Adds new automation to db)

### Put

- /automations/:id
  (updates selected)

### Delete

- /automations/:id
  (deletes selected)

# Occupation Automation Probability API

## API
Rest API seeded with 2022's probability of occupations being replaced by automation. Occupations can be searched via ID or partial name search.

## Tools
* JavaScript
* MongoDB
* Express

## Installation
1) npm install
2) npm run db:seed
3) npm start

## Available Routes

### Get
* /automations                     
  (Response: entire json collection)


* /automations/occupation/all/show                
  (Response: all available occupations) 
  
  
* /automations/occupation/:id      
  (Response: Search for profession with partial string)
  
  
* /automations/:id

### Post
* /automations
  (Adds new automation to db)

### Put
* /automations/:id
  (updates selected)

### Delete
* /automations/:id
  (deletes selected)


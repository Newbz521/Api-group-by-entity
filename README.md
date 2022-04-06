# Occupation Automation Probability API

## API
Rest API seeded with 2022's probability of occupations being replaced by automation. Occupations can be searched via ID or partial name search.

## Tools
* JavaScript
* MongoDB
* Express

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


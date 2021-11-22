# Tasking API 

## Project description
This project solve the [tasking full stack challenge](https://drive.google.com/file/d/1clquVvZzv_A-tJ-Y7HuHcj_RZPgKx5PG/view?usp=sharing).

## Poject intro and definitions

The main problem I resolve using my own cache to save tasks to avoid requests to lorem faker api on every request. In adition, I add pagination to GET /tasks endpoint. 

Sequence Diagram

![tasking](https://user-images.githubusercontent.com/7562704/142901262-885d4653-cc98-42a8-89b5-c802b61e5a32.png)

### Technical debts
- Paginate request to lorem faker api. This API crash with quantity arround 200.000




## Run local
    
###clone repo (tasking-compose)[] on the same directory of tasking-api

run the following commands: 

`cd tasking-compose && docker-compose up`

*Note: you need to clone too (tasking-client)[]*

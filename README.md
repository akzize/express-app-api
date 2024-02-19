# Express express APi app

This a simple restApi app using express.js and mongodb

# TO run this project

1. clone it
2. run this command

`docker-compose up`

visit this link in your browser `localhost:4005`

and play with those apis in your favourite RestApi software testet:

```
GET: /etudiants => list all etudiants
GET: /etudiants/{id} => get etudiant with id
POST: /etudiants => add etudiant
PUT: /etudiants/{id} => update
DELETE: /etudiants/{id} => delete
```

The format of new etudiant should be like this:

```
{
  "name": "Zayd",
  "age": 25,
  "nationality": "Moroccan"
}
```

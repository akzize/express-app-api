# Express express APi app

This a simple restApi app using express.js and mongodb

## Docker :

### some problems i've faced:

~docker part is woking, but the thing here is that instead of accessing the app using `localhost:8080`, you should use the ip of the docker machine, which you can get by running the following command~:

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id>
```

#### Solved:

Now it's working the problem was in ENV variables, also the port used in dokcer-compose 
was diferent from the ones used in the app.

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


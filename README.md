```
GET: /etudiants
GET: /etudiants/{id}
POST: /etudiants
PUT: /etudiants/{id}
DELETE: /etudiants/{id}
```

# Docker :

~docker part is woking, but the thing here is that instead of accessing the app using `localhost:8080`, you should use the ip of the docker machine, which you can get by running the following command~:

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id>
```
Now it's working the problem is in ports
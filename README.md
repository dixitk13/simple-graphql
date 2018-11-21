# simple-graphql

- trying a simple graphql server for "purely academic purposes" :-)

- adding a react front-end for the same on localhost:3000

### starting the application
```
npm start
```

### query sample
Quering posts or single post

```
query{
  post(id: 1) {
    id
  }
}

```


```
query{
  posts {
    id
    author
  }
  post(id: 1) {
    id
  }
}

```
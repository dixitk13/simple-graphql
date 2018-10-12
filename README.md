# simple-graphql-server

trying a simple graphql server for "purely academic purposes" :-)

### starting the application
```
yarn start
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
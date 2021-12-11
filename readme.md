# GraphQL Server Example
https://www.apollographql.com/docs/apollo-server/getting-started/


## Client Queries
```
query MyQuery {
  books {
    title
    author
  }
  authors {
    name
    books {
      title
    }
  }
}

mutation CreateBook {
  addBook(title: "Fox in Socks", author: "Dr. Seuss") {
    title
    author
  }
}

```
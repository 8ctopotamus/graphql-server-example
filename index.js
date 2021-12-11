const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    title: String!,
    author: String
  }

  type Author {
    name: String!,
    books: [Book]
  }

  type Query {
    books: [Book],
    authors: [Author]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const authors = [
  {
    name: 'Kate Chopin',
    books: [ books[0] ]
  },
  {
    name: 'Paul Auster',
    books: [ books[1] ]
  }
]

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Mutation: {
    addBook: (parent, { author, title }) => {
      const newBook = { author, title }
      books.push(newBook)
      authors.push({ name: author, books: [newBook] })
      return newBook
    } 
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))




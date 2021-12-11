const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    title: String!,
    author: Author
  }

  type Author {
    name: String!,
    books: [Book!]!
  }

  type Query {
    books: [Book]
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

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))




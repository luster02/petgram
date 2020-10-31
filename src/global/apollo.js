import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://petgram-server-lb02.vercel.app/graphql',
    cache: new InMemoryCache()
});


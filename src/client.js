import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

import { useMutation } from '@apollo/client';




const client = new ApolloClient({
    uri: 'https://mvpbabu.hasura.app/v1/graphql',
    cache: new InMemoryCache({
        addTypename: false
    }),
    headers: {
        "X-Hasura-Admin-Secret": "MZ4QOZ2S5c1KCBCPp08bT5dvmmYe3ftZJVoLY5iMH0STVvwAr504hTdJe7hv2k5D"
    }
});

export const GET_CONTACTS=gql `
query MyQuery {
    xero_contacts {
      contact_id
      id
      name
    }
  }
  `

export const ADD_CONTACTS = gql`
    mutation insert_xero_contacts($object: xero_contacts_insert_input!) {
    insert_xero_contacts_one(
        object: $object
        ) {
            id
        }
    }`;


export default client;

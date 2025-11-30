import { ApolloServer } from "npm:@apollo/server@^4.9.5";
import { startStandaloneServer } from "npm:@apollo/server@^4.9.5/standalone";
import { addMocksToSchema } from "npm:@graphql-tools/mock@^9.0.0";
import { makeExecutableSchema } from "npm:@graphql-tools/schema@^10.0.0";

// Read the schema file
const typeDefs = await Deno.readTextFile("./graphql.gql");

// Create a schema from the type definitions
const schema = makeExecutableSchema({ typeDefs });

// Add mocks to the schema
// This will generate random data for all fields based on their types
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks: {
    Date: () => new Date().toISOString(),
    JSON: () => ({ key: "value", meta: "mock data" }),
    User: () => ({
      id: "user-123",
      did: "did:eco:123456789",
      username: "EcoGuardian",
      role: "GROWER",
      accessLevel: "AUTODIDACT_MASTER",
      reputationScore: [4.8, 5.0, 4.9],
      bio: "Guardian of the local seeds.",
      location: "Community Garden Sector 7",
      certifications: ["https://eco-cert.org/123"],
      createdAt: new Date().toISOString(),
    }),
    Product: () => ({
      name: "Heirloom Tomato Seeds",
      price: 0,
      description: "Seeds from the 2024 harvest, very resilient.",
      available: true,
    })
  },
});

// Initialize Apollo Server
const server = new ApolloServer({
  schema: schemaWithMocks,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);
console.log(`Query at ${url}`);

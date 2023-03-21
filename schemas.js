import {
  GlueClient,
  ListSchemasCommand,
  GetSchemaCommand,
} from "@aws-sdk/client-glue";

const registryName = "staging-clickstreams";

const clientConfig = {
  region: "us-east-2",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
    sessionToken:
      "",
  },
};

const client = new GlueClient(clientConfig);

const input = {
  RegistryId: {
    RegistryName: registryName,
  },
};
const command = new ListSchemasCommand(input);
const response = await client.send(command);

const schemaCommand = null;

response.Schemas.map(async (schema) => {
  const schemaParams = {
    SchemaId: {
      RegistryName: registryName,
      SchemaName: schema.SchemaName,
    },
  };
  schemaCommand = new GetSchemaCommand(schemaParams);
  const commandResponse = await client.send(command);
  console.log("commandResponse", commandResponse);
  return commandResponse;
});

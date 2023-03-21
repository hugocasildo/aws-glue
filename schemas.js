import { GlueClient, ListSchemasCommand } from '@aws-sdk/client-glue';

const registryName = 'staging-clickstreams';

const client = new GlueClient({ region: 'us-east-2' });
const input = {
  RegistryId: {
    RegistryName: registryName,
  },
};
const command = new ListSchemasCommand(input);
const response = await client.send(command);

console.log('ListSchemasCommand', response);
console.log('End ListSchemasCommand --------------');

const schemaCommand = null

response.Schemas.map( async (schema) => {
  const schemaParams = {
    SchemaId: {
      RegistryName: registryName,
      SchemaName: schema.SchemaName,
    },
  };
  schemaCommand = new GetSchemaCommand(schemaParams);
  const commandResponse = await client.send(command)
  console.log('commandResponse', commandResponse);
  return commandResponse;
})

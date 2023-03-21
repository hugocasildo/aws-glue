import { GlueClient, GetSchemaCommand } from "@aws-sdk/client-glue";

const client = new GlueClient({ region: "us-east-2" });
const params = {
  SchemaId: {
    RegistryName: "staging-clickstreams",
    SchemaName: "formOtpAccepted",
  },
};

const command = new GetSchemaCommand(params);

try {
  const data = await client.send(command)
  console.log('DATA', data)
  
} catch(e) {
  console.log('Error', e)
}


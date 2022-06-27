import { FastifyInstance } from "fastify";

export default async function (server: FastifyInstance) {
  server.get("/", async (request, reply) => {
    // add your code here
    return { hi: "my name is Norah " };
  });

  server.get("/Homework", async (request, reply)=> {
    // add your code here
    return { hi: "my name is Norah " };
  });
}

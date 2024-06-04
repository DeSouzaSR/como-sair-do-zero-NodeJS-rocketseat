//////////// Servidor usando Node nativo ////////////
// Apenas para entender. Depois usaremos um microframework

// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//   response.write("Hello World!!!");

//   return response.end();
// });

// server.listen(3333); // localhost:3333

//////////// Fastify //////////////
// Vamos refazer o que foi feito acima, porém
// usando Fastify

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

// rota para criar vídeo
server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title: title,
    description: description,
    duration: duration,
  });
  return reply.status(201).send();
});

server.get("/videos", () => {
  const videos = database.list();

  console.log(videos);

  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title: title,
    description: description,
    duration: duration,
  });
  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  database.delete(videoId);
  return reply.status(204).send(); 
});

server.listen({
  port: 3333,
});


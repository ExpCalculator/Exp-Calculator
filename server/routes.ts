import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Health check endpoint for uptime monitoring
  app.get('/health', (req, res) => {
    res.status(200).send('OK');
  });

  const httpServer = createServer(app);

  return httpServer;
}

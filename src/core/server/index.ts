import express, { Request, Response } from "express";

const server = express();
const router = express.Router();

export { server, router, Request, Response };

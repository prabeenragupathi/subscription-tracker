import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {res.send({message: 'Get all users'})});

userRouter.get('/:id', (req, res) => {res.send({message: 'Get user in specific id'})});
userRouter.post('/', (req, res) => {res.send({message: 'insert new user'})});
userRouter.put('/:id', (req, res) => {res.send({message: 'update user'})});
userRouter.delete('/:id', (req, res) => {res.send({message: 'delete a user'})});

export default userRouter
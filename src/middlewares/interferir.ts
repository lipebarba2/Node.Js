import { RequestHandler } from "express";

export const interferir:RequestHandler = (req, res, next) => {
    let logged = true 

    if (logged) {
        next()
    } else {
        res.status(403).json({error: "middleware não permitiu"})
    }
}
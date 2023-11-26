import {  redisuser ,Prisma } from "@prisma/client";
import prisma from "../../../../shared/prisma";
import { RedisClient } from "../../../../shared/redis";
import { EVENT_USER_CREATED } from "../../../events/constants";
import { Request, Response } from "express"

const createUser = async (req: Request, res: Response): Promise<any> => {
   console.log('user data >>>', req.body);
   const userData: any = req.body

    const result = await prisma.redisuser.create({
        data: userData
    });

    if(result){
        await RedisClient.publish(EVENT_USER_CREATED, JSON.stringify(result), )
    }

   res.send({msg: 'user successfully created and published to redis'})
}

export  {
    createUser,
}
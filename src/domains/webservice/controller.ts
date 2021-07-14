import { NextFunction, Request, Response } from 'express';

import service from './service';


async function listContinents(req: Request, res: Response, next: NextFunction) {
  try {
    await service.listContinents(false, (data) => {
      console.log({data})  
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}
async function listContinentsJSON(req: Request, res: Response, next: NextFunction) {
  try {
    await service.listContinents(true, (data) => {
      console.log({data})  
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}

async function listContrys(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await service.listContrys(false, (data) => {
      console.log({data})  
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}

async function listContrysJSON(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await service.listContrys(true, (data) => {
      console.log({data})  
      res.status(200).send(data);
    });
  } catch (err) {
    next(err);
  }
}


export default {
  listContinents,
  listContinentsJSON,
  listContrys,
  listContrysJSON,
};

/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:28:44 CDT
 */

import { Router, Request, Response, NextFunction } from "express";
import { Exception } from "@cubous/backend";

const router: Router = Router();

router.route("/errors/:code")
	.all(async (req: Request, res: Response, next: NextFunction) => next(Exception.notFound()));

export { router as routerErrors }

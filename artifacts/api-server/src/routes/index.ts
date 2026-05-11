import { Router, type IRouter } from "express";
import healthRouter from "./health";
import appointmentRouter from "./appointment";

const router: IRouter = Router();

router.use(healthRouter);
router.use(appointmentRouter);

export default router;

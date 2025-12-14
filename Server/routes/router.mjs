import { Router } from 'express';
import db from '../db.mjs';
import PoiController from '../controllers/poiController.mjs';

const poiRouter = Router();
const poiController = new PoiController(db);

poiRouter.get('/:region', poiController.getByRegion.bind(poiController));
poiRouter.post('/newpoi', poiController.addNewPoi.bind(poiController));
poiRouter.post(
  '/recommend/:id',
  poiController.recommendPoi.bind(poiController)
);
poiRouter.post('/:id/review', poiController.addReview.bind(poiController));

export default poiRouter;

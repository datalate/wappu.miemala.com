import { Router } from 'express';
import { BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND } from 'http-status-codes';
import { Op, ValidationError } from 'sequelize';
import { Track } from '../../../db/models/Track'; // TODO: alias?
import { logger, MAX_TIMESTAMP, MIN_TIMESTAMP } from '../../../shared'; // TODO: alias?

const router = Router();
const path = '/tracks';

router.get('/', async (req, res, next) => {
    try {
        let startDate = new Date(MIN_TIMESTAMP);
        let endDate = new Date(MAX_TIMESTAMP);
        if (typeof req.query.startDate !== 'undefined') {
            startDate = new Date(req.query.startDate.toString());
        }
        if (typeof req.query.endDate !== 'undefined') {
            endDate = new Date(req.query.endDate.toString());
        }
        const tracks = await Track.findAll({
            where: {
                playedAt: { [Op.between]: [startDate.toISOString(), endDate.toISOString()] },
            },
        });
        res.json(tracks);
    } catch (e: any) {
        logger.error(e.message, e);
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const track = await Track.findByPk(req.params.id);
        if (!track) {
            res.sendStatus(NOT_FOUND);
        } else {
            res.json(track);
        }
    } catch (e: any) {
        logger.error(e.message, e);
        next(e);
    }
});

// router.post('/', async (req, res, next) => {
//     try {
//         const track = await Track.create(req.body);
//         res.status(CREATED).json(track);
//     } catch (e) {
//         if (e instanceof ValidationError) {
//             res.status(BAD_REQUEST).json({error: e.message});
//         } else {
//             logger.error(e.message, e);
//             next(e);
//         }
//     }
// });
//
// router.put('/:id', async (req, res, next) => {
//     try {
//         const track = await Track.findByPk(req.params.id);
//         if (!track) {
//             res.sendStatus(NOT_FOUND);
//         } else {
//             await track.update(req.body);
//             res.sendStatus(NO_CONTENT);
//         }
//     } catch (e) {
//         if (e instanceof ValidationError) {
//             res.status(BAD_REQUEST).json({error: e.message});
//         } else {
//             logger.error(e.message, e);
//             next(e);
//         }
//     }
// });
//
// router.delete('/:id', async (req, res, next) => {
//     try {
//         const track = await Track.findByPk(req.params.id);
//         if (!track) {
//             res.sendStatus(NOT_FOUND);
//         } else {
//             await track.destroy();
//             res.sendStatus(NO_CONTENT);
//         }
//     } catch (e) {
//         logger.error(e.message, e);
//         next(e);
//     }
// });

export default { router, path };

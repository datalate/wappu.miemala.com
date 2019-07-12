import {Router} from 'express';
import {logger} from '@shared';
import {Track} from '../../../db/models/Track'; // TODO: alias
import {BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND} from 'http-status-codes';

const router = Router();
const path = '/tracks';

// TODO: query filter for startDate and endDate (compared to playedAt)

router.get('/', async (req, res, next) => {
    try {
        const tracks = await Track.findAll();
        res.json(tracks);
    } catch (e) {
        logger.error(e.message, e);
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const track = await Track.findOne({where: {id: req.params['id']}});
        // const track = await Track.findByPk(req.params['id']);
        if (!track) {
            return res.status(NOT_FOUND);
        }
        res.json(track);
    } catch (e) {
        logger.error(e.message, e);
        next(e);
    }
});

router.post('/', async (req, res) => {
    try {
        // TODO: check for model errors

        const track = await Track.create(req.body);
        res.status(CREATED).json(track);
    } catch (e) {
        logger.error(e.message, e);
        return res.status(BAD_REQUEST);
    }
});

router.put('/:id', async (req, res) => {
    try {
        // TODO: check for 404
        // TODO: check for model errors

        await Track.update<Track>(req.body, {where: {id: req.params['id']}});
        res.sendStatus(NO_CONTENT);
    } catch (e) {
        logger.error(e.message, e);
        return res.status(BAD_REQUEST);
    }
});

export default { router, path };
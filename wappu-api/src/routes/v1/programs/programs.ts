import { Router } from 'express';
import { BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND } from 'http-status-codes';
import { Op, ValidationError } from 'sequelize';
import { Program } from '../../../db/models/Program'; // TODO: alias?
import { logger, MAX_TIMESTAMP, MIN_TIMESTAMP } from '../../../shared'; // TODO: alias?

const router = Router();
const path = '/programs';

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
        logger.info(`${ startDate }, ${ endDate }`);
        const programs = await Program.findAll({
            where: {
                [Op.or]: [ // will not match if filter is only a subset of program start/end date
                    {
                        startAt: { [Op.between]: [startDate.toISOString(), endDate.toISOString()] },
                    },
                    {
                        endAt: { [Op.between]: [startDate.toISOString(), endDate.toISOString()] },
                    },
                ],
            },
        });
        res.json(programs);
    } catch (e: any) {
        logger.error(e.message, e);
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const program = await Program.findByPk(req.params.id);
        if (!program) {
            res.sendStatus(NOT_FOUND);
        } else {
            res.json(program);
        }
    } catch (e: any) {
        logger.error(e.message, e);
        next(e);
    }
});

// router.post('/', async (req, res, next) => {
//     try {
//         const program = await Program.create(req.body);
//         res.status(CREATED).json(program);
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
//         const program = await Program.findByPk(req.params.id);
//         if (!program) {
//             res.sendStatus(NOT_FOUND);
//         } else {
//             await program.update(req.body);
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
//         const program = await Program.findByPk(req.params.id);
//         if (!program) {
//             res.sendStatus(NOT_FOUND);
//         } else {
//             await program.destroy();
//             res.sendStatus(NO_CONTENT);
//         }
//     } catch (e) {
//         logger.error(e.message, e);
//         next(e);
//     }
// });

export default { router, path };

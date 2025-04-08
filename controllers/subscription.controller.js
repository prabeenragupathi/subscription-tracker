import Subscription from "../models/subscription.model.js"

export const createSubscription = async (req, res, next) => {
    try {
        const subscripion = await Subscription.create({
            ...req.body,
            user: req.user._id
        });

        res.status(201).json({
            success: true,
            data: subscripion
        })
    } catch (error) {
        next(error)
    }
}
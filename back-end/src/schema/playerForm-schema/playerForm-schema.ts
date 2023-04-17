import Joi from "joi";

export const PlayerFormSchema: Joi.ObjectSchema<PlayerUpdateForm> = Joi.object({
  playerId: Joi.number().required(),
  playerFormId: Joi.number().required(),
  newForm: Joi.array().required()
})

export type PlayerUpdateForm = {
  playerId: number,
  playerFormId: number,
  newForm: object
}

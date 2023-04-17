import Joi from "joi";

export const NewPlayerSchema: Joi.ObjectSchema<NewPlayer> = Joi.object({
  playerUserId: Joi.number().required(),
  tableId: Joi.number().required(),
})

export type NewPlayer = {
  playerUserId: number,
  tableId: number
}

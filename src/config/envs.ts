import 'dotenv/config';
import * as joi from 'joi';

interface EnvsVars {
  PORT: number;
  HOST: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    HOST: joi.string().required()
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envsVars: EnvsVars = value;

export const envs = {
  port: envsVars.PORT,
  host: envsVars.HOST
};

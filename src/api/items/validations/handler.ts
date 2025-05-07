import { Request, ResponseToolkit } from "@hapi/hapi";

export const validationErrorHandler = (
  request: Request,
  h: ResponseToolkit,
  err: any
) => {
  const errors = err.details.map((detail: any) => ({
    field: detail.context?.key,
    message: detail.message,
  }));

  return h.response({ errors }).code(400).takeover();
};

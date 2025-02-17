import { API, ROOT_API_URL } from 'constant/api.constant';
import { getResponseWithData, successResponseWithEmptyData } from 'mocks/mockUtils';
import { rest } from 'msw';
import { mockSkills } from './skill.mock';

const etcHandler = [
  rest.post(ROOT_API_URL + API.UPLOAD.POST, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(successResponseWithEmptyData));
  }),
  rest.get(ROOT_API_URL + API.UPLOAD.DELETE, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(successResponseWithEmptyData));
  }),
  rest.get(ROOT_API_URL + API.TECH_STACK.ALL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1500), ctx.json(getResponseWithData(mockSkills)));
  }),
  rest.get(ROOT_API_URL + API.TECH_STACK.CATEGORY, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(successResponseWithEmptyData));
  }),
];

export default etcHandler;

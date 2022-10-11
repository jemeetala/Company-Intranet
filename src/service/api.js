import { apis } from "service";

const COMMON_URL = `https://yntyoznxkwaqylsvafhv.supabase.co/rest/v1/`;

const API_URLS = { GET_TAGSSELECTNAME: `${COMMON_URL}tags` };

export const getTagsselectname = (payload) =>
  apis.get(API_URLS.GET_TAGSSELECTNAME, {
    ...payload,
    params: { select: "name", ...payload?.params },
  });

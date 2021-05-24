import { createClient } from "contentful";
import data from "./config/config";

export default createClient({
  space: data.space,
  accessToken: data.token,
});

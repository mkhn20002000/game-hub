import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c005b9541b8348368ab8198f8889bd9c",
  },
});

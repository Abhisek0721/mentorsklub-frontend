import { getAuthorizationString } from "../../../utils/getAuthorizationString";
import axios from "axios";
import constant from "../../../constants";

class SessionApi {
  static async getSessionsOfMentor(page = 1) {
    console.log(page, "from redx");

    const response = await axios.get(
      `${constant.SERVER_URL}/api/mentor/session/get-all-sessions?pageNumber=${page}`,
      {
        headers: {
          Authorization: getAuthorizationString(),
        },
      }
    );
    return response.data;
  }

  static async createSession(body) {
    const response = await axios.post(
      `${constant.SERVER_URL}/api/mentor/session/create-zoom-meet`,
      body,
      {
        headers: {
          Authorization: getAuthorizationString(),
        },
      }
    );
    return response.data;
  }
}

export default SessionApi;

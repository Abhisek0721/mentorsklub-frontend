import { getAuthorizationString } from "../../../utils/getAuthorizationString";
import axios from "axios";
import constant from "../../../constants";

class SessionApi {
  static async getSessionsOfMentor() {
    const response = await axios.get(
      `${constant.SERVER_URL}/api/mentor/session/get-all-sessions`,
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

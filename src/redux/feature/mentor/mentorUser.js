import { getAuthorizationString } from "../../../utils/getAuthorizationString";
import axios from "axios";
import constant from "../../../constants";

class MentorUserApi {
  static async checkZoomAuthStatus() {
    const response = await axios.get(
      `${constant.SERVER_URL}/api/mentor/user/getZoomAuthStatus`,
      {
        headers: {
          Authorization: getAuthorizationString(),
        },
      }
    );
    return response.data;
  }

  static async getZoomAuthUri() {
    const response = await axios.get(
      `${constant.SERVER_URL}/api/zoom/oauth/authorize`,
      {
        headers: {
          Authorization: getAuthorizationString(),
        },
      }
    );
    return response.data;
  }
}

export default MentorUserApi;

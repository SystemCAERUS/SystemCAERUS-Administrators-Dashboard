import axios from "axios";

export const fetchNotifications = async () => {
  try {
    const res = await axios.get("http://localhost:8800/hr");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
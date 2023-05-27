import axios from "axios";
export async function getMyInfo(newData) {
  const data = await axios.post(`http://localhost:9000/profile/myInfo`, newData, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${window.sessionStorage.getItem("ACCESS_TOKEN")}`,
    },
  });
  return data;
}

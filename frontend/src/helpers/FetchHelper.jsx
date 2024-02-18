export const getFetch = async (url, cb, token) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization-Type": "Bearer " + token,
    },
  });
  const data = await res.json();
  console.log("fetch",url,data);
  cb(data);
};

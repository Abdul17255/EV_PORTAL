import axios from "axios";

export async function postLambda(url, payload) {
  let headers = {
    "Content-Type": "application/json",
  };
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || "" === url) {
        reject("URL not present.");
      } else {
        if (payload && payload.data && payload.data.headers) {
          Object.keys(payload.data.headers).forEach((key) => {
            headers[key] = payload.data.headers[key];
          });
        }
        var options = {
          method: "POST",
        };

        if (payload && payload.data) {
          options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload.data),
          };
        }
        let body = payload.data;
        axios
          .post(url, body)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => reject(error));
      }
    } catch (error) {
      // _validateError(error, resolve, reject);
    }
  });
}

export async function postMultipart(url, payload) {
  // let userId = User.getUserId();
  var today = new Date()
    // date1 =
    //   today.getFullYear() +
    //   "0" +
    //   (today.getMonth() + 1) +
    //   "0" +
    //   today.getDate() +
    //   "0" +
    //   today.getHours() +
    //   "0" +
    //  userId;
  const headers = {
    "Content-Type": "application/json",
   // Server: date1,
   // User: userId,
  };
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || "" === url) {
        reject("URL not present.");
      } else {
        if (payload && payload.data && payload.data.headers) {
          Object.keys(payload.data.headers).forEach((key) => {
            headers[key] = payload.data.headers[key];
          });
        }
        var options = {
          method: "POST",
        };
        if (payload.data.body) {
          options = {
            method: "POST",
            body: payload.data.body,
          };
        }

        fetch(url, options)
          .then((res) => res.text())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => reject(error));
      }
    } catch (error) {
      // _validateError(error, resolve, reject);
    }
  });
}



import api from "zmp-sdk";
import config from "../config";

export const getAccessToken = () =>
  new Promise((resolve) => {
    api.login({
      success: () => {
        api.getAccessToken({
          success: (token) => {
            if (
              token === "DEFAULT ACCESS TOKEN" &&
              config.DEFAULT_ACCESS_TOKEN
            ) {
              // eslint-disable-next-line no-param-reassign
              token = config.DEFAULT_ACCESS_TOKEN; // For testing purpose only
            }
            resolve(token);
          },
          fail: (error) => {
            console.log('fsfdfsd');
            console.error(error);
          },
        });
      },
      fail: (error) => {
        console.log('fsfdfsd');
        console.error(error);
      },
    });
  });
export const getZaloProfile = () =>
  new Promise((resolve, reject) => {
    console.log("Starting getZaloProfile flow...");
    api.login({
      success: () => {
        console.log("api.login success");
        api.getUserInfo({
          success: (res) => {
            console.log("api.getUserInfo success:", res);
            const { userInfo } = res;
            // Nếu có tên thì resolve luôn
            if (userInfo && userInfo.name) {
              resolve(userInfo);
            } else {
              // Nếu không có tên, yêu cầu cấp quyền
              console.log("Name missing, requesting authorization...");
              api.authorize({
                scopes: ["scope.userInfo"],
                success: () => {
                  console.log("api.authorize success, retrying getUserInfo...");
                  api.getUserInfo({
                    success: (res2) => {
                      console.log("api.getUserInfo retry success:", res2);
                      resolve(res2.userInfo);
                    },
                    fail: (err) => {
                      console.error("api.getUserInfo retry fail:", err);
                      reject(err);
                    },
                  });
                },
                fail: (err) => {
                  console.error("api.authorize fail:", err);
                  reject(err);
                },
              });
            }
          },
          fail: (error) => {
            console.error("api.getUserInfo fail:", error);
            reject(error);
          },
        });
      },
      fail: (error) => {
        console.error("api.login fail:", error);
        reject(error);
      },
    });
  });

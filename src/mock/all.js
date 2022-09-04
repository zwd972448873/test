import Mock from "mockjs";

const baseUrl = "/dev-api";
Mock.mock(baseUrl + "/getList", "get", function () {
  const data = require("./data/list.json");
  return {
    data,
    msg: "ok",
    code: 200,
  };
});

Mock.mock(RegExp(baseUrl + "/getDetail" + ".*"), "get", function (info) {
  let url = info.url;
  let query = getParams(url);
  let data;
  if (query.code == "202202001-0001") {
    data = require("./data/list_202202001-0001.json");
  } else {
    data = require("./data/list_202108001-0025.json");
  }
  return {
    data,
    msg: "ok",
    code: 200,
  };
});

function getParams(url) {
  const array = url.split("?").pop().split("&");
  const data = {};
  array.forEach((ele) => {
    let dataArr = ele.split("=");
    data[dataArr[0]] = dataArr[1];
  });
  return data;
}

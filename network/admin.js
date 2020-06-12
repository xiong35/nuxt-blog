import { request } from "./request";

export function postArticle(data, type = "blog") {
  // blog, trap, tags
  return request({
    url: `/articles/${type}`,
    data,
    method: 'post',
    headers: {
      "Content-Type": "application/json;"
    }
  });
}

export function login(password, token = '') {
  let data = { password }
  if (token) {
    data.token = token
  }

  return request({
    url: "foo",
    data,
    method: 'post',
    headers: {
      "Content-Type": "application/json;"
    }
  });
}
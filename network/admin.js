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

export function putArticle(data) {
  return request({
    url: `/articles/put`,
    data,
    method: 'put',
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
    url: "articles/blog",
    data,
    method: 'post',
    headers: {
      "Content-Type": "application/json;"
    }
  });
}


export function postCan(data) {
  return request({
    url: "can",
    method: 'post',
    data
  })
}

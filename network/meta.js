import { request } from "./request";

export function getMeta() {
  return request({
    url: "meta"
  });
}

export function commitKill() {
  return request({
    url: "meta/duck",
  })
}

export function getCan() {
  return request({
    url: "can",
  })
}

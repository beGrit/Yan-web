import request from "../util/request";

export function pageQuery(pi, ps) {
    return request({
        url: "/university/page",
        method: "get",
        params: {
            pageIndex: pi,
            pageSize: ps
        }
    });
}

export function saveOne(form) {
    return request({
        url: "/university/one",
        method: "post",
        data: form
    });
}

export function del(delReq) {
    return request({
        url: "/university/idList",
        method: "delete",
        data: delReq
    });
}

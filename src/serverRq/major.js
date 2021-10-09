import request from "../util/request";

export function pageQuery(pi, ps) {
    return request({
        url: "/major/page",
        method: "get",
        params: {
            pageIndex: pi,
            pageSize: ps
        }
    });
}

export function saveOne(form) {
    return request({
        url: "/major/one",
        method: "post",
        data: form
    });
}

export function del(delReq) {
    return request({
        url: "/major/idList",
        method: "delete",
        data: delReq
    });
}

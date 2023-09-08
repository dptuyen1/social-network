const { default: Api, endpoints } = require('~/configs/Api');

export const loadPosts = async () => {
    let res = await Api.get(endpoints['posts']);
    return res.data;
};

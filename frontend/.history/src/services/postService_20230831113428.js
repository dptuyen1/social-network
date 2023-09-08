const { default: Api, endpoints } = require('~/configs/Api');

const loadPosts = async () => {
    let res = await Api.get(endpoints['posts']);
    return res.data;
};

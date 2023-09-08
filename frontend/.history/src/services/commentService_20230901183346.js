const { default: Api, endpoints } = require('~/configs/Api');

export const loadComments = async (id) => {
    try {
        let res = await Api.get(endpoints['comments'](id));
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

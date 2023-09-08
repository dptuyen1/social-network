const { default: Api, endpoints } = require('~/configs/Api');

export const loadComments = async () => {
    try {
        let res = await Api.get(endpoints['comments']);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

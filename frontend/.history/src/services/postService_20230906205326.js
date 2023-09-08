const { default: Api, endpoints } = require('~/configs/Api');

export const load = async () => {
    try {
        let res = await Api.get(endpoints['posts']);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const loadByUser = async (id) => {
    try {
        let res = await Api.get(endpoints['posts-of-user'](id));
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

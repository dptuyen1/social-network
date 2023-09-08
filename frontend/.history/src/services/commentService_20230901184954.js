const { default: Api, endpoints } = require('~/configs/Api');

export const load = async (id) => {
    try {
        let res = await Api.get(endpoints['comments'](id));
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

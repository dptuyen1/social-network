const { default: Api, endpoints } = require('~/configs/Api');

export const list = async () => {
    try {
        let res = await Api.get(endpoints['posts']);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

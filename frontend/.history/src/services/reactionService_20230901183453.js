const { default: Api, endpoints } = require('~/configs/Api');

export const load = async () => {
    try {
        let res = await Api.get(endpoints['reactions']);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

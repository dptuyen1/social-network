const { default: Api, endpoints } = require('~/configs/Api');

export const loadReactions = async () => {
    try {
        let res = await Api.get(endpoints['reactions']);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

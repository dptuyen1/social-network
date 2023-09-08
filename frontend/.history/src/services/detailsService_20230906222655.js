import Api, { endpoints } from '~/configs/Api';

export const load = async (userId, postId) => {
    try {
        let res = await Api.get(endpoints['details'](1, 62));

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

import Api, { authApi, endpoints } from '~/configs/Api';

export const load = async (userId, postId) => {
    try {
        let res = await Api.get(endpoints['details'](userId, postId));

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

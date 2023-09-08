import { authApi, endpoints } from '~/configs/Api';

export const load = async (userId, postId) => {
    try {
        let res = await authApi().get(endpoints['details'](userId, postId));

        return res;
    } catch (err) {
        console.log(err);
    }
};

import { authApi, endpoints } from '~/configs/Api';

export const load = async (userId, postId) => {
    try {
        let res = await authApi().get(endpoints['details'](userId, postId), {
            withCredentials: true,
        });

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

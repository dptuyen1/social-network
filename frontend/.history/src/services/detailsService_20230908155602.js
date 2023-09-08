import { authApi, endpoints } from '~/configs/Api';

// export const load = async (userId, postId) => {
//     try {
//         let res = await authApi().get(endpoints['details'](userId, postId));

//         return res.data;
//     } catch (err) {
//         console.log(err);
//     }
// };
export const load = async (postId) => {
    try {
        let res = await authApi().get(endpoints['details'](postId));

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

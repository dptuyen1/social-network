import { authApi, endpoints } from "~/configs/Api";

export const load = asyn (userId, postId) => {
    try {
        let res = await authApi().get(endpoints["details"](userId, postId))

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

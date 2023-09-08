export const load = async (id) => {
    try {
        let res = await authApi().get(endpoints['comments'](id));
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default defineNuxtRouteMiddleware((to, from) => {
    const { query } = to;

    if (query.abtest === 'test') {
        const abtest = useCookie('abtest');

        abtest.value = Math.random() < 0.5 ? 'var1' : 'var2';
    }
});
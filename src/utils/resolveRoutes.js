const resolveRoutes = (route) => {
    if (route === '/') {
        let validRoute = '/';
        return validRoute;
    }
    if (route.length <= 3) {
        let validRoute = '/:id';
        return validRoute;
    } else {
        let validRoute = '/pages';
        return validRoute;
    }
    // if (route.length <= 3) {
    //     let validRoute = route === '/' ? route : '/:id';
    //     return validRoute;
    // }
    // return `/${route}`;
}

export default resolveRoutes;
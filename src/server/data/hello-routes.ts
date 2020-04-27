// example of how to send back custom routes.
export const helloRoutes = (server) => {
    server.use('/hello', (req, res, next) => {
        console.log('inside hello route');
        res.send('hello world');
    });
};
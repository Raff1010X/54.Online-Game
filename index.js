// + Uncaught exception handler
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

//** Start server
const app = require('./app');
const port = 8085;
const mode = app.get('env').toUpperCase();
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${mode} mode`);
});

//** Unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
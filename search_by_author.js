const axios = require('axios').default;


async function searchByAuthor(author) {
    try {
        console.log("Starting");
        const req = await axios.get(`${localhost}author/${author}`);

        let books = req.data;

        console.log(books);

    } catch (error) {
        console.log(error);
    }
}


searchByAuthor("Hans Christian Andersen");

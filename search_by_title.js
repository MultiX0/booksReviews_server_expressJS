const axios = require('axios').default;

async function searchByTitle(title) {
    try {
        console.log("Starting");
        const req = await axios.get(`${localhost}title/${title}`);

        let books = req.data;

        console.log(books);

    } catch (error) {
        console.log(error);
    }
}


searchByTitle("The Book Of Job");
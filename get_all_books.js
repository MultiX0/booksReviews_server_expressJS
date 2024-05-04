const axios = require('axios').default;

const localhost = "http://localhost:8080/";

async function getAllBooks() {
    try {
        console.log("Starting");
        const req = await axios.get(localhost);
        console.log(req.data);

    } catch (error) {
        console.log(error);
    }
}




getAllBooks();

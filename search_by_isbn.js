const axios = require('axios').default;


async function searchByISBN(isbn) {
    try {
        console.log("Starting");
        const req = await axios.get(localhost);

        let books = req.data;

        if (isbn) {
            let filtered_book = books[isbn];
            console.log(filtered_book);
        } else {
            console.log("please enter the isbn");
        }

    } catch (error) {
        console.log(error);
    }
}


searchByISBN(2);

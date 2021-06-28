import axios from "axios";

export default {
    searchBooks: function(book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book);
    },

    getBook: function() {
        return axios.get("/api/books");
    },

    

    saveBook: function(data) {
        return axios.post("/api/books", data);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}
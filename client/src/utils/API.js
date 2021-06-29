import axios from "axios";

export default {
    getBook: function(book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book);
    },

    searchBook: function() {
        return axios.get("/api/books");
    },

    

    saveBook: function(data) {
        return axios.post("/api/books", data);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}
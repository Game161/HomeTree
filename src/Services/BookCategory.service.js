import http from "../http-common";

const getBooksCategory = () => {
  return http.get("/bookcategory");
}

const BookCategoryService = {
    getBooksCategory
}

export default BookCategoryService;

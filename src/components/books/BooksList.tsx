import styled from "styled-components";
import BooksItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
  id: 1,
  title: "Dummy book",
  img: 5,
  category_id: 1,
  summary: "Dummy Summary",
  author: "Dummy Author",
  price: 10000,
  likes: 1,
  form: "paparBack",
  isbn: "Dummy ISBN",
  detail: "Dummy Detail",
  pages: 100,
  contents: "Dummy, contents",
  pubDate: "2024-07-20",
};

function BooksList() {
  return (
    <BooksListStyle>
      <BooksItem book={dummyBook} />
    </BooksListStyle>
  );
}

const BooksListStyle = styled.div``;

export default BooksList;

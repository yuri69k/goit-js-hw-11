import axios from 'axios';

const KEY = `31376516-e3ddce4fc42a7fa5d1a63c141`;

export class RequestApi {
  #page = 1;
  #searchQuery = ``;
  #totalPages = 0;
  #perPage = 40;
  #url = `https://pixabay.com/api/`;

  async getPhoto() {
    const data = await axios({
      url: `${this.#url}?key=${KEY}&q=${
        this.#searchQuery
      }&image_type=photo&orientation=horizontal&safesearch=true&per_page=${
        this.#perPage
      }&page=${this.#page}`,
    });
    const dataPhoto = await data.data;
    return dataPhoto;
  }

  get searchQuery() {
    return this.#searchQuery;
  }

  set searchQuery(newSearchQuery) {
    return (this.#searchQuery = newSearchQuery);
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  calculateTotalPages(total) {
    this.#totalPages = Math.ceil(total / this.#perPage);
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
}

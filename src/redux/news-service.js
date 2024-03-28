import axios from 'axios';

export default class NewsApiService {
  searchQuery = '';
  page = 1;
  PER_PAGE = 40;
  constructor() {}
  async fetchItems() {
    const axiosOptions = {
      method: 'get',
      url: 'http://localhost:3000/api/items',
      params: {
        // key: '35072085-a0b1b3afc3e4ed85b172a35ba',
        // q: `${this.searchQuery}`,
        // image_type: 'photo',
        // orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: `${this.PER_PAGE}`,
      },
    };
    try {
      const response = await axios(axiosOptions);

      this.incrementPage();
      return response.data;
    } catch {
      console.log('Помилка!');
    }
  }
  async postItem(title, price, poster, kind, availability, specifications) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('poster', poster);
    formData.append('kind', kind);
    formData.append('availability', availability);
    formData.append('specifications', specifications);

    const axiosOptions = {
      method: 'post',
      url: 'http://localhost:3000/api/items',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios(axiosOptions);
      return response.data;
    } catch (error) {
      console.log("Помилка при додаванні об'єкта:", error);
      throw error;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  resetEndOfHits() {
    this.endOfHits = false;
  }
  hasMoreImages() {
    return this.page === Math.ceil(this.totalPages / this.per_page);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export async function fetchGallery() {
  const gatAll = new NewsApiService();
  const result = await gatAll.fetchItems();
  console.log(result);
  return result;
}

export class authorService {

    static BASE_URL = 'http://localhost:8080/CSA_CW/rest';

    static async getAllAuthors() {
    const response = await fetch(`${this.BASE_URL}/authors`);
    if (!response.ok) throw new Error('Failed to fetch authors');
    return response.json();
  }

    static async createAuthor(authorData) {
    const response = await fetch(`${this.BASE_URL}/authors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authorData),
    });
    if (!response.ok) throw new Error('Failed to create author');
    return response.json();
  }

  static async updateAuthor(id, authorData) {
    const response = await fetch(`${this.BASE_URL}/authors/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authorData),
    });
    if (!response.ok) throw new Error('Failed to update author');
    return response.json();
  }

  static async deleteAuthor(id) {
    const response = await fetch(`${this.BASE_URL}/authors/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete author');
  }
}









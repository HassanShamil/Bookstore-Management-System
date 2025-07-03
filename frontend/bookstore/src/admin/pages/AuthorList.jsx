import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/admin/components/ui/card';
import { Button } from '@/admin/components/ui/button';
import { Input } from '@/admin/components/ui/input';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import AuthorFormModal from '../components/AuthorFormModal';
import { authorService } from '../../services/authorService';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authorService.getAllAuthors()
      .then(setAuthors)
      .catch((err) => {
        console.error(err);
        setError('Failed to load authors.');
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredAuthors = authors.filter(author =>
    author?.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddAuthor = async (authorData) => {
  try {
    const created = await authorService.addAuthor(authorData);
    setAuthors((prev) => [...prev, created]);
    setIsModalOpen(false);
  } catch (err) {
    console.error('Add failed:', err);
    alert('Failed to add author.');
  }
};

  const handleEditAuthor = async (authorData) => {
  try {
    const updated = await authorService.updateAuthor(editingAuthor.id, authorData);
    setAuthors((prev) =>
      prev.map((author) =>
        author.id === editingAuthor.id ? updated : author
      )
    );
    setEditingAuthor(null);
    setIsModalOpen(false);
  } catch (err) {
    console.error('Update failed:', err);
    alert('Failed to update author.');
  }
};


  const handleDeleteAuthor = async (authorId) => {
  try {
    await authorService.deleteAuthor(authorId);
    setAuthors((prev) => prev.filter((author) => author.id !== authorId));
  } catch (err) {
    console.error('Delete failed:', err);
    alert('Failed to delete author.');
  }
};


  const openEditModal = (author) => {
    setEditingAuthor(author);
    setIsModalOpen(true);
  };




  if (loading) return <p>Loading authors...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-6 pt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Authors Management</h1>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Author
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search authors by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAuthors.map((author) => (
          <Card key={author.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={author.photo}
                  alt={author.fullName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{author.fullName}</h3>
                  <p className="text-sm text-gray-600 mb-2">{author.bookCount} books</p>
                  <p className="text-sm text-gray-700 line-clamp-3">{author.biography}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" size="sm" onClick={() => openEditModal(author)}>
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteAuthor(author.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AuthorFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAuthor(null);
        }}
        onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor}
        author={editingAuthor}
      />
    </div>
  );
};

export default AuthorList;

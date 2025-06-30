import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/admin/components/ui/dialog';
import { Button } from '@/admin/components/ui/button';
import { Input } from '@/admin/components/ui/input';
import { Label } from '@/admin/components/ui/label';
import { Textarea } from '@/admin/components/ui/textarea';

const AuthorFormModal = ({ isOpen, onClose, onSubmit, author }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    biography: ''
  });

  useEffect(() => {
    if (author) {
      setFormData({
        firstName: author.firstName || '',
        lastName: author.lastName || '',
        biography: author.biography || ''
      });
    } else {
      setFormData({ firstName: '', lastName: '', biography: '' });
    }
  }, [author, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md"
        aria-describedby="author-form-description"
      >
        <p id="author-form-description" className="sr-only">
          Dialog for adding or editing an author.
        </p>
        <DialogHeader>
          <DialogTitle>
            {author ? 'Edit Author' : 'Add New Author'}
          </DialogTitle>
          <DialogDescription>
            {author
              ? 'Update the author information below.'
              : 'Fill out the form to add a new author.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value
                  }))
                }
                required
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value
                  }))
                }
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="biography">Biography</Label>
            <Textarea
              id="biography"
              value={formData.biography}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  biography: e.target.value
                }))
              }
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {author ? 'Update Author' : 'Add Author'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthorFormModal;

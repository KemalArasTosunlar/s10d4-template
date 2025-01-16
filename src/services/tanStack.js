import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'your_api_endpoint_here'; // Replace with your actual API endpoint

// Query to fetch all contacts
export const useContacts = () => {
  return useQuery({
    queryKey: 'contacts',
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/contacts`);
      return response.data;
    },
  });
};

// Query to fetch a contact by ID
export const useContact = (contactId) => {
  return useQuery({
    queryKey: ['contact', contactId],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/contacts/${contactId}`);
      return response.data;
    },
  });
};

// Mutation to delete a contact
export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (contactId) => {
      await axios.delete(`${API_URL}/contacts/${contactId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('contacts');
      },
    }
  );
};

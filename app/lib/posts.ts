'use client';

import apiRoutes from './apiRoutes';
import { Posts } from './types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getCategories = async () => {
  const res = await axios.get(apiRoutes.getCategories);
  return res.data;
};

export const useAllPosts = (
  limit?: number,
  offset?: number,
  category?: string,
  posts?: Posts
) => {
  const getAllPosts = async () => {
    const res = await axios.get(apiRoutes.allPosts, {
      params: {
        limit: limit,
        offset: offset,
        category: category,
      },
    });
    return res.data;
  };

  const {
    data: allPosts,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<Posts>({
    queryKey: ['allPosts', limit, offset, category],
    queryFn: getAllPosts,
    initialData: posts,
  });

  return { allPosts, isLoading, isFetching, refetch };
};

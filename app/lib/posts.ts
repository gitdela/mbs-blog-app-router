'use client';

import apiRoutes from './apiRoutes';
import { Posts } from './types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const getCategories = async () => {
  const res = await axios.get(apiRoutes.getCategories);
  return res.data;
};

export const useAllPosts = (
  limit?: number,
  offset?: number,
  category?: string
) => {
  const getAllPosts = async () => {
    const res = await axios.get(apiRoutes.allPosts, {
      params: {
        limit: limit,
        offset: offset,
        category: category,
      },
    });
    return (await res).data;
  };

  const {
    data: allPosts,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<Posts>({
    queryKey: ['allPosts', limit, offset, category],
    queryFn: getAllPosts,
  });

  return { allPosts, isLoading, isFetching, refetch };
};

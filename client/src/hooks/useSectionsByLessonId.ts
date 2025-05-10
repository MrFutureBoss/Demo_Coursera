import useSWR from 'swr';
import api from '@/utilities/api';
import { Section } from '@/store/interface/materials';

const fetcher = async (lessonId: string | number) => {
  if (!lessonId) return [];
  const params = { id: lessonId };
  const { data } = await api.get(`/lessons/${lessonId}/materials`, { params });
  return data.data as Section[];
};

export function useSectionsByLessonId(lessonId: string | number) {
  const { data, error, isLoading, mutate } = useSWR(
    lessonId ? ['sections', lessonId] : null,
    () => fetcher(lessonId)
  );

  return {
    sections: data,
    isLoading,
    error,
    mutate,
  };
}

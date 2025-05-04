import { useDispatch as useReduxDispatch } from 'react-redux';
import store from '@/store/index.js';

// Export AppDispatch type from the store
export type AppDispatch = typeof store.dispatch;

// Typed version of useDispatch for thunks
export const useDispatch: () => AppDispatch = useReduxDispatch;

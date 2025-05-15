import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { getUserFromToken } from '@/store/reducers/authenReducer';
import { RootState } from '@/store/rootReducer';
import { AppDispatch } from '@/store/index';

export function useRoleGuard() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const authen = useSelector((state: RootState) => state.authen?.authen);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!authen) {
      dispatch(getUserFromToken()).finally(() => setIsChecking(false));
    } else {
      setIsChecking(false);
    }
  }, [dispatch, authen]);

  useEffect(() => {
    if (isChecking) return;
    if (!authen) {
      router.replace('/login');
      return;
    }
    if (authen.role === "member" && pathname === '/dashboard') {
      router.replace('/error');
      return;
    }
    if (authen.role === "admin") {
      return;
    }
    if (authen.role === "member") {
      return;
    }  
    // router.replace('/error');
  }, [authen, pathname, router, isChecking]);

  return isChecking;
}


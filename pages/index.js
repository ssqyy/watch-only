import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // 在页面加载时进行 302 跳转
    router.push('https://www.google.com', undefined, { shallow: true });
  }, []);

  return null;
};

export default HomePage;

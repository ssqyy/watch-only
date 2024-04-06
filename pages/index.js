import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // 在页面加载时进行 302 跳转
    //router.push('https://model.tgsou.com/', undefined, { shallow: true });
    router.push('https://chaturbate.com/in/?tour=grq0&campaign=RwEA7&track=default', undefined, { shallow: true });
  }, []);

  return null;
};

export default HomePage;

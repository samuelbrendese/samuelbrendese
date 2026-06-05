import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when route changes
    const savedScrollPosition = sessionStorage.getItem(`scrollPos_${location.pathname}`);
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Save scroll position before page reload or navigation
    const handleSaveScroll = () => {
      sessionStorage.setItem(`scrollPos_${location.pathname}`, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleSaveScroll);
    
    // Also save on route change
    return () => {
      handleSaveScroll();
      window.removeEventListener('beforeunload', handleSaveScroll);
    };
  }, [location.pathname]);

  return null;
}

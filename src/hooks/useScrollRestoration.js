import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when component mounts
    const savedScrollPosition = sessionStorage.getItem(`scrollPos_${location.pathname}`);
    if (savedScrollPosition) {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }, 0);
    } else {
      // Scroll to top if no saved position
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Save scroll position before page unload
    const handleSaveScroll = () => {
      sessionStorage.setItem(`scrollPos_${location.pathname}`, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleSaveScroll);
    return () => {
      window.removeEventListener('beforeunload', handleSaveScroll);
    };
  }, [location.pathname]);
}

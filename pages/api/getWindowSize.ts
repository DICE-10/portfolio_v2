import { useState, useEffect ,useCallback} from 'react';
const useWindowDimensions = () => {
    const isClient = typeof window === 'object';
    const getWindowDimensions = useCallback(() => {
      return {
        width: isClient ? window?.innerWidth : 0,
        height: isClient ? window?.innerHeight : 0,
          distance: isClient && window?.innerWidth != 0 ? getDistance(window?.innerWidth) : 0
      };
    }, [isClient]);
    const getDistance = (width:number) => {
        if (width >= 960) {
            return 210;
          }
          else if (width >= 480) {
            return 160;
          }
          else {
            return 110;
          }
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      const onResize = () => {
        setWindowDimensions(getWindowDimensions());
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [getWindowDimensions]);
    return windowDimensions;
};
export default useWindowDimensions
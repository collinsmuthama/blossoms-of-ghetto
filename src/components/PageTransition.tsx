import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitioning(true);
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitioning(false);
        window.scrollTo(0, 0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [children, location.pathname]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const PageSkeleton = () => (
  <div className="pt-32 min-h-screen animate-pulse">
    {/* Hero skeleton */}
    <div className="py-20 md:py-28 bg-muted">
      <div className="container flex flex-col items-center gap-4">
        <Skeleton className="h-10 w-72 md:w-96 rounded-lg" />
        <Skeleton className="h-5 w-48 rounded-lg" />
      </div>
    </div>
    {/* Content skeleton */}
    <div className="py-16 container max-w-5xl space-y-8">
      <div className="flex flex-col items-center gap-3 mb-12">
        <Skeleton className="h-8 w-64 rounded-lg" />
        <Skeleton className="h-4 w-80 rounded-lg" />
        <Skeleton className="h-1 w-20 rounded-full mt-4" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitioning(true);
      setShowSkeleton(true);
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitioning(false);
        setTimeout(() => setShowSkeleton(false), 100);
        window.scrollTo(0, 0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [children, location.pathname]);

  return (
    <>
      {showSkeleton && transitioning && (
        <div className="absolute inset-0 z-10 pt-0">
          <PageSkeleton />
        </div>
      )}
      <div
        className={`transition-all duration-300 ease-in-out ${
          transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        {displayChildren}
      </div>
    </>
  );
};

export default PageTransition;

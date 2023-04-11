"use client";

interface ContainerProps {
  children: React.ReactNode;
}

// This container element is usually for the all the element which will get render in the component

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-[2520px] px-0 sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  );
};
export default Container;

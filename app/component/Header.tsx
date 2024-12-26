import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-23 ml-[300px]"> 
      {/* Adjust ml-[300px] based on your sidebar width */}
      <h1 className="text-4xl font-bold italic text-black">
        <AnimatedGradientText>My Brand</AnimatedGradientText>
      </h1>
    </header>
  );
};

export default Header;

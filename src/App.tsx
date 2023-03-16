import Button from "@/components/Button/Button";

const App = () => {
  const handleButtonClick = () => {
    console.log("Clicked.");
  };

  return (
    <div className='w-full flex justify-center items-center space-y-2 flex-col'>
      <h1 className='text-3xl'>ts-react-kit</h1>
      <Button text='Click Me!' onClick={handleButtonClick} />
    </div>
  );
};

export default App;

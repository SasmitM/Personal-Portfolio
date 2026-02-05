export default function TestButton() {
  const handleClick = () => {
    alert("Button clicked!");
    console.log("Test button was clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
    >
      Click Me!
    </button>
  );
}


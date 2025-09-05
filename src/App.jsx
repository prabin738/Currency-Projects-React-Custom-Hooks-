import Input from "./components/Input";
import "./index.css";

const App = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      {/* <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form>
          <div className="bg-white w-full mb-1"></div>
        </form>
      </div>

      <h1 className="text-3xl bg-orange-500 py-3 px-5">Currency Converter</h1> */}
      <Input />
    </div>
  );
};

export default App;

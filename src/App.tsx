import Converter from "./Converter.tsx"
import Currency from "./Currency.tsx";
import Footer from "./Footer.tsx";

function App() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 md:px-6">
      <div className="max-w-2xl w-full">
        <Converter/>
        <Currency/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;

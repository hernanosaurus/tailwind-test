import './App.css';
import Button from './components/Button/Button.component';
import Cards from './components/Card/Card.component';

function App() {
  return (
    <>
      <div className="flex item justify-between w-full p-4">
        <div className="text-black">Logo</div>
        <ul className="flex items-center gap-12">
          <li className="text-black">Pricing</li>
          <li className="text-black">Company</li>
          <li className="text-black">Blog</li>
          <li className="text-black">Login</li>
        </ul>
      </div>
      <div className="p-4">
        <div className="mb-8">
          <Cards className="flex flex-col rounded-2xl">
            <div className="container-lg flex flex-col items-start mb-12">
              <h1 className="text-8xl text-black mb-4">Close every deal.</h1>
              <p className="text-xl text-left text-black max-w-96">
                Radiant helps you sell more by revealing sensitive information
                about your customers.
              </p>
            </div>
          </Cards>

          <div className="flex gap-4">
            <Button label="Get Started" />
            <Button variant="outlined" color="primary" label="Pricing" />
          </div>

          <ul className="flex justify-around gap-4">
            <li className="text-black">SavvyCal</li>
            <li className="text-black">SavvyCal</li>
            <li className="text-black">SavvyCal</li>
            <li className="text-black">SavvyCal</li>
          </ul>

          <h2 className="text-8xl text-black mb-4">
            A snapshot of your entire sales pipeline.
          </h2>

          <div className="border border-gray-300 rounded-xl p-4 text-black">
            Image Here!
          </div>

          <span>SALES</span>
          <h2 className="text-8xl text-black mb-4">
            Know more about your customers than they do.
          </h2>

          <div className="flex gap-4">
            <Cards>HERE</Cards>
            <Cards>HERE</Cards>
          </div>

          <div className="flex gap-4">
            <Cards>HERE</Cards>
            <Cards>HERE</Cards>
            <Cards>HERE</Cards>
          </div>

          <h2 className="text-8xl text-black mb-4">
            A snapshot of your entire sales pipeline.
          </h2>

          <Cards className="flex flex-col rounded-2xl bg-black">
            <div className="container-lg flex flex-col items-start mb-12">
              <h2 className="text-8xl text-white mb-4">
                Customer outreach has never been easier.
              </h2>
            </div>

            <div className="flex gap-4">
              <Cards className="flex-2">HERE</Cards>
              <Cards className="flex-1">HERE</Cards>
            </div>

            <div className="flex gap-4">
              <Cards className="flex-1">HERE</Cards>
              <Cards className="flex-2">HERE</Cards>
            </div>
          </Cards>

          <span className="text-black">What everyone is saying</span>
          <h2 className="text-8xl text-black mb-4">
            Trusted by professionals.
          </h2>

          <div className="flex gap-4">
            <Cards>HERE</Cards>
            <Cards>HERE</Cards>
            <Cards>HERE</Cards>
          </div>
        </div>
      </div>
      <div className="w-full">FOOTER</div>
    </>
  );
}

export default App;

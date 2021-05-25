
import './App.css';

function App() {
  return (
    <>
    <main>
    <div className="wrapper">
    <div className="sec1">
      <h1>Learn to code by watching others</h1>
      <p>See how experienced developersd solve problewms in real-time watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
    </div>
    <div className="sec2">
      <button className="purple"><span>Try it free 7 days</span> then 20/mo. thereafter</button>
    <form>
    <input type="text" name="fname" placeholder="First Name"/>
    <input type="text" name="Lname" placeholder="Last Name"/>
    <input type="email" name="email" placeholder="Email Address"/>
    <input type="password" name="password" placeholder="First Name"/>
    <button className="green">Claim your free trial</button>
    <h6>By clicking the button, you are agreeing to our <span>Terms and Services</span></h6>
    </form>
    </div>
    
    </div>
    
    
    </main>

    </>
  );

}

export default App;

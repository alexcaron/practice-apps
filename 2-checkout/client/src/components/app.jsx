import React, { useState } from "react";
import Checkout from "./checkout.jsx";

const App = () => {

  const [started, setStarted] = useState(false);

  return (
    <div>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      {!started ?
      <button onClick= { () => setStarted(true) }>Checkout</button> :
      <Checkout setStarted={ setStarted }/>}
    </div>
  )
}

export default App;
import './App.css'
import { useRef, useState } from 'react'
import Success from "./assets/images/icon-success.svg";

function App() {
  const Input = useRef(null);
  const NewsLetterImage = useRef(null);
  const Main = useRef(null);
  const Content = useRef(null);
  const endContent = useRef(null);


  const [Email, setEmail] = useState('');
  const emailRegex = /^(?!\s)[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function Submit() {
    const email = Input.current.value;
    if (emailRegex.test(email)) {
      Input.current.classList.remove('invalid');
      setEmail(email)
      Finish()
    } else {
      Input.current.classList.add('invalid');
    }
  }

  function Finish() {
    Content.current.classList.add('end');
    Main.current.classList.add('hidden');
    NewsLetterImage.current.classList.add('hidden');
    setTimeout(() => {
      endContent.current.classList.remove('Fade');
    }, 400);
  }


  function ValidateEmail() {
    const email = Input.current.value;
    if (emailRegex.test(email)) {
      Input.current.classList.remove('invalid');
    } else {
      Input.current.classList.add('invalid');
    }
  }

  const FormContent =(<div ref={Content} className='content'>
    <main ref={Main} className='mainContent'>
      <h1 className='title'>Stay Updated!</h1>
      <p className='description'>Join 60.000+ product managers receiving monthly updates on;</p>
      <ul className='list'>
        <li className='listItem'>Product discovery and building what matters</li>
        <li className='listItem'>Measuring to ensure updates are a success</li>
        <li className='listItem'>And much more!</li>
      </ul>
      <label className='emailLabel' htmlFor="emailInput">Email Adress</label>
      <input
        onChange={ValidateEmail}
        ref={Input}
        placeholder='email@example.com' 
        className='emailInput' 
        type="text" 
        name="emailInput" 
      />
      <button 
        className='button' 
        onClick={Submit} 
      >Subscribe to monthly newsletter</button> 
    </main>
    <div ref={NewsLetterImage} className='newsLetterImage'>
    </div>
  </div>)

  const End = (
    <div ref={Content} className='content end'>
      <main ref={endContent} className='endContent Fade'>
        <img className='image' src={Success} alt='Thank you!' />
        <h1 className='title'>Thanks for subscribing!</h1>
        <p className='description'>A confirmation email has been sent to <span className='emailSpan'>{Email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button className='button endButton'>Dismiss message</button>
      </main>
    </div>
  )

  return (
    <>
      {Email == '' ? FormContent : End} 
    </>
  )
}

export default App

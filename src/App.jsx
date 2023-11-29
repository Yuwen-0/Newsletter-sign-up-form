import './App.css'
import { useRef, useState } from 'react'
import Success from "./assets/images/icon-success.svg";
import FormContent from './FormContent';
import End from './End';

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

  return (
    <>
      {Email == '' 
        ? <FormContent Input={Input} ValidateEmail={ValidateEmail} Submit={Submit} Content={Content} Main={Main} NewsLetterImage={NewsLetterImage} /> 
        : <End Content={Content} endContent={endContent} Email={Email} Success={Success} />
      } 
    </>
  )
}

export default App

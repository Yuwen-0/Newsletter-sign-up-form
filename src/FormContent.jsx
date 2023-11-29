const FormContent = ({ Input, ValidateEmail, Submit, Content, Main, NewsLetterImage }) => {
  return (
    <div ref={Content} className='content'>
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
    </div>
  );
};

export default FormContent;

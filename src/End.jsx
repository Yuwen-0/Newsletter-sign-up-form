const End = ({ Content, endContent, Email, Success }) => {
  return (
    <div ref={Content} className='content end'>
      <main ref={endContent} className='endContent Fade'>
        <img className='image' src={Success} alt='Thank you!' />
        <h1 className='title'>Thanks for subscribing!</h1>
        <p className='description'>A confirmation email has been sent to <span className='emailSpan'>{Email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button className='button endButton'>Dismiss message</button>
      </main>
    </div>
  );
};

export default End;

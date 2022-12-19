import { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.quotable.io/' 
});

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()

  const getQuotes = async () => {
    const response = await client.get('/random')
    setQuote(response.data.content)
    setAuthor(response.data.author)
  }
  
  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <>    
      <div className='quote-box' id='quote-box'>
        <div id='quote-text'>
          <h1 className='text'>{quote}</h1>
        </div>
        <div id='quote-author'>
          <h3 className='author'>{author}</h3>
        </div>
        <div className='buttons'>                        
            <SocialIcon network="twitter" url='https://twitter.com/intent/tweet' target='_blank'/> 
        <button id='#new-quote' className='new-quote' onClick={getQuotes}>Generate Quote</button>
        </div>           
      </div>
      <footer className='footer'>Created by Vagelis</footer>    
    </>
  )
}

export default App

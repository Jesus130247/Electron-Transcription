import React from 'react';

const OpenAIComponent: React.FC<{setSummarized: any, summarized: any, setResponse: any}> = ({setSummarized, summarized, setResponse}) => {

  const fetchOpenAIResponse = async () => {
    setSummarized(!summarized)
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Ensure your API key is stored in a .env file

      const result = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: "Say this is a test!" }],
          temperature: 0.7,
        }),
      });

      const data = await result.json();
      setResponse(data.choices[0].message.content); // Assuming the response is in this structure
      console.log("data received-------")
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      setResponse("An error occurred while fetching data.");
    }
  };

  return (
    <div>
      {summarized ? <button onClick={()=>setSummarized(!summarized)}>Close Summary</button>
      : 
      <>
      <button onClick={fetchOpenAIResponse}>Fetch Summary</button>
      </>
      }
    </div>
  );
};

export default OpenAIComponent;

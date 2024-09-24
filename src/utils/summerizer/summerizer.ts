// import OpenAI from "openai";
// dotenv.config();

const openaiKey = import.meta.env.VITE_OPENAI_API_KEY

// const openai = new OpenAI({
//     organization: "org-PqmBk3NSxA2oruuligJ5z05Y",
//     project: "proj_aVnRR4IE5UzEBsakZNu1Xkfa",
//     apiKey: `${openaiKey}`,
//     dangerouslyAllowBrowser: true
// });


export default async function SummeriseIt(transcript: String, setSummarized: any, setShowSummery: any) {
  try {
         const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`
    },
    body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: `summarize this message: ${transcript}` }],
        temperature: 0.7
    })
});

      const data = await response.json();
      setSummarized(data.choices[0].message.content);
      setShowSummery(true)
    //   console.log(response.headers.get('x-request-id'))
    //   console.log(response.headers.get('x-ratelimit-remaining-requests'))
      console.log("not an error log, response error")
  } catch (error) {
    
      console.error(error, "your shit didnt work again dude");
  }
}

// SummeriseIt();


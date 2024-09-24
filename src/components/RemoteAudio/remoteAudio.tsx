// import  { useEffect, useState } from 'react';
// import { createClient, LiveTranscriptionEvents } from '@deepgram/sdk';
// import fetch from 'cross-fetch';

// const RAudio = () => {
//   const [transcript, setTranscript] = useState('');
//   useEffect(() => {
//     const live = async () => {
//       const apiKey = import.meta.env.VITE_DG_API_KEY;
//       if (!apiKey) {
//         console.error('Deepgram API key is not defined');
//         return;
//       }

//       const deepgram = createClient(apiKey);

//       const connection = deepgram.listen.live({
//         model: 'nova-2',
//         language: 'en-US',
//         smart_format: true,
//       });

//       connection.on(LiveTranscriptionEvents.Open, () => {
//         console.log('Connection opened.');

//         connection.on(LiveTranscriptionEvents.Close, () => {
//           console.log('Connection closed.');
//         });

//         connection.on(LiveTranscriptionEvents.Transcript, (data) => {
//           setTranscript((prev) => prev + ' ' + data.channel.alternatives[0].transcript);
//           console.log(data.channel.alternatives[0].transcript);
//         });

//         connection.on(LiveTranscriptionEvents.Metadata, (data) => {
//           console.log(data);
//         });

//         connection.on(LiveTranscriptionEvents.Error, (err) => {
//           console.error(err);
//         });

//         const url = 'public/Eminem.mp3';
//         fetch(url)
//           .then((r) => r.body)
//           .then((body) => {
//             const reader = body.getReader();
//             const read = async () => {
//                 while (true) {
//                     const { done, value } = await reader.read();
//                     if (done) {
//                       console.log('Stream complete');
//                       // Change 2: Call connection.finish() to properly close the connection
//                       connection.requestClose();
//                       break;
//                     }
//                     connection.send(value);
//                 }
//               };
//               read();
//             });
//         });
//       };
  
//       live();

      
//     }, []);

//   return (
//     <div className="container">
//       <h2>Live Transcript</h2>
//       <p>{transcript}</p>
//     </div>
//   );
// };



// export default RAudio;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"winter","emailId":"pidugubunny534@gmail.com","phoneNo":"234893489","projects":[{"title":"winter","description":"winter","technologies":["React","C++"],"repoLink":"winter","_id":"6752ecbd15b0756c517c5940"},{"title":"winter","description":"winter","technologies":["React"],"repoLink":"winter","_id":"6752ecbd15b0756c517c5941"}],"resume":"","experiences":[{"companyName":"winter","role":"winter","description":"winter","technologiesUsed":[],"duration":"winter","_id":"6752ecbd15b0756c517c5942"}],"techStacks":[],"contactDetails":[],"codingProfiles":[],"certifications":[],"achievements":[{"title":"winter","description":"winter","_id":"6752ecbd15b0756c517c5943"}],"about":"winter","profilePhoto":"","_id":"6752ecbd15b0756c517c593f","createdAt":"2024-12-06T12:23:25.295Z","updatedAt":"2024-12-06T12:23:25.295Z","__v":0}} />
  </StrictMode>,
)

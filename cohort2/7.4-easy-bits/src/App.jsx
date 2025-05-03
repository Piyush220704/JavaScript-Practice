
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, networkAtom, notificationAtom, messagingAtom, totalNotificationSelector } from './atoms'

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobNotificationCount = useRecoilValue(jobsAtom)
  const messageNotificationCount = useRecoilValue(messagingAtom)
  const NotificationCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <div>

        <button>Home</button>

        <button>My Network ({networkNotificationCount>100? "99+": networkNotificationCount})</button>
        <button>Jobs ({jobNotificationCount})</button>
        <button>Messaging ({messageNotificationCount>50? "49+": messageNotificationCount})</button>
        <button>Notification ({NotificationCount})</button>

        <button>Me ({totalNotificationCount})</button>
        {/* <ButtonUpdator /> -> check bellow -> concept -> useSetRecoilState*/}

      </div>
    </>
  ) 
}


export default App






































// function ButtonUpdator(){
//   const setNotificatonState = useSetRecoilState(notificationAtom);
//   return(
//     <button onClick={()=>setNotificatonState(c=>c+1)}>Click me</button>
//   )
// }
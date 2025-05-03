import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 69
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})


//works same as useMemo if we want to get totalNotificationCount in every render
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get :({get})=>{
        const networkNotificationCount = get(networkAtom)
        const jobNotificationCount = get(jobsAtom)
        const messagingNotificationCount = get(messagingAtom)
        const notificationCount = get(notificationAtom)
        return networkNotificationCount + jobNotificationCount + messagingNotificationCount + notificationCount;
    } 
})
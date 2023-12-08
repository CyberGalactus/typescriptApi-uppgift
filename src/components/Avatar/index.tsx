import { useContext, useEffect } from "react";
import { BuddyContext } from "../../utils/contexts";
import { BuddyContextType } from "../../utils/types";

const Avatar = () => {
    const { buddy, setBuddy } = useContext(BuddyContext) as BuddyContextType;
    
    const getLocalData = () => {
        const localData:string | null = localStorage.getItem("buddy")
        if (localData) {
            const localBuddy:string = JSON.parse(localData);
            setBuddy(localBuddy)
        }
    }

    useEffect(() => {
        getLocalData();
    },[])
    return <img src={buddy} alt="avatar" />
}

export default Avatar;
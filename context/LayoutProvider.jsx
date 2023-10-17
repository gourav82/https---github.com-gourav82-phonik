import React, { useState, useEffect } from "react";

export const MyAppContext = React.createContext();

const LayoutProvider = props => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 1024)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return <MyAppContext.Provider value={isMobile}>
        {props.children}
    </MyAppContext.Provider>
};
export default LayoutProvider;
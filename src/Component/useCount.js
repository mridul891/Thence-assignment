import { useEffect, useState } from "react"

const useCount = () => {
    const [secondsleft, setSecondsleft] = useState(0);

    useEffect(() => {
        if (secondsleft <= 0) return;
        const timeout = setTimeout(() => {
            setSecondsleft(secondsleft - 1);
        }, 1000);

        return () => clearTimeout(timeout)
    }, [secondsleft])

    function start(seconds) {
        setSecondsleft(seconds)
    }

    return { secondsleft, start }
}

export default useCount
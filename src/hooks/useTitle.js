import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dr.AB Siddique`;
    }, [title])
}
export default useTitle;
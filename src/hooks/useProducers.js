import { useState, useEffect } from "react"
import { loadProducers } from "../services/loadData"

export default function useProducers() {
    
    const [title, setTitle] = useState('')
    const [list, setList] = useState([]) 
    
    useEffect(() => {

        const producersData = loadProducers()

        if(producersData) {
            const { title, list } = producersData
            setTitle(title)
            setList(list)
        }

    }, [])

    return [title, list, setList];
}

import { useEffect, useRef } from "react"

//The normal useEffect is being called every time you change the page
//This useEffect do it only ones per app load

export const useEffectUpdate = (callBack, dependencies) => {

    const isFirstRender = useRef(true)
    const usecallback = async () => { await callBack() }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            usecallback()
        }
    }, dependencies)
}
import { useEffect, useState } from "react";
import { LS_FAVOURITES } from "../constants";

export function useFavouritesList (){
  const storageState = localStorage.getItem(LS_FAVOURITES) ?? String([]);
  const [favourites, setFavourites] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(storageState);
    } catch (error) {
      currentValue = [];
    }
    return currentValue;
  });

    function addToFavourites(movieId){
        const set = new Set(JSON.parse(storageState));
        if(set.has(movieId)){
            set.delete(movieId);
        } else {
            set.add(movieId);
        }
        const arr = Array.from(set);
        localStorage.setItem(LS_FAVOURITES, JSON.stringify(arr));
        window.dispatchEvent( new Event("storage"));
        setFavourites(arr);
    }

    useEffect(()=>{
        if(!localStorage.getItem(LS_FAVOURITES)){
            localStorage.setItem(LS_FAVOURITES, JSON.stringify([]));
        }
        window.addEventListener("storage",()=>{
            setFavourites(JSON.parse(localStorage.getItem(LS_FAVOURITES) || String([])))
        })
    },[])

  return {
    addToFavourites,
    favourites
  }
}
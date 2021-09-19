import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export function usePlayer() {
    const value = useContext(PlayerContext);
    return value
};
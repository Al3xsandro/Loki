import {
    createContext,
    ReactNode,
    useState
 } from 'react';

interface PlayerContextData {
    handleWatch: () => void,
    closePlayer: () => void,
    showPlayer: boolean
};

type PlayerContextProviderProps = {
    children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({ children }: PlayerContextProviderProps) {
    const [showPlayer, setShowPlayer] = useState(false);

    function handleWatch() {
        return setShowPlayer(true);
    };

    function closePlayer(){
        return setShowPlayer(false);
    };

    return (
        <PlayerContext.Provider value={{ handleWatch, showPlayer, closePlayer }}>
            { children }
        </PlayerContext.Provider>
    );
};
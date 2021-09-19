import { Container } from "./style";

import { usePlayer } from "../../hooks/usePlayer";

export function Player() {
    const { closePlayer } = usePlayer();

    return (
        <Container>
            <video src="https://cdn.discordapp.com/attachments/863279538481266716/882711275631689738/Loki_Marvel_Studios_Trailer_Oficial_Dublado_Disney_720P_HD.mp4" controls autoPlay/>
            <button className="close" onClick={closePlayer}>✖</button>
        </Container>
    );
};
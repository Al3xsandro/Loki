import { Container } from "./style";

export function Featured() {
    return (
        <Container>
            <div className="featured">
                <h2 className="featured_flag">ESTÁ DISPONÍVEL AGORA!</h2>

                <h2 className="featured_title">LOKI</h2>

                <div className="featured_section">
                    <img className="feature_logo" src="/images/capa.png" alt="loki"/>
                    <div className="featured_content">
                        <div className="featured_details"></div>
                        <p className="featured_description">
                            Em “Loki” da Marvel Studios, o vilão mercurial 
                            Loki (Tom Hiddleston) retoma seu papel
                            como o Deus do Mal em uma nova série que ocorre
                            após os eventos de “Vingadores: Endgame”.
                        </p>
                        <div className="featured_buttons"></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
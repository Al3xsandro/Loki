import { Container } from "./style";

export function Featured() {
    return (
        <Container>
            <div className="featured">
                <h2 className="featured_flag">ESTÁ DISPONÍVEL AGORA!</h2>

                <h2 className="featured_title">LOKI</h2>

                <div className="featured_section">
                    <div className="featured_content"></div>
                </div>
            </div>
        </Container>
    );
};
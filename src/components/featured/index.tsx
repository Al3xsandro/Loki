import { Container } from "./style";

import { BiTimeFive } from 'react-icons/bi'

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export function Featured() {
    return (
        <Container>
            <div className="featured">
                <h2 className="featured_flag">ESTÁ DISPONÍVEL AGORA!</h2>

                <h2 className="featured_title">LOKI</h2>

                <div className="featured_section">
                    <img className="feature_logo" src="/images/capa.png" alt="loki"/>
                    <div className="featured_content">
                        <p className="featured_description">
                            Em “Loki” da Marvel Studios, o vilão mercurial 
                            Loki (Tom Hiddleston) retoma seu papel
                            como o Deus do Mal em uma nova série que ocorre
                            após os eventos de “Vingadores: Endgame”.
                        </p>
                        <div className="featured_details">
                            <div className="feature_details">
                                <span className="feature_time"><BiTimeFive /> 51min</span>
                                
                                <span className="rating">
                                    <Rating
                                        name="customized-empty"
                                        defaultValue={5}
                                        precision={0.5}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                                </span>

                                <span className="feature_release">2021</span>
                            </div>
                        </div>
                        <div className="featured_buttons">
                            <button className="watch_now">ASSISTIR AGORA</button>
                            <button className="watch_trailer">TRAILER</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
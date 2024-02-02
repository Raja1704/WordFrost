import PropTypes from 'prop-types';
// Remove the duplicate import statement for PropTypes
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const EndGame = ({ score, onGame }) => {
    
    return (
        <div className="endGame">
            <div className="result">
                
                    EndGame.propTypes = &lbrace;
                        score: PropTypes.shape(&lbrace;
                            right: PropTypes.number.isRequired,
                            wrong: PropTypes.number.isRequired
                            &rbrace;).isRequired
                    &rbrace;;
    

                <div>
                    <div className="title">
                        Wrong answer
                    </div>
                    {/*<div className="number">
                        { score.wrong }
                    </div>*/}
                </div>
            </div>
            <button onClick={() => onGame('playing')} className='btnPlay'>Play Game Again</button>
        </div>
    );
}
export default EndGame;
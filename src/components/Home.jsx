
import PropTypes from 'prop-types';

const Home = ({ onGame }) => {
    
    return (
            <div className="home">
                <div className="title">WordForst</div>
                <div className="author">
                    By <br />
                    Raja
                </div>
                <button onClick={ () => onGame('playing') } className='btnPlay'>Play Game</button>
            </div>
    );
}

Home.propTypes = {
    onGame: PropTypes.func.isRequired
};

export default Home;
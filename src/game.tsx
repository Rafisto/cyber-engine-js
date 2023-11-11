import useDisplay from "./core/display";
import usePlayer from "./core/player";
import useMap from "./core/map";
import "./styles/display.css";

const Game = () => {
    const {
        playerPosition,
        functions: { getPlayerPosition },
    } = usePlayer();
    const {
        functions: { getMap },
    } = useMap();
    const display = useDisplay({ getPlayerPosition, getMap });

    return (
        <div>
            {display && (
                <>
                    <textarea
                        className="display"
                        cols={50}
                        rows={50}
                        readOnly
                        value={display}
                    ></textarea>

                    <p>{`${playerPosition.x}, ${playerPosition.y}`}</p>
                </>
            )}
        </div>
    );
};

export default Game;

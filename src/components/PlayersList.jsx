import players from "../data/players"
import Player from "./Player";

const PlayersList = () => {
  return (
    <div style={{display: 'flex', gap: '10px', justifyContent: "center", padding: '15px'}}>
        {players.map((player, index) => {
            return <Player {...player} />;
        })}
    </div>
  );
}

export default PlayersList;
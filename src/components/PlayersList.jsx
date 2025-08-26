// Import players data and Player component
import players from "../data/players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div 
      style={{
        display: 'flex',        // Flex layout for cards
        gap: '10px',            // Space between cards
        justifyContent: "center", 
        padding: '15px',
        flexWrap: 'wrap'        // Allows wrapping to next line on small screens
      }}
    >
      {players.map((player, index) => {
        // Added key={index} for React list rendering performance
        return <Player key={index} {...player} />;
      })}
    </div>
  );
}

export default PlayersList;

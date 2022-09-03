import Header from "../../components/header";
import GameComponent from "../../components/game/game";
import AuthWrapper from "../../components/authwrapper";

const Game = () => {
  return (
    <AuthWrapper>
      <GameComponent />
    </AuthWrapper>
  );
};

export default Game;

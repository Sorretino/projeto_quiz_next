interface PlayerProps{
  none:string
  categories? : string
    
}

const Player: React.FC = () => {
  return (
    <div>
      <div> Nome: {props.none}</div>
    </div>
  );
};
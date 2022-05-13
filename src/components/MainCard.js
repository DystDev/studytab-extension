import SText from './SText';

const MainCard = (props) => {
  return (
    <div className="mainCardContainer">
      <SText>{props.text}</SText>
    </div>
  );
};

export default MainCard;

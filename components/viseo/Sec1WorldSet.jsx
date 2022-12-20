import Sec1World from './Sec1World';

const Sec1WorldSet = ({ sec1Worlds, sec1WT }) => {

  if (sec1Worlds, sec1WT) {
    return (
      <div>
        {sec1Worlds.map((world_text) => (
          <Sec1World sec1WT={sec1WT} world_text={world_text} key={`world_text-${world_text.world_text[0].text}`} />
        ))}
      </div>
    );
  }
  return '';
};

export default Sec1WorldSet; 
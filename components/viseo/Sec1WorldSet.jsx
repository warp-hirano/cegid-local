import Sec1World from './Sec1World';

const Sec1WorldSet = ({ sec1Worlds, sec1WT }) => {
  if (sec1Worlds) {
    return (
      <div>
        {sec1Worlds.map((MapWorldText) => (
          <Sec1World sec1WT={sec1WT} WorldText={MapWorldText} key={`world_text-${MapWorldText.world_text[0].text}`} />
        ))}
      </div>
    );
  }
  return '';
};

export default Sec1WorldSet;

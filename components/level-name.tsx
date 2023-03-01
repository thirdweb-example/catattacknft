type LevelNameProps = {
  level: 1 | 2 | 3;
};

const LevelName: React.FC<LevelNameProps> = ({ level }) => {
  switch (level) {
    case 1:
      return <span>🐱 Small Kitten</span>;
    case 2:
      return <span>😾 Grumpy Cat</span>;
    case 3:
      return <span>🥷 Ninja Cat</span>;
  }
};

export default LevelName;

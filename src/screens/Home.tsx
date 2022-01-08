import { isLoggedInVar } from '../apollo';

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <>
      <button onClick={() => isLoggedInVar(false)}>Log out now!</button>
      <h1>Home</h1>
    </>
  );
};

export default Home;

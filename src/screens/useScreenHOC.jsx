import Header from '../components/Navigation/Header';

const UseScreenHOC = ({ header, footer, sidebar, component }) => {
  console.log(component);
  if (header)
    return (
      <>
        <Header />
        {component}
      </>
    );
};

export default UseScreenHOC;

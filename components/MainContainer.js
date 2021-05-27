import Head from 'next/head';

import A from './A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'super system, nextjs, ' + keywords} />
        <title>Home Page</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Home" />
        <A href="/users" text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;

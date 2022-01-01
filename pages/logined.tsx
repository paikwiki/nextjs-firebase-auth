import { NextPage } from "next";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";

type Props = {
  router: {
    query: {
      userName: string;
    };
  };
};

const Logined: NextPage<WithRouterProps & Props> = ({
  router: {
    query: { userName },
  },
}: Props) => (
  <div>
    <h1>login success - Hello, {userName}</h1>
  </div>
);

export default withRouter(Logined);

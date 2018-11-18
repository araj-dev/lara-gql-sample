// ====================================================
// Documents
// ====================================================

export namespace JobQuery {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    jobs: Jobs | null;
  };

  export type Jobs = {
    __typename?: "JobPaginator";

    data: Data[];
  };

  export type Data = {
    __typename?: "Job";

    title: string;

    user: User | null;
  };

  export type User = {
    __typename?: "User";

    name: string;

    email: string;
  };
}

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export namespace JobQuery {
  export const Document = gql`
    query JobQuery {
      jobs(count: 10, page: 1) {
        data {
          title
          user {
            name
            email
          }
        }
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any} />
      )
    }
  }
  export type Props<TChildProps = any> = Partial<ReactApollo.DataProps<Query, Variables>> &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}

import * as React from 'react';

import { JobQuery } from "./generated-models";

class JobList extends React.Component {
  public render() {
    return (
      <JobQuery.Component>
        {({loading, error, data}) => {
          if (loading) { return <div>Loading...</div>; }
          if (error) { return <div>Error :(</div>; }

          return <div>
            <ul>
              {data && data.jobs && data.jobs.data.map((job: any, idx: any) => {
                return <li key={idx}>
                    {job.title}
                  </li>;
              })}
            </ul>
          </div>;
        }}
      </JobQuery.Component>
    )
  }
}

export default JobList;

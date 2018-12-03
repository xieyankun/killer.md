import * as React from 'react';

import 'codemirror/lib/codemirror.css'

interface IStete {
  test: string,
}

class Tools extends React.Component<{}, IStete> {
  constructor(props: Readonly<{}>) {
    super(props)
  }

  public render() {
    return (
      <div className="tools">
        <h1>Tools</h1>
      </div>
    );
  }
}

export default Tools;

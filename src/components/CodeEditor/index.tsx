import * as React from 'react';

interface IStete {
  test: string,
}

class KillerMd extends React.Component<{}, IStete> {

  constructor(props: Readonly<{}>) {
    super(props)
  }

  public render() {
    return (
      <div className="code-editor">
        <h1>代码编辑</h1>
      </div>
    );
  }
}

export default KillerMd;

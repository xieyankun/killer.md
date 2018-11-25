import * as React from 'react';


interface IStete {
  test: string,
}

class Preview extends React.Component<{}, IStete> {
  constructor(props: Readonly<{}>) {
    super(props)
  }

  public render() {
    return (
      <div className="preview">
        <h1>预览</h1>
      </div>
    );
  }
}

export default Preview;

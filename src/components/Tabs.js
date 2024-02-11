import { Component } from 'react';

export default class Tabs extends Component {
  state = {
    activeTabIdx: 0,
    };
    
    shouldComponentUpdate(nextProps,nextState) {
        return this.state.activeTabIdx !== nextState.activeTabIdx;
    }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

    render() {
        const activeTabIdx = this.state.activeTabIdx;
        const activeTab = this.props.items[activeTabIdx];
      console.log('rerender')
    return (
      <>
        <div>
          {this.props.items.map((item, idx) => (
            <button type="button" key={item.label} onClick={()=>this.setActiveTabIdx(idx)}>
              {item.label}
            </button>
          ))}
            </div>
            <div>
                <h2> {activeTab.label}</h2>
                <p>{activeTab.content}</p>
            </div>
      </>
    );
  }
}

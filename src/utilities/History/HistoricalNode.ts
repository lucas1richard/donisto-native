// @flow

class HistoricalNode {
  /**
   * @param {Object} state nav redux state
   * @param {HistoricalNode} previousNode
   */
  state: any;
  previous?: HistoricalNode;
  constructor(state: Object, previousNode: HistoricalNode) {
    this.state = state;
    this.previous = previousNode;
  }

  /** Get the previous historical state */
  getPrevious(): HistoricalNode {
    if (this.previous) {
      return this.previous;
    }
    return this;
  }
}

export default HistoricalNode;

// let history = new HistoricalNode(initialState, null);
// history = new HistoricalNode(newState, history);
// history = history.getPrevious();

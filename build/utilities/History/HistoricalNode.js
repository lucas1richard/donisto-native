// @flow
class HistoricalNode {
    constructor(state, previousNode) {
        this.state = state;
        this.previous = previousNode;
    }
    /** Get the previous historical state */
    getPrevious() {
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
//# sourceMappingURL=HistoricalNode.js.map
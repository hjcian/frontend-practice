// import vis from 'vis-network';
// import * as vis from 'vis-network';
// import { DataSet } from 'vis-data/peer';

import {DataSet, Network} from 'vis-network/standalone'

let nodes = new DataSet([
  { id: 1, label: 'Node 1' },
  { id: 2, label: 'Node 2' },
  { id: 3, label: 'Node 3' },
  { id: 4, label: 'Node 4' },
  { id: 5, label: 'Node 5' },
]);

// create an array with edges
let edges = new DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
]);

// create a network

// provide the data in the vis format
let data = {
  nodes: nodes,
  edges: edges,
};

export const createVisNetwork = () => {
  console.log('createVisNetwork');
  let container = document.getElementById('mynetwork');
  let options = {};

  // initialize your network!
  let network = new Network(container, data, options);
};

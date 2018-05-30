import { Component, State } from '@stencil/core';

@Component({
  tag: 'ionic-search',
  styleUrl: 'ionic-search.scss',
  shadow: false
})
export class IonicSearch {

  @State() active = false;

  componentDidLoad() {

  }

  close() {
    this.active = false;
  }

  render() {
    return [
      <div />
    ];
  }
}

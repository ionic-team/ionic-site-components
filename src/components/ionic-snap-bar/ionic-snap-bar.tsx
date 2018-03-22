import { Component, State } from '@stencil/core';

@Component({
  tag: 'ionic-snap-bar',
  styleUrl: 'ionic-snap-bar.scss',
  shadow: false
})
export class IonicSnapBar {

  @State() active = false;

  componentDidLoad() {
    setTimeout(() => {
      this.active = true;
    }, 3000);
  }

  close() {
    this.active = false;
  }

  render() {
    return [
      <div class={`wrapper ${this.active ? 'active' : ''}`}>
        <slot/>
      </div>,
      <div class="close" onClick={this.close.bind(this)}>&#xd7;</div>
    ];
  }
}

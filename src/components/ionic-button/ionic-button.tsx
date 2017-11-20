import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ionic-button',
  styleUrl: 'ionic-button.scss',
  shadow: false
})
export class IonicButton {

  @Prop() color: string = 'default';
  @Prop() type: string = 'button';

  render() {
    return (
      <button
        class={this.color}
        type={this.type}>

        <slot/>
      </button>
    );
  }
}

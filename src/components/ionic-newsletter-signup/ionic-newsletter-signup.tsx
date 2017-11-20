import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ionic-newsletter-signup',
  styleUrl: 'ionic-newsletter-signup.scss',
  shadow: false
})
export class IonicNewsletterSignup {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <form
        action="/api/v1/newsletter"
        method="post">

        <input
          name="email"
          type="email"
          placeholder="Get the latest ionic framework news and updates"
          required />

        <ionic-button color="white" type="submit">Email me!</ionic-button>
      </form>
    );
  }
}

import { Component, State } from '@stencil/core';

@Component({
  tag: 'ionic-newsletter-signup',
  styleUrl: 'ionic-newsletter-signup.scss',
  shadow: false
})
export class IonicNewsletterSignup {

  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() email: string = null;

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.isLoading = true;
    var xhr = new XMLHttpRequest();   // new HttpRequest instance
    xhr.open("POST", "http://localhost:3003/api/v1/newsletter");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
      console.log(xhr)
      if (xhr.readyState === 4 && xhr.status === 200) {
          this.isLoading = false;
          var json = JSON.parse(xhr.responseText);
          this.hasSubmitted = json.ok;
      }
    };
    xhr.send(JSON.stringify({ email: this.email}));
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>

        <input
          name="email"
          type="email"
          value={this.email}
          onInput={() => this.handleEmailChange(event)}
          disabled={this.isLoading}
          placeholder="Get the latest ionic framework news and updates"
          required />


        <ionic-button color="white"
                      type="submit"
                      disabled={this.isLoading || this.hasSubmitted}>
          {this.hasSubmitted ? 'Added!' : 'Email me!'}
        </ionic-button>
      </form>
    );
  }
}

/*! Built with http://stenciljs.com */

mycomponent.loadStyles("my-component","form[data-my-component] {\n  max-width: 458px;\n  float: right;\n  position: relative;\n  display: table;\n  border-collapse: separate;\n  width: 100%;\n}\n\n\@media (max-width: 991px) {\n  form[data-my-component] {\n    max-width: calc(100% - 340px);\n  }\n}\n\n\@media (max-width: 767px) {\n  form[data-my-component] {\n    float: none;\n    max-width: 100%;\n    margin-top: 15px;\n  }\n}\n\ninput[data-my-component] {\n  border: 1px solid rgba(255, 255, 255, 0);\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 13px;\n  color: white;\n  box-shadow: none;\n  font-weight: normal;\n  height: 40px;\n  padding: 1px 16px 0px;\n  transition: .2s background, .2s box-shadow;\n}\n\ninput[data-my-component]:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n\ninput[data-my-component]:focus {\n  box-shadow: none;\n  border: 1px solid rgba(255, 255, 255, 0);\n  background: rgba(255, 255, 255, 0.25);\n}\n\ninput[data-my-component]::placeholder {\n  padding-left: 0;\n  color: #bbceef;\n}\n\nbutton[data-my-component] {\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 11px 13px 10px;\n  border-radius: 2px;\n  letter-spacing: 0;\n  text-transform: none;\n  background: #fff;\n  color: #4a8bfc;\n  line-height: 1.4em;\n  transition: all .2s linear;\n}\n\nbutton[data-my-component]:hover {\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\n}\n\nbutton[data-my-component]:active {\n  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);\n  background: white;\n}\nmy-component.hydrated{visibility:inherit}");
mycomponent.loadComponents(

/**** module id (dev mode) ****/
"my-component",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class MyComponent {
    render() {
        return (h("form", { action: "https://codiqa.createsend.com/t/t/s/jytylh/", method: "post", class: "input-group col-md-5" },
            h("input", { name: "cm-jytylh-jytylh", class: "form-control", type: "email", placeholder: "Get the latest ionic framework news and updates", required: true }),
            h("span", { class: "input-group-btn" },
                h("button", { class: "btn white sm", type: "submit" }, "Email me!"))));
    }
}

exports['my-component'] = MyComponent;
},


/***************** my-component *****************/
[
/** my-component: tag **/
"my-component",

/** my-component: members **/
[
  [ "first", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "last", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** my-component: host **/
{}

]
);
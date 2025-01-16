import '@ui-core/elements-atoms';
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bui-lit-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'bui-lit-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        accordionTitle?: string;
      };
      'bui-lit-accordion-group': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export function App() {
  return (
    <div>
      <bui-lit-button>Button</bui-lit-button>
      <hr className="bui-my-3" />
      <bui-lit-accordion-group>
        <bui-lit-accordion accordionTitle="Accordion 1">Accordion 1</bui-lit-accordion>
        <bui-lit-accordion accordionTitle="Accordion 2">Accordion 2</bui-lit-accordion>
        <bui-lit-accordion accordionTitle="Accordion 3">Accordion 3</bui-lit-accordion>
      </bui-lit-accordion-group>
    </div>
  );
}

export default App;

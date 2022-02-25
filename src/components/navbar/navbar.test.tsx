import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';


describe("navbar", () => {
  it("renders correctly", () => {
    const view = render(<Home />);
    expect(view).toMatchSnapshot();
  });
});

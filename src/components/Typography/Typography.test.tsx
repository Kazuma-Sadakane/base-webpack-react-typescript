import {render, screen} from '@testing-library/react';
import {Typography} from './Typography';

test('render typograpy', () => {
  render(<Typography text="kazuma" />);
  const text = screen.getByText(/kazuma/i);
  expect(text).toBeInTheDocument();
});

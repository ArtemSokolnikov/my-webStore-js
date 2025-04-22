import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../Button';


test("Button click works",()=>{
  const mockFn = jest.fn();
  render(<Button onClick={mockFn} />);
  fireEvent.click(screen.getByText("Click me"));

  expect(mockFn).toHaveBeenCalledTimes(1);

})

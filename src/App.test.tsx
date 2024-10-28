
import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//);

describe("Test Expense Updates", () => {
  test("Add Expense", () => {
    render(<App />);
    const name = screen.getByLabelText("Name");
    const cost = screen.getByLabelText("Cost");
    const saveButton = screen.getByText("Save");

    fireEvent.change(name, { target: { value: "Test on item1" } });
    fireEvent.change(cost, { target: { value: 600 } });
    fireEvent.click(saveButton);

    expect(screen.getByText("Test on item1")).toBeInTheDocument();
    expect(screen.getByText("$600")).toBeInTheDocument();
    expect(screen.getByText("Remaining: $400")).toBeInTheDocument();
    expect(screen.getByText("Spent so far: $600")).toBeInTheDocument();
    expect(screen.getByText("Budget: $1000")).toBeInTheDocument();
  });

  test("Remove Expense", () => {
    render(<App />);
    const name = screen.getByLabelText("Name");
    const cost = screen.getByLabelText("Cost");
    const saveButton = screen.getByText("Save");

    fireEvent.change(name, { target: { value: "Test on item1" } });
    fireEvent.change(cost, { target: { value: 600 } });
    fireEvent.click(saveButton);
    const deleteButton = screen.getByText("x");
    fireEvent.click(deleteButton);
    expect(screen.getByText("Remaining: $1000")).toBeInTheDocument();
    expect(screen.getByText("Spent so far: $0")).toBeInTheDocument();

    const nameQuery = screen.queryByText("Test on item1");
    expect(nameQuery).toBeNull();
  });

  
  test("Check Budget Amount", () => {
    render(<App />);
    const name = screen.getByLabelText("Name");
    const cost = screen.getByLabelText("Cost");
    const saveButton = screen.getByText("Save");

    const getExpenses = screen.getByText("Spent so far: $0");
    const getRemaining = screen.getByText("Remaining: $1000");
    const getBudget = screen.getByText("Budget: $1000");

    fireEvent.change(name, { target: { value: "Test on item1" } });
    fireEvent.change(cost, { target: { value: 600 } });
    fireEvent.click(saveButton);

    expect(screen.getByText("Remaining: $400")).toBeInTheDocument();
    expect(screen.getByText("Spent so far: $600")).toBeInTheDocument();
    expect(screen.getByText("Budget: $1000")).toBeInTheDocument();
   
  });

  test("Check Overbudget Alert is called", () => {
    render(<App />);
   
    const name = screen.getByLabelText("Name");
    const cost = screen.getByLabelText("Cost");
    const saveButton = screen.getByText("Save");

    const spy = jest.spyOn(window, "alert");
    fireEvent.change(name, { target: { value: "Test on item2" } });
    fireEvent.change(cost, { target: { value: 2000 } });
    //fireEvent.change(cost, { target: { value: 1000 } }); // make test fail
    fireEvent.click(saveButton);
    

    expect(spy).toBeCalled();
    });

     

});

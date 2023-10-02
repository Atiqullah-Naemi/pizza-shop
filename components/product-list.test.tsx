import { render, screen } from "@testing-library/react";
import ProductList from "./product-list";

const mockData = [
  {
    id: "872634uadf",
    name: "Mexicana",
    price: "22",
    imageSrc:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    ingredients: [{ label: "label", value: "value" }],
  },
];

describe("product-list", () => {
  it("should render product list", () => {
    render(<ProductList items={mockData} />); // ARRANGE

    //ACT
    const list = screen.getByTestId("product-list");

    expect(list).toBeInTheDocument();
  });
});

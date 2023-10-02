import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./product-card";
import { MouseEventHandler } from "react";

const mockData = {
  id: "872634uadf",
  name: "Mexicana",
  price: "22",
  imageSrc:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
  ingredients: [{ label: "label", value: "value" }],
};

const Button = ({
  onClick,
  children,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => <button onClick={onClick}>{children}</button>;

describe("Product card", () => {
  describe("Render", () => {
    it("should render product card", () => {
      render(<ProductCard data={mockData} />);

      const card = screen.getByTestId("product-card");

      expect(card).toBeInTheDocument();
    });
  });

  describe("Behave", () => {
    it("should call addToBasket when button is clicked", async () => {
      const mockedFunction = jest.fn();

      render(<Button onClick={mockedFunction}>Add To Cart</Button>);

      fireEvent.click(screen.getByRole("button"));
      expect(mockedFunction).toHaveBeenCalledTimes(1);
    });
  });
});

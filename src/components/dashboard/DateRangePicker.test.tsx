import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { DateRangePicker } from "./DateRangePicker";
import { useRouter, useSearchParams } from "next/navigation";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe("DateRangePicker", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the date range picker button", () => {
    (useSearchParams as any).mockReturnValue(new URLSearchParams());
    render(<DateRangePicker />);
    const buttons = screen.getAllByRole("button");
    const dateButton = buttons.find(b => b.id === "date");
    expect(dateButton).toBeTruthy();
    expect(dateButton?.textContent).toContain("Selecione um período");
  });

  it("displays dates from search params", () => {
    const params = new URLSearchParams();
    params.set("from", "2026-05-01T12:00:00");
    params.set("to", "2026-05-10T12:00:00");
    (useSearchParams as any).mockReturnValue(params);

    render(<DateRangePicker />);
    
    const buttons = screen.getAllByRole("button");
    const dateButton = buttons.find(b => b.id === "date");
    expect(dateButton).toBeTruthy();
    expect(dateButton?.textContent).toContain("May 01, 2026");
    expect(dateButton?.textContent).toContain("May 10, 2026");
  });
});

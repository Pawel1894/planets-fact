import React from "react";
import { VIEW } from "./Planet";

type Props = {
  currentView: VIEW;
  setCurrentView: React.Dispatch<React.SetStateAction<VIEW>>;
};

export default function Controls({ currentView, setCurrentView }: Props) {
  return (
    <div className="px-6 flex justify-between border-b border-b-neutral-200">
      <button
        className={`control-btn ${
          currentView === VIEW.overview ? "control-btn_active before:bg-accent-400" : ""
        }`}
        onClick={() => setCurrentView(VIEW.overview)}
      >
        overview
      </button>
      <button
        className={`control-btn ${
          currentView === VIEW.structure ? "control-btn_active before:bg-accent-400" : ""
        }`}
        onClick={() => setCurrentView(VIEW.structure)}
      >
        structure
      </button>
      <button
        className={`control-btn ${
          currentView === VIEW.surface ? "control-btn_active before:bg-accent-400" : ""
        }`}
        onClick={() => setCurrentView(VIEW.surface)}
      >
        surface
      </button>
    </div>
  );
}

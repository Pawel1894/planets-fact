import React from "react";
import Parameter from "./Parameter";

type Props = {
  radius: string;
  revolution: string;
  rotation: string;
  temperature: string;
};

export default function Parameters({ radius, revolution, rotation, temperature }: Props) {
  return (
    <div className="mt-7 mx-6 grid gap-2">
      <Parameter key="rotation-time" label="rotation time" value={rotation} />
      <Parameter key="revolution-time" label="revolution time" value={revolution} />
      <Parameter key="radius" label="radius" value={radius} />
      <Parameter key="temperature" label="average temp." value={temperature} />
    </div>
  );
}

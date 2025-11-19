import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "../../../lib/utils";

type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  };
};

type ChartContextProps = { config: ChartConfig };

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used inside ChartContainer");
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ config: ChartConfig; className?: string }>
>(({ children, config, className, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div ref={ref} className={cn("w-full h-80", className)} {...props}>
        <Recharts.ResponsiveContainer>{children}</Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

// ---------------- Tooltip ----------------
type TooltipPayloadItem = {
  value?: number | string;
  name?: string;
  dataKey?: string;
  payload?: any;
  color?: string;
};

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
  className?: string;
  nameKey?: string;
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ active, payload, label, hideLabel, hideIndicator, indicator = "dot", className, nameKey }, ref) => {
    const { config } = useChart();
    if (!active || !payload || payload.length === 0) return null;

    return (
      <div ref={ref} className={cn("bg-white border p-2 shadow rounded text-xs", className)}>
        {!hideLabel && label && <div className="font-medium mb-1">{label}</div>}
        {payload.map((item, index) => {
          const key = nameKey || item.dataKey || item.name || `item-${index}`;
          const itemConfig = config[key];
          const indicatorColor = item.color || itemConfig?.color || "#000";

          return (
            <div key={index} className="flex items-center gap-2">
              {!hideIndicator && <span style={{ backgroundColor: indicatorColor }} className="w-2 h-2 rounded-full" />}
              <span>{itemConfig?.label || item.name}</span>
              <span className="ml-auto">{item.value}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// ---------------- Legend ----------------
interface ChartLegendContentProps {
  payload?: Recharts.LegendPayload[];
  verticalAlign?: "top" | "bottom" | "left" | "right";
  hideIcon?: boolean;
  nameKey?: string;
  className?: string;
}

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ payload, verticalAlign = "bottom", hideIcon, nameKey, className }, ref) => {
    const { config } = useChart();
    if (!payload || payload.length === 0) return null;

    return (
      <div ref={ref} className={cn("flex gap-4 items-center justify-center", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
        {payload.map((item, index) => {
          const key = nameKey || item.dataKey || `item-${index}`;
          const itemConfig = config[key as keyof ChartConfig];

          return (
            <div key={index} className="flex items-center gap-1.5">
              {!hideIcon && <span style={{ backgroundColor: item.color }} className="w-2 h-2 rounded" />}
              {itemConfig?.label || item.value}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegendContent";

export { ChartContainer, ChartTooltipContent, ChartLegendContent };

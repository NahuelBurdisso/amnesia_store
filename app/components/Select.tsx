import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { cn } from "~/utils/cn";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function CustomSelect({
  options,
  placeholder = "Seleccionar...",
  value,
  onValueChange,
  className,
  disabled = false,
}: SelectProps) {
  return (
    <Select.Root
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <Select.Trigger
        className={cn(
          "inline-flex items-center justify-between px-4 py-3 text-sm font-montserrat",
          "bg-white border border-gray-200 rounded-md shadow-sm text-gray-900",
          "hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[placeholder]:text-gray-500",
          "min-w-[180px]",
          className
        )}
        aria-label={placeholder}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon asChild>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={cn(
            "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200",
            "bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
        >
          <Select.ScrollUpButton className="flex cursor-default items-center justify-center py-1 text-gray-700">
            <ChevronUp className="h-4 w-4" />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className={cn(
                  "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm font-montserrat",
                  "text-gray-900 outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                  "hover:bg-gray-50 focus:text-gray-900"
                )}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <Select.ItemIndicator>
                    <Check className="h-4 w-4 text-gray-900" />
                  </Select.ItemIndicator>
                </span>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className="flex cursor-default items-center justify-center py-1 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
